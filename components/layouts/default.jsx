import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import data from '../../lib/data';

export default function DefaultLayout({ children, page }) {
	const title = page.title ? `${page.title} | ${data.seo.title}` : data.seo.title;
	const description = page.description || data.seo.description;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="apple-touch-icon" href="/apple-touch-icon.png"/ >
				<link rel="icon" type="image/png" href="/touch-icon.png" sizes="192x192" />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>

			<NextSeo
				title={title}
				description={description}
				openGraph={{
					site_name: data.seo.site_name,
					url: data.seo.url,
					title: title,
					description: description,
					images: data.seo.images.map((image) => ({
						url: image.image,
						width: image.height,
						height: image.width,
						alt: image.description
					}))
				}}
			/>

			<header style={{backgroundImage:'url(/uploads/building.jpg)'}} className={page.large_header ? 'main-hero' : ''}>
				<div className="container">
					<h1><Link href="/">{data.company.title}</Link></h1>
					<nav>
						<ul>
							<li><Link href="/about">About</Link></li>
							<li><Link href="/services">Services</Link></li>
							<li><Link href="/contact">Contact</Link></li>
							<li><Link href="/blog">Blog</Link></li>
						</ul>
					</nav>
				</div>
			</header>

			<section className="main">
				<div className="container">{children}</div>
			</section>

			<footer>
				<div className="container">
					<div className="footer-columns" data-cms-editor-link="cloudcannon:collections/content/data/footer.json">
						{data.footer.map((column) => (
							<ul className="footer-links" key={column.title}>
								<li>
									<h2>{column.title}</h2>
								</li>

								{column.links.map((link) => (
									<li key={link.name}>
										<Link
											target={link.new_window ? '_blank' : '_self'}
											href={link.link}
											className={link.social_icon ? `${link.social_icon}-icon` : ''}>
											{/*{% if link.social_icon %}
												{% socialIcon link.social_icon | safe %}
											{% endif %}*/}

											{link.name}
										</Link>
									</li>
								))}
							</ul>
						))}

						<ul className="footer-links">
							<li>
								<h2>{data.company.title}</h2>
							</li>
							<li>{data.company.description}</li>
							<li>
								{/*<Link href="/feed.xml">{% socialIcon 'RSS' | safe %} Subscribe with RSS</Link>*/}
								<Link href="/feed.xml">Subscribe with RSS</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="legal-line">
					<p className="container">
						&copy; {new Date().getFullYear()} {data.company.title}
						&bull;
						<Link href="/terms">Terms</Link>
						&bull;
						Template by <Link href="https://cloudcannon.com/">CloudCannon</Link>
					</p>
				</div>
			</footer>
		</>
	);
}
