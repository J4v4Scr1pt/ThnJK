'use client';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { projects } from './data';
import Card from '@/components/Card';
import { HeroSection } from '@/components/HeroSection';
import { Section } from '@/components/Section';
import { ReactLenis } from 'lenis/react';

import medaljerTT from '@/../public/images/medaljerTT.jpg';
import ungdomarTT from '@/../public/images/ungdomarTT.jpg';
import barnThn from '@/../public/images/barnThn.jpg';
import traningThn from '@/../public/images/traningThn.jpg';
import lillaTT from '@/../public/images/lillaTT.jpg';

export default function Home() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	return (
		<ReactLenis root className="h-screen overflow-scroll">
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
				<h2 className="sticky top-20 text-center sm:text-6xl">Våra eminenta tränare!</h2>
				{projects.map((project, i) => {
					const targetScale = 1 - (projects.length - i) * 0.05;
					return (
						<Card
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
