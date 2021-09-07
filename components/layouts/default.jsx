import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import companyData from '../../data/company.json';
import footerData from '../../data/footer.json';
import seoData from '../../data/seo.json';
import siteData from '../../data/site';

export const data = {
	company: companyData,
	footer: footerData,
	seo: seoData,
	site: siteData
};

export default function DefaultLayout({ children, home }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{seoData.title}</title>

				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quattrocento|Vollkorn:400,400i,700,700i" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png"/ >
				<link rel="icon" type="image/png" href="/touch-icon.png" sizes="192x192" />
				<link rel="icon" type="image/png" href="/favicon.png" />

				<meta name="description" content={seoData.description} />
				<meta name="og:title" content={seoData.title} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<header style={{backgroundImage:'url(/uploads/building.jpg)'}} className={home ? 'main-hero' : ''}>
				<div className="container">
					<h1><a href="/">{companyData.title}</a></h1>
					<nav>
						<ul>
							<li><a href="/about">About</a></li>
							<li><a href="/services">Services</a></li>
							<li><a href="/contact">Contact</a></li>
							<li><a href="/blog">Blog</a></li>
						</ul>
					</nav>
				</div>
			</header>

			<section className="main">
				<div className="container">{children}</div>
			</section>

			<footer>
				<div className="container">
					<div className="footer-columns" data-cms-editor-link="cloudcannon:collections/content/data/footer.yml">
						{footerData.map((column) => (
							<ul className="footer-links" key={column.title}>
								<li>
									<h2>{column.title}</h2>
								</li>

								{column.links.map((link) => (
									<li key={link.name}>
										<a
											target={link.new_window ? '_blank' : '_self'}
											href={link.link}
											className={link.social_icon ? `${link.social_icon}-icon` : ''}>
											{/*{% if link.social_icon %}
												{% socialIcon link.social_icon | safe %}
											{% endif %}*/}

											{link.name}
										</a>
									</li>
								))}
							</ul>
						))}

						<ul className="footer-links">
							<li>
								<h2>{companyData.title}</h2>
							</li>
							<li>{companyData.description}</li>
							{/*<li><a href="/feed.xml">{% socialIcon 'RSS' | safe %} Subscribe with RSS</a></li>*/}
						</ul>
					</div>
				</div>

				<div className="legal-line">
					<p className="container">
						&copy; {new Date().getFullYear()} {companyData.title}
						&bull;
						<a href="/terms">Terms</a>
						&bull;
						Template by <a href="https://cloudcannon.com/">CloudCannon</a>
					</p>
				</div>
			</footer>
		</>
	);
}
