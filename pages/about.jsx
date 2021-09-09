import PageLayout from '../components/layouts/page';
import StaffMember from '../components/staff-member';
import { getCollection, getCollectionItem } from '../lib/collections';

export default function About({ page, staffMembers }) {
	return (
		<PageLayout page={page}>
			<p>Meet the members of our capable team:</p>

			<ul className="staff-list">
				{staffMembers.map((staffMember, i) => (
					<StaffMember staffMember={staffMember} key={i} />
				))}
			</ul>
		</PageLayout>
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
