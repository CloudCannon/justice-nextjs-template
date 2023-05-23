import DefaultLayout from './default';

export default function PageLayout({ children, page }) {
	return (
		<DefaultLayout page={page}>
			<div className="page-header">
				<h2>{page.data.title}</h2>
			</div>

			<article className="content">
				<div dangerouslySetInnerHTML={{ __html: page.data.content_html }} />

				{children}
			</article>
		</DefaultLayout>
	);
}
