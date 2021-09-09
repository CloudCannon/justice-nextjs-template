import Link from 'next/link';

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
				<span key={i}> &bull; <Link className="post-summary-category" href={`/category/${tag}`}>{tag}</Link></span>
			))}
		</p>
	);
}
