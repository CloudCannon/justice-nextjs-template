import PageLayout from '../components/layouts/page';

export default function NotFound() {
	return (
		<PageLayout page={{ data: { title: 'Not Found', call_to_action: 'Contact', large_header: false } }}>
			<p>This page doesn&apos;t exist.</p>
		</PageLayout>
	);
}
