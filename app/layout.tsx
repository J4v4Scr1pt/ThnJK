import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextuiProvider } from './providers/NextuiProvider';
import Header from '@/components/Navigation/Header';
import { NextThemesProvider } from './providers/NextThemesProvider';
import { Footer } from '@/components/Navigation/Footer';
import PageTransitionEffect from '@/components/PageTransitionEffect';
import BackgroundImage from '@/components/BackgroundImage';

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
	return (
		<html lang={'sv-SE'} suppressHydrationWarning>
			<body className={inter.className}>
				<NextuiProvider>
					<NextThemesProvider>
						<Header />
						<BackgroundImage />
						<main className="main-content min-h-screen">
							<PageTransitionEffect>{children}</PageTransitionEffect>
						</main>
						<Footer />
					</NextThemesProvider>
				</NextuiProvider>
			</body>
		</html>
	);
}
