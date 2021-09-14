import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import data from '../../lib/data';
import Icon from '../../components/icon';

export default function DefaultLayout({ children, page }) {
	const title = page.title ? `${page.title} | ${data.seo.site_title}` : data.seo.site_title;
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
					url: data.site.url,
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
					<h1><Link href="/">{data.company.company_name}</Link></h1>
					<nav>
						<ul>
							<li>
								<Link href="/about">
									<a className={page.slug === 'about' ? 'active' : ''}>About</a>
								</Link>
							</li>
							<li>
								<Link href="/services">
									<a className={page.slug === 'services' ? 'active' : ''}>Services</a>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<a className={page.slug === 'contact' ? 'active' : ''}>Contact</a>
								</Link>
							</li>
							<li>
								<Link href="/blog">
									<a className={page.slug === 'blog' ? 'active' : ''}>Blog</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<section className="main">
				<div className="container">{children}</div>
			</section>

			{page.call_to_action === 'Contact' && (
				<section className="quote-section">
					<p className="container">
						<Link href="/contact">Contact us</Link> today to find out how we can help you. Your first consultation is free.
					</p>
				</section>
			)}

			{page.call_to_action === 'Blog' && (
				<section className="quote-section">
					<p className="container">
						<Link href="/blog">Read our blog</Link> for an introduction and quick tips on various areas of the law.
					</p>
				</section>
			)}

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
										<Link href={link.link}>
											<a target={link.new_window ? '_blank' : '_self'}>
												{link.social_icon && <Icon icon={link.social_icon} />} {link.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						))}

						<ul className="footer-links">
							<li>
								<h2>{data.company.company_name}</h2>
							</li>
							<li>{data.company.description}</li>
							<li>
								<Link href="/feed.xml"><a><Icon icon="RSS" /> Subscribe with RSS</a></Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="legal-line">
					<p className="container">
						&copy; {new Date().getFullYear()} {data.company.company_name} &bull; <Link href="/terms">Terms</Link> &bull; Template by <Link href="https://cloudcannon.com/">CloudCannon</Link>
					</p>
				</div>
			</footer>
		</>
	);
}
