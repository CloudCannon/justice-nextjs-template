import Link from 'next/link';
import PostSummaryDetails from './post-summary-details';

export default function PostSummary({ post }) {
	return (
		<li className="post-summary">
			<div className="post-summary-image">
				<img src={post.image} alt={`Photo of ${post.title}`} />
			</div>

			<div className="post-summary-content has-post-summary-image">
				<h3 className="post-summary-title">
					<Link href={`/blog/${post.slug}`}>{post.title}</Link>
				</h3>

				<PostSummaryDetails post={post} />

				<p className="post-summary-author">
					<img
						src={post.author.image}
						alt={`Photo of ${post.author.name}`}
						width="30"
						height="30" /> {post.author.name}
				</p>
			</div>

			<p className="post-summary-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt_html }} />
		</li>
	);
}
