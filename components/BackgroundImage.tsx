'use client';
import { useTheme } from 'next-themes';
import { getImageProps } from 'next/image';
import { useEffect, useState } from 'react';

export default function BackgroundImage() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return;
	const {
		props: { srcSet: dark },
	} = getImageProps({
		height: 100,
		width: 100,
		alt: 'Background Image',
		sizes: '100vw',
		priority: true,
		quality: 100,
		src: '/images/JudoBgWhite.png',
	});
	const {
		props: { srcSet: light },
	} = getImageProps({
		height: 100,
		width: 100,
		alt: 'Background Image',
		sizes: '100vw',
		priority: true,
		quality: 100,
		src: '/images/JudoBgBlack.png',
	});
	return (
		<picture>
			<source srcSet={theme === 'light' ? light : dark} />
			<img
				alt="Background Image"
				style={{
					position: 'fixed',
					height: '100vh',
					width: '100vw',
					zIndex: '-10',
					objectFit: 'contain',
					opacity: 0.3,
				}}
			/>
		</picture>
	);
}
