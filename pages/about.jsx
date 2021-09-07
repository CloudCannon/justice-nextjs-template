import Head from 'next/head';
import DefaultLayout, { data } from '../components/layouts/default';
import StaffMember from '../components/staff-member';
import { getCollection, getCollectionItem } from '../lib/collections';

export default function About({ page, staffMembers }) {
	return (
		<DefaultLayout>
			<Head>
				<title>{page.title}</title>
			</Head>

			<div className="page-header">
				<h2>{page.title}</h2>
			</div>

			<article className="content">
				<div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />

				<p>Meet the members of our capable team:</p>

			  <ul className="staff-list">
					{staffMembers.map((staffMember, i) => (
						<StaffMember staffMember={staffMember} key={i} />
					))}
				</ul>
			</article>
		</DefaultLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await getCollectionItem('pages', 'about');
	const staffMembers = await getCollection('staff-members');

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			staffMembers
		}
	};
}
