import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

export function Section({
	image,
	description,
	tag,
	title,
}: {
	image: StaticImageData;
	tag: string;
	title: string;
	description: string;
}) {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});
	const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
	return (
		<section ref={sectionRef} className="relative h-screen overflow-hidden">
			<motion.div style={{ top: y }} className="absolute -z-10 h-[120%] w-full">
				<div className="absolute inset-0 z-10 bg-black/30" />
				<Image src={image} alt={title} fill className="object-cover" />
			</motion.div>
			<div className="flex flex-col gap-4 p-8 sm:p-24">
				<h1 className="max-w-[25ch] text-4xl text-white">{title}</h1>
				<p className="max-w-[50ch] text-white">{description}</p>
			</div>
		</section>
	);
}
