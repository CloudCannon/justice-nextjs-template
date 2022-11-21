import PostLayout from '../../components/layouts/post';
import Filer from '@cloudcannon/filer';

const filer = new Filer({ path: 'content' });

export default function Post({ page, author }) {
	return (
		<PostLayout page={page} author={author} />
	);
}

export async function getStaticPaths() {
	const slugs = await filer.listItemSlugs('posts');

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem(`${params.slug}.md`, { folder: 'posts' });
	const author = await filer.getItem(`${page.data.author_staff_member}.md`, { folder: 'staff-members' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			author
		}
	};
}
