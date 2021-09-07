import Head from 'next/head';
import DefaultLayout from '../components/layouts/default';
import { getCollectionSlugs, getCollectionItem } from '../lib/collections';

export default function Home({ page }) {
	return (
		<DefaultLayout home>
			<Head>
				<title>{page.title}</title>
			</Head>

			<div className="page-header">
				<h2>{page.title}</h2>
			</div>

			<article className="content">
				<div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />

				<div className="testimonials">
					{page.testimonials.map((testimonial, i) => (
						<blockquote className="testimonial" key={i}>
							<p className="testimonial-message">{testimonial.message}</p>
							<p className="testimonial-author">
								<img src={testimonial.testimonial_image} alt={`Photo of ${testimonial.name}`} />
								{testimonial.name}
							</p>
						</blockquote>
					))}
				</div>
			</article>
		</DefaultLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'index');

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}
