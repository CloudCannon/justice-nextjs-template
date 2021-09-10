module.exports = {
	_comments: {
		large_header: 'Toggles the size of the top banner.',
		show_in_navigation: 'Toggles a link in the top banner.',
		author_staff_member: 'The staff member writing this post.',
		call_to_action: 'Type of request shown at the bottom of this page.',
		testimonials: 'Update, add or remove testimonials.',
		phone_extension: 'The digits after dialing the company phone.',
		credentials: 'Shown as subtext on staff member summaries.',
		contact_email_address: 'Address for the contact form to send to.',
		new_window: 'Whether the link opens a new browser tab/window.'
	},

	paths: {
		collections: 'content',
		data: 'data',
		static: 'public',
		uploads: 'public/uploads'
	},

	'data-config': {
		company: {
			path: 'data/company.json'
		},
		footer: {
			path: 'data/footer.json'
		},
		seo: {
			path: 'data/seo.json',
			name: 'SEO'
		}
	},

	'collections-config': {
		pages: {
			path: 'content/pages',
			url: '/[slug]'
		},
		posts: {
			path: 'content/posts',
			url: '/blog/[slug]',
			name: 'Blog'
		}
	}
};
