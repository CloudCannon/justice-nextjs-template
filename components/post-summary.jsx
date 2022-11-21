import Link from 'next/link';
import PostSummaryDetails from './post-summary-details';

export default function PostSummary({ post }) {
	return (
		<li className="post-summary">
			<div className="post-summary-image">
				<img src={post.data.image} alt={`Photo of ${post.data.title}`} />
			</div>

			<div className="post-summary-content has-post-summary-image">
				<h3 className="post-summary-title">
					<Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
				</h3>

				<PostSummaryDetails post={post} />

				<p className="post-summary-author">
					<img
						src={post.author.data.image}
						alt={`Photo of ${post.author.data.name}`}
						width="30"
						height="30" /> {post.author.data.name}
				</p>
			</div>

			<p className="post-summary-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt_html }} />
		</li>
	);
}
