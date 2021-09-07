import Head from 'next/head';
import DefaultLayout from '../components/layouts/default';
import { getCollectionSlugs, getCollectionItem } from '../lib/collections';

export default function Page({ page }) {
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
			</article>
		</DefaultLayout>
	);
}

export async function getStaticPaths() {
	return {
		paths: await getCollectionSlugs('pages'),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', params.slug);

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}
