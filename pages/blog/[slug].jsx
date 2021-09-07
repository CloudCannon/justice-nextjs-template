import Head from 'next/head';
import DefaultLayout from '../../components/layouts/default';
import PostSummary from '../../components/post-summary';
import PostSummaryDetails from '../../components/post-summary-details';
import StaffMember from '../../components/staff-member';
import { getCollectionSlugs, getCollectionItem } from '../../lib/collections';

export default function Post({ page, author }) {
	return (
		<DefaultLayout>
			<Head>
				<title>{page.title}</title>
			</Head>
			<article>
				<PostSummaryDetails post={page} />
				<div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />

				<h2>Meet the author</h2>
			  <ul className="post-author staff-list">
					<StaffMember staffMember={author} />
				</ul>

				<h2>Keep reading</h2>
			{/*	<ol className="post-links post-list">
					<PostSummary post={nextPost} key={i} />
					<PostSummary post={previousPost} key={i} />
				</ol>*/}

				<h2>Have your say</h2>
				{/*<Disqus>*/}
			</article>
		</DefaultLayout>
	);
}

export async function getStaticPaths() {
	return {
		paths: await getCollectionSlugs('posts'),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('posts', params.slug);
	const author = await getCollectionItem('staff-members', page.author_staff_member);

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			author
		}
	};
}
