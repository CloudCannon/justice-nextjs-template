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
				<span key={i} className="post-summary-category"> &bull; {tag}</span>
			))}
		</p>
	);
}
