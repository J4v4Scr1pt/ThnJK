'use client';
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const TrainerCard = ({
	i,
	title,
	description,
	src,
	color,
	progress,
	range,
	targetScale,
}: {
	i: number;
	title: string;
	description: string;
	src: string;
	url?: string;
	color: string;
	progress: any;
	range: any;
	targetScale: any;
}) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div ref={container} className="sticky top-0 flex h-screen items-center justify-center">
			<motion.div
				style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
				className="relative top-[-25%] flex h-[300px] w-[1000px] origin-top flex-col overflow-hidden rounded-lg px-4 py-2 sm:h-[500px] sm:px-14">
				<h2 className="m-0 text-center">{title}</h2>
				<div className="mt-3 flex h-full items-center gap-12 sm:mt-12">
					<div className="relative top-0 w-[40%]">
						<p className="text-xs first-letter:text-lg sm:text-base">{description}</p>
					</div>

					<div className="relative h-[70%] w-[40%] overflow-hidden rounded-3xl sm:h-full sm:w-[60%]">
						<motion.div className="h-full w-full" style={{ scale: imageScale }}>
							<Image className="object-cover" fill src={`/images/${src}`} alt="image" />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default TrainerCard;
