'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function NextuiProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	return (
		<NextUIProvider locale="sv-SE" className="main-page-layout" navigate={router.push}>
			{children}
		</NextUIProvider>
	);
}
