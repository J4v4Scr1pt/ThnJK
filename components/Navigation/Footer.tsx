'use client';

import type { IconProps } from '@iconify/react';

import { Link, Spacer } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ScrollingSponsors } from '../ScrollingSponsors/ScrollingSponsors';

type SocialIconProps = Omit<IconProps, 'icon'>;

const socialItems = [
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/TrollhattansJudoklubb/',
		icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/trollhattansjudoklubb/?utm_source=ig_embed&ig_mid=D3C24CA7-6107-451B-A148-D6EAFF4A8509',
		icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
	},
	{
		name: 'TikTok',
		href: 'https://www.tiktok.com/@trollhattansjudo',
		icon: (props: SocialIconProps) => <Icon {...props} icon="ic:outline-tiktok" />,
	},
];

export function Footer() {
	return (
		<footer className="footer sticky bottom-0 flex h-full w-full flex-col bg-content1">
			<div className="mx-auto flex h-full w-full  flex-col items-center justify-center p-2 pt-3 lg:mx-0">
				<div className="flex items-center justify-center">
					<span className="text-small font-medium sm:text-medium">Våra sponsorer</span>
				</div>
				<Spacer y={1} />
				<ScrollingSponsors />
				<Spacer y={4} />
				<div className="flex justify-center gap-x-4">
					{socialItems.map((item) => (
						<Link key={item.name} isExternal className="text-default-400" href={item.href}>
							<span className="sr-only">{item.name}</span>
							<item.icon aria-hidden="true" className="size-5" />
						</Link>
					))}
				</div>
				<Spacer y={2} />
				<p className="mt-1 text-center text-tiny text-default-400 sm:text-small">
					&copy; 2024 ThnJK. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
