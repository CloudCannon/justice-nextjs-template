import data from './data';

function generateEntry(post) {
	const url = `${data.site.url}blog/${post.slug}`;
	const html = post.content_html?.replace(/ href="\/([^/])/g, ` href="${data.site.url}/$1`) || '';

	return `<entry>
		<title>${post.data.title}</title>
		<link href="${url}"/>
		<updated>${post.data.date.toISOString()}</updated>
		<id>${url}</id>
		<content type="html">${escape(html)}</content>
	</entry>`;
}

export function generateRss(posts) {
	const feedUrl = `${data.site.url}feed.xml`;
	const updated = posts[0]?.data?.date
		? `<updated>${posts[0].data?.date.toISOString()}</updated>`
		: '';

	return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>${data.seo.site_title}</title>
	<link href="${feedUrl}" rel="self"/>
	<link href="${data.site.url}"/>
	${updated}
	<id>${data.site.url}</id>
	<author>
		<name>${data.seo.author}</name>
		<email>${data.seo.author_email}</email>
	</author>
	${posts.map(generateEntry).join('')}
</feed>`;
}
