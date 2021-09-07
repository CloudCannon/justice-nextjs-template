import { data } from './layouts/default';

export default function PostSummaryDetails({ post }) {
	const date = post.date ? new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}) : '';

	return (
		<p className="post-summary-details">
			{date}

			{post.tags.map((tag, i) => (
				<span key={i}> &bull; <a className="post-summary-category" href="/category/{tag}/">{tag}</a></span>
			))}
		</p>
	);
}
