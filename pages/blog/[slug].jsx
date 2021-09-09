import PostLayout from '../../components/layouts/post';
import { getCollectionSlugs, getCollectionItem } from '../../lib/collections';

export default function Post({ page, author }) {
	return (
		<PostLayout page={page} author={author} />
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
