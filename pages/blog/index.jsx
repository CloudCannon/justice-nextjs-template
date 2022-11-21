import { writeFile } from 'fs/promises';
import PageLayout from '../../components/layouts/page';
import PostSummary from '../../components/post-summary';
import { generateRss } from '../../lib/rss';
import Filer from '@cloudcannon/filer';

const filer = new Filer({ path: 'content' });

export default function Blog({ page, posts }) {
	return (
		<PageLayout page={page}>
			<ol className="post-list">
				{posts.map((post, i) => (
					<PostSummary post={post} key={i} />
				))}
			</ol>
		</PageLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem('blog.md', { folder: 'pages' });
	const posts = await filer.getItems('posts', { excerpt: true, sortKey: 'date' });

	const postsWithAuthor = await Promise.all(posts.map(async (post) => {
		const author = await filer.getItem(`${post.data.author_staff_member}.md`, {
			folder: 'staff-members'
		});

		return { ...post, author };
	}));

	await writeFile('./public/feed.xml', generateRss(postsWithAuthor));

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			posts: JSON.parse(JSON.stringify(postsWithAuthor))
		}
	};
}
