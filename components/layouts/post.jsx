import DefaultLayout from './default';
import PostSummary from '../post-summary';
import PostSummaryDetails from '../post-summary-details';
import StaffMember from '../staff-member';
import data from '../../lib/data';
import { DiscussionEmbed } from 'disqus-react';

export default function PostLayout({ children, page, author }) {
	return (
		<DefaultLayout page={page}>
			<div className="page-header">
				<h2>{page.data.title}</h2>
			</div>

			<article className="content">
				<PostSummaryDetails post={page} />
				<div dangerouslySetInnerHTML={{ __html: page.data.content_html }} />

				<h2>Meet the author</h2>
				<ul className="post-author staff-list">
					<StaffMember staffMember={author} />
				</ul>

				{data.site.disqus_shortname && (
					<>
						<h2>Have your say</h2>
						<DiscussionEmbed
							className="post-comments"
							shortname={data.site.disqus_shortname}
							config={{
								url: `${data.site.url}/blog/${page.slug}`.replace(/\/+/g, '/'),
								identifier: page.slug,
								title: page.data.title
							}} />
					</>
				)}
			</article>
		</DefaultLayout>
	);
}
