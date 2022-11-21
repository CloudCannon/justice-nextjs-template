export default function PostSummaryDetails({ post }) {
	const date = post.data.date ? new Date(post.data.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}) : '';

	return (
		<p className="post-summary-details">
			{date}

			{post.data.tags.map((tag, i) => (
				<span key={i} className="post-summary-category"> &bull; {tag}</span>
			))}
		</p>
	);
}
