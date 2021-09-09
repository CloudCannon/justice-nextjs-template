import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quattrocento|Vollkorn:400,400i,700,700i" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
