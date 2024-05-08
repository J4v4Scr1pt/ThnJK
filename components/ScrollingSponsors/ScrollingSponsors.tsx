import React from 'react';

import { Sannegarden, Logo10, Clarion, Ferno, ThnEnergi, Logo5, Logo6, Logo7, Logo8, Logo9 } from './logos';
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
	// {
	// 	key: 'logo-5',
	// 	logo: Logo5,
	// },
	// {
	// 	key: 'logo-6',
	// 	logo: Logo6,
	// },
	// {
	// 	key: 'logo-7',
	// 	logo: Logo7,
	// },
	// {
	// 	key: 'logo-8',
	// 	logo: Logo8,
	// },
	// {
	// 	key: 'logo-9',
	// 	logo: Logo9,
	// },
	// {
	// 	key: 'logo-10',
	// 	logo: Logo10,
	// },
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
