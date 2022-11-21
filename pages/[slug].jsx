import PageLayout from '../components/layouts/page';
import Filer from '@cloudcannon/filer';

const filer = new Filer({ path: 'content' });

export default function Page({ page }) {
	return (
		<PageLayout page={page} />
	);
}

export async function getStaticPaths() {
	const slugs = await filer.listItemSlugs('pages');
	const ignored = {
		about: true,
		blog: true,
		contact: true,
		index: true
	};

	return {
		paths: slugs.filter((slug) => !ignored[slug]).map((slug) => ({ params: { slug } })),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem(`${params.slug}.md`, { folder: 'pages' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}
