'use client';

import { HeroUIProvider } from '@heroui/react';
import { useRouter } from 'next/navigation';

export function HerouiProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<HeroUIProvider locale="sv-SE" className="main-page-layout" navigate={router.push}>
			{children}
		</HeroUIProvider>
	);
}
