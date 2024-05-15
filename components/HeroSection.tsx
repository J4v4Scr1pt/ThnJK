import { Divider } from '@nextui-org/divider';
import { HeroHighlight } from './HeroHighlight';

export function HeroSection() {
	return (
		<section className="relative flex h-screen flex-col justify-start">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 z-10 bg-black/30" />
				<video className="h-full w-full object-cover" autoPlay muted loop>
					<source src="/videos/finalTT.mp4" type="video/mp4" />
				</video>
			</div>
			<HeroHighlight />
			<div className="inset-0 m-auto flex flex-col items-center">
				<h1 className="max-w-[15ch] text-3xl uppercase sm:text-6xl">Trollträffen</h1>
				<div className="mt-3 flex  w-full max-w-[900px] justify-between">
					<ItemHighlight title="Ungdomarnas" desc="Stolta barn" />
					<Divider orientation="vertical" className="mx-2" />
					<ItemHighlight title="Finaler" desc="Unika finaler" />
					<Divider orientation="vertical" className="mx-2" />
					<ItemHighlight title="Test" desc="Något" />
					<Divider orientation="vertical" className="mx-2" />
					<ItemHighlight title="Test2" desc="Något2" />
				</div>
			</div>
		</section>
	);
}

const ItemHighlight = ({ title, desc }: { title: string; desc: string }) => (
	<div className="flex flex-col items-center gap-4">
		<span className="text-xs uppercase sm:text-sm">{title}</span>
		<p className="text-md sm:text-xl">{desc}</p>
	</div>
);
