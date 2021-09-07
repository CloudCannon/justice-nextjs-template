import { data } from './layouts/default';

export default function StaffMember({ staffMember }) {
	return (
		<li className="staff">
			<div className="staff-details">
				<div className="staff-image">
					<img
						src={staffMember.image}
						alt={`Staff photo for ${staffMember.name}`}
						width="120"
						height="120" />
				</div>
				<ul className="staff-info">
					<li>{staffMember.name}</li>
					<li><small>{staffMember.credentials}</small></li>
					<li>
						<a href={`tel:${data.company.contact_phone_number}`}>{data.company.contact_phone_number}</a> ext {staffMember.phone_extension}
					</li>
				</ul>
			</div>

			<div className="staff-bio" dangerouslySetInnerHTML={{ __html: staffMember.contentHtml }}></div>
		</li>
	);
}