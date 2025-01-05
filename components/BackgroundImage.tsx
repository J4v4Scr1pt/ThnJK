'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
// import { getImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import JudoBgWhite from '@/public/images/JudoBgWhite.webp';
import JudoBgBlack from '@/public/images/JudoBgBlack.webp';

// const common = {
// 	alt: 'Background Image',
// 	width: 1428,
// 	height: 2792,
// 	sizes: '100vw',
// 	priority: true,
// 	quality: 100,
// };
// const {
// 	props: { srcSet: dark },
// } = getImageProps({
// 	...common,
// 	src: '/images/JudoBgWhite.webp',
// });
// const {
// 	props: { srcSet: light },
// } = getImageProps({
// 	...common,
// 	quality: 100,
// 	src: '/images/JudoBgBlack.webp',
// });

export default function BackgroundImage() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return;
	if (theme === 'light')
		return (
			<Image
				alt="Background Image"
				src={JudoBgBlack}
				placeholder="blur"
				width={1428}
				height={2792}
				sizes="100vw"
				priority
				style={{
					position: 'fixed',
					height: '100vh',
					width: '100vw',
					zIndex: '-10',
					objectFit: 'contain',
					opacity: 0.3,
				}}
			/>
		);
	if (theme === 'dark')
		return (
			<Image
				alt="Background Image"
				src={JudoBgWhite}
				placeholder="blur"
				width={1428}
				height={2792}
				sizes="100vw"
				priority
				style={{
					position: 'fixed',
					height: '100vh',
					width: '100vw',
					zIndex: '-10',
					objectFit: 'contain',
					opacity: 0.3,
				}}
			/>
		);

	// return (
	// 	<picture>
	// 		<source srcSet={theme === 'light' ? light : dark} />
	// 		<img
	// 			alt="Background Image"
	// 			style={{
	// 				position: 'fixed',
	// 				height: '100vh',
	// 				width: '100vw',
	// 				zIndex: '-10',
	// 				objectFit: 'contain',
	// 				opacity: 0.3,
	// 			}}
	// 		/>
	// 	</picture>
	// );
}
