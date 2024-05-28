'use client';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { trainers } from './trainers';
import TrainerCard from './_componentsHome/TrainerCard';
import { HeroSection } from '@/app/_componentsHome/HeroSection/HeroSection';
import { Section } from '@/app/_componentsHome/Section';
import { ReactLenis } from 'lenis/react';

import medaljerTT from '@/../public/images/medaljerTT.jpg';
import ungdomarTT from '@/../public/images/ungdomarTT.jpg';
import barnThn from '@/../public/images/barnThn.jpg';
import traningThn from '@/../public/images/traningThn.jpg';
import lillaTT from '@/../public/images/lillaTT.jpg';
import ZoomSection from '@/app/_componentsHome/ZoomSection';

export default function Home() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	return (
		<ReactLenis root>
			<HeroSection />
			<Section
				image={medaljerTT}
				tag="medaljer"
				title="Detaljerna gör helheten"
				description="Vi gillar göra det lilla extra för skapa en engagerad klubb"
			/>
			<Section
				image={ungdomarTT}
				tag="ungdomar"
				title="Ungdomarnas klubb"
				description="Våra ungdomar kan växa inte bara i rollen som Judoka utan även prova roll som både coach och domare"
			/>
			<Section
				image={barnThn}
				tag="barn"
				title="Barnens klubb"
				description="Våra barn ska inte bara få eminent träning, de ska också få ha roligt och känna sig inkluderade"
			/>
			<ZoomSection />
			<Section
				image={traningThn}
				tag="traning"
				title="Träning"
				description="Träning för oss är något som ska vara roligt och engagerande för det är så man kan skapa rutin."
			/>
			<Section
				image={lillaTT}
				tag="lillaTT"
				title="Lilla Trollträffen"
				description="Denna tävling är viktig för oss för det är då man som nybörjare har chansen att kunna prova sina vingar utan press"
			/>
			<div ref={container} className="relative mt-[10vh] px-4">
				<h2 className="sticky top-20 text-center sm:text-6xl">Vi som är tränare</h2>
				{trainers.map((project, i) => {
					const targetScale = 1 - (trainers.length - i) * 0.05;
					return (
						<TrainerCard
							key={`p_${i}`}
							i={i}
							{...project}
							progress={scrollYProgress}
							range={[i * 0.25, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</div>
		</ReactLenis>
	);
}
