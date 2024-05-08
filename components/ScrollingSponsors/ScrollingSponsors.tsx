import { Sannegarden,  Clarion, Ferno, ThnEnergi } from './Sponsors';
import ScrollingBanner from './Scrolling-Banner';

const logos = [
	{
		key: 'sannegarden',
		logo: Sannegarden,
	},
	{
		key: 'clarion',
		logo: Clarion,
	},
	{
		key: 'ferno',
		logo: Ferno,
	},
	{
		key: 'thnEnergi',
		logo: ThnEnergi,
	},
];

export function ScrollingSponsors() {
	return (
		<section className="mx-auto w-full max-w-xl">
			<ScrollingBanner shouldPauseOnHover={false} gap="20px">
				{logos.map(({ key, logo }) => (
					<div key={key} className="flex items-center justify-center text-foreground">
						{logo}
					</div>
				))}
			</ScrollingBanner>
		</section>
	);
}
