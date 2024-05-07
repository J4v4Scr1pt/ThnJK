import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { TanstackProvider } from './providers/TanstackProvider';
import { NextuiProvider } from './providers/NextuiProvider';
import Header from '@/components/Navigation/Header';
import { NextThemesProvider } from './providers/NextThemesProvider';
import { Footer } from '@/components/Navigation/Footer';
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
		<html lang={'sv-SE'} suppressHydrationWarning className="overflow-hidden">
			<body className={inter.className}>
				{/* <LocaleProvider value={locale}> */}
				{/* <TanstackProvider> */}
				<NextuiProvider>
					<NextThemesProvider>
						<Header />
						<main className="main-content ml-auto mr-auto  p-8">{children}</main>
						<Footer />
					</NextThemesProvider>
				</NextuiProvider>
				{/* </TanstackProvider> */}
				{/* </LocaleProvider> */}
			</body>
		</html>
	);
}
