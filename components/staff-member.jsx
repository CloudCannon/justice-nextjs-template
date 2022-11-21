import Link from 'next/link';
import data from '../lib/data';

export default function StaffMember({ staffMember }) {
	return (
		<li className="staff">
			<div className="staff-details">
				<div className="staff-image">
					<img
						src={staffMember.data.image}
						alt={`Staff photo for ${staffMember.data.name}`}
						width="120"
						height="120" />
				</div>
				<ul className="staff-info">
					<li>{staffMember.data.name}</li>
					<li><small>{staffMember.data.credentials}</small></li>
					<li>
						<Link href={`tel:${data.company.phone}`}>{data.company.phone}</Link> ext {staffMember.data.phone_extension}
					</li>
				</ul>
			</div>

			<div className="staff-bio" dangerouslySetInnerHTML={{ __html: staffMember.content_html }}></div>
		</li>
	);
}
