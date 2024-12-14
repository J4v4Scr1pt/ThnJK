import Picture1 from '@/public/images/1.png';
import Picture2 from '@/public/images/2.jpg';
import Picture3 from '@/public/images/3.jpg';
import Picture4 from '@/public/images/4.jpg';
import Picture5 from '@/public/images/5.jpg';
import Picture6 from '@/public/images/6.jpg';
import Picture7 from '@/public/images/7.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@nextui-org/react';

export default function ZoomSection() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4.1]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const pictures = [
		{
			src: Picture1,
			scale: scale4,
		},
		{
			src: Picture2,
			scale: scale5,
		},
		{
			src: Picture3,
			scale: scale6,
		},
		{
			src: Picture4,
			scale: scale5,
		},
		{
			src: Picture5,
			scale: scale6,
		},
		{
			src: Picture6,
			scale: scale8,
		},
		{
			src: Picture7,
			scale: scale9,
		},
	];

	return (
		<div ref={container} className="relative h-[300vh]">
			<h2 className="absolute top-0 mx-auto mt-4 w-full text-center text-4xl sm:text-8xl">
				Tävlande klubb
			</h2>
			<div className="sticky top-0 h-screen overflow-hidden">
				{pictures.map(({ src, scale }, index) => {
					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="absolute top-0 flex h-full w-full items-center justify-center">
							<div
								className={cn('relative h-[25vh] w-[25vw]', {
									'-top-[27vh] left-[5vw] h-[25vh] w-[35vw]': index + 1 === 2,
									'-left-[25vw] -top-[10vh] h-[45vh] w-[20vw]': index + 1 === 3,
									'left-[27.5vw]': index + 1 === 4,
									'left-[5vw] top-[27.5vh] h-[25vh] w-[20vw]': index + 1 === 5,
									'-left-[22.5vw] top-[27.5vh] h-[25vh] w-[30vw]': index + 1 === 6,
									'left-[27vw] top-[23.5vh] h-[20vh] w-[20vw]': index + 1 === 7,
								})}>
								<Image
									src={src}
									fill
									alt="image"
									placeholder="blur"
									className="object-cover"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
