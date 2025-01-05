'use client';
import { useTheme } from 'next-themes';
import { getImageProps } from 'next/image';
import { useEffect, useState } from 'react';

const common = {
	alt: 'Background Image',
	width: 1428,
	height: 2792,
	sizes: '100vw',
	priority: true,
	quality: 100,
};
const {
	props: { srcSet: dark },
} = getImageProps({
	...common,
	src: '/images/JudoBgWhite.webp',
});
const {
	props: { srcSet: light },
} = getImageProps({
	...common,
	quality: 100,
	src: '/images/JudoBgBlack.webp',
});

export default function BackgroundImage() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return;

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
