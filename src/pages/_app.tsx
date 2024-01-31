import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import AppProvider from '@/contexts';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>

			{/* All providers are wrapped inside the AppProvider */}
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</>
	);
}

