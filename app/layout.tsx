import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { TanstackProvider } from './providers/TanstackProvider';
import { NextuiProvider } from './providers/NextuiProvider';
import Header from '@/components/Navigation/Header';
import { NextThemesProvider } from './providers/NextThemesProvider';
// import { LocaleProvider } from '@/i18n/LocaleProvider';
// import { getLocale } from '@/i18n/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tjk',
	description: 'Trollhättans Judoklubb',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const locale = getLocale();
	return (
		<html lang={'sv-SE'}>
			<body className={inter.className}>
				{/* <LocaleProvider value={locale}> */}
				{/* <TanstackProvider> */}
				<NextuiProvider>
					<NextThemesProvider>
						<Header />
						<main>{children}</main>
					</NextThemesProvider>
				</NextuiProvider>
				{/* </TanstackProvider> */}
				{/* </LocaleProvider> */}
			</body>
		</html>
	);
}
