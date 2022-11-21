import '../styles/main.scss';
import { CloudCannonConnect } from '@cloudcannon/react-connector'

export default function App({ Component, pageProps }) {
	const AppComponent = CloudCannonConnect(Component, {
		processProps: (props) => (pageProps === props) ? { data: props } : props
	});

	return <AppComponent {...pageProps}/>
}
