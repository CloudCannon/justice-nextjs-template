import { writeFile } from 'fs/promises';
import PageLayout from '../../components/layouts/page';
import PostSummary from '../../components/post-summary';
import { getCollection, getCollectionItem } from '../../lib/collections';
import { generateRss } from '../../lib/rss';

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
	const page = await getCollectionItem('pages', 'blog');
	const posts = await getCollection('posts', { excerpt: true, sortKey: 'date' });
	const postsWithAuthor = await Promise.all(posts.map(async (post) => {
		const author = await getCollectionItem('staff-members', post.author_staff_member);
		return { ...post, author }
	}));

	await writeFile('./public/feed.xml', generateRss(postsWithAuthor));

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			posts: JSON.parse(JSON.stringify(postsWithAuthor))
		}
	};
}
