module.exports = {
	_inputs: {
		large_header: {
			comment: 'Toggles the size of the top banner.'
		},
		show_in_navigation: {
			comment: 'Toggles a link in the top banner.'
		},
		author_staff_member: {
			comment: 'The staff member writing this post.'
		},
		call_to_action: {
			comment: 'Type of request shown at the bottom of this page.'
		},
		testimonials: {
			comment: 'Update, add or remove testimonials.'
		},
		phone_extension: {
			comment: 'The digits after dialing the company phone.'
		},
		credentials: {
			comment: 'Shown as subtext on staff member summaries.'
		},
		contact_email_address: {
			comment: 'Address for the contact form to send to.'
		},
		new_window: {
			comment: 'Whether the link opens a new browser tab/window.'
		}
	},
	_select_data: {
		call_to_actions: [
			'Contact',
			'Blog'
		],
		social_icons: [
			'Facebook',
			'Instagram',
			'LinkedIn',
			'Pinterest',
			'Tumblr',
			'Twitter',
			'YouTube',
			'RSS'
		]
	},
	paths: {
		collections: 'content',
		data: 'data',
		static: 'public',
		uploads: 'public/uploads'
	},
	collections_config: {
		webpages: {
			path: 'content/pages',
			url: '/[slug]',
			output: true,
			name: 'Pages',
			icon: 'wysiwyg',
			_enabled_editors: ['visual', 'data']
		},
		posts: {
			path: 'content/posts',
			url: '/blog/[slug]',
			output: true,
			_enabled_editors: ['content', 'data']
		},
		staff_members: {
			path: 'content/staff-members',
			output: false,
			icon: 'people'
		},
		data: {
			path: 'data',
			output: false
		}
	}
};
