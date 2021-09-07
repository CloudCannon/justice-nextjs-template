import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ html: true });
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const slug = path.basename(fileName, path.extname(fileName));
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const parsed = matter(fileContents);

		return {
			...parsed.data,
			slug
		};
	})

	return allPostsData.sort((a, b) => {
		if (a.date === b.date) {
			return 0;
		}

		return (a.date < b.date) ? 1 : -1;
	});
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map((fileName) => ({
		params: {
			slug: path.basename(fileName, path.extname(fileName))
		}
	}));
}

export function getPostData(slug) {
	const fullPath = path.join(postsDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const parsed = matter(fileContents);
	const contentHtml = md.render(parsed.content);

	return {
		...parsed.data,
		slug,
		contentHtml
	};
}
