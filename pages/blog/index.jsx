import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from '../../components/layouts/default';
import PostSummary from '../../components/post-summary';
import { getCollection, getCollectionItem } from '../../lib/collections';

export default function Blog({ page, posts }) {
	return (
		<DefaultLayout>
			<Head>
				<title>{page.title}</title>
			</Head>

			<div className="page-header">
				<h2>{page.title}</h2>
			</div>

			<article className="content">
				<div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />

				<ol className="post-list">
					{posts.map((post, i) => (
						<PostSummary post={post} key={i} />
					))}
				</ol>
			</article>
		</DefaultLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'blog');
	const posts = await getCollection('posts', { excerpt: true, sortKey: 'date' });
	const postsWithAuthor = await Promise.all(posts.map(async (post) => {
		const author = await getCollectionItem('staff-members', post.author_staff_member);
		return { ...post, author }
	}));

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			posts: JSON.parse(JSON.stringify(postsWithAuthor))
		}
	};
}
