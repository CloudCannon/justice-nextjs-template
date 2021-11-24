import PageLayout from '../components/layouts/page';
import data from '../lib/data';
import { getCollectionSlugs, getCollectionItem } from '../lib/collections';

export default function Contact({ page }) {
	return (
		<PageLayout page={page}>
			<div className="columns">
				<div className="column">
					<p className="editor-link"><a href="cloudcannon:collections/content/data/company.yml" className="btn"><strong>&#9998;</strong> Update Company Details</a></p>

					<label>Phone Number</label>
					<p className="contact-info">
						<a href={`tel:${data.company.phone}`}>{data.company.phone}</a>
					</p>

					<label>Email Address</label>
					<p className="contact-info">
						<a href={`mailto:${data.company.contact_email_address}`}>{data.company.contact_email_address}</a>
					</p>

					<label>Postal Address</label>
					<address
						className="contact-info"
						dangerouslySetInnerHTML={{ __html: data.company.postal_address.replace(/,/g, '<br>') }}></address>

					<label>Address</label>
					<address
						className="contact-info"
						dangerouslySetInnerHTML={{ __html: data.company.address.replace(/,/g, '<br>') }}></address>
				</div>

				<div className="column">
					<form method="post" action="/contact-success">
						<label htmlFor="email_address">Email Address</label>
						<input id="email_address"type="text" name="email" />

						<label htmlFor="name">Name</label>
						<input id="name" type="text" name="name" />

						<label htmlFor="message">Message</label>
						<textarea id="message" name="message"></textarea>

						<input type="hidden" name="_to" value={data.company.contact_email_address} />
						<input type="text" name="_gotcha" style={{display: 'none'}} />

						<input type="submit" value="Send Message" />
					</form>
				</div>
			</div>
		</PageLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'contact');

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}
