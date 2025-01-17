'use client';

import type { IconProps } from '@iconify/react';

import { Link, Spacer } from '@heroui/react';
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
	{
		name: 'Smoothcomp',
		href: 'https://smoothcomp.com/sv/club/24133',
		icon: () => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				role="img"
				className="size-5 hover:text-secondary"
				width="1em"
				height="1em"
				viewBox="0 0 512 512">
				<path
					fill="currentColor"
					d="M110 19.2c-43.2 11.2-80 48.4-91 91.8-4.4 17.6-4.4 272.4 0 290 11.2 43.8 48.2 81 92 92 17.6 4.4 272.4 4.4 290 0 43.4-11 81-48.6 92-92 4.6-18 4.4-272.4 0-290-11.4-44-48.4-81-92-92-17.2-4.4-274.2-4.2-291 0.2zM403 70.8c15.4 7.6 30.6 22.8 38.2 38.2l5.8 12v270l-5.8 12c-7.6 15.4-22.8 30.6-38.2 38.2l-12 5.8h-270l-11.6-5.4c-14.6-7-31-23.2-38.6-38.6l-5.8-12v-270l4.6-9.8c9.2-20 27-36.6 47.4-43.6 9.2-3.2 20.6-3.4 142-3l132 0.4 12 5.8z"></path>
				<path
					fill="currentColor"
					d="M155.4 125.2c-13.4 4.2-26.2 17.2-30.2 31-4.8 15.6-4.8 184 0 199.6 4.2 14.4 16.6 26.8 31 31 15.6 4.8 184 4.8 199.6 0 14.4-4.2 26.8-16.6 31-31 4.8-15.6 4.8-184 0-199.6-4.2-14.4-16.6-26.8-31-31-15.2-4.6-185.8-4.4-200.4 0zM340 256v84h-168v-168h168v84z"></path>
			</svg>
		),
	},
];

export function Footer() {
	return (
		<footer
			className="relative flex h-[160px] flex-col bg-content1"
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
			<div className="fixed bottom-0 mx-auto flex h-[160px] w-full flex-col items-center justify-center p-2 pt-3 lg:mx-0">
				<div className="flex items-center justify-center">
					<span className="text-small font-medium text-secondary sm:text-medium">
						Våra sponsorer
					</span>
				</div>
				<Spacer y={1} />
				<ScrollingSponsors />
				<Spacer y={4} />
				<div className="flex justify-center gap-x-4">
					{socialItems.map((item) => (
						<Link key={item.name} isExternal className="text-default-400" href={item.href}>
							<span className="sr-only">{item.name}</span>
							<item.icon aria-hidden="true" className="size-5 hover:text-secondary" />
						</Link>
					))}
				</div>
				<Spacer y={2} />
				<p className="mt-1 text-center text-tiny text-default-400 sm:text-small">
					&copy; 2025 ThnJK. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
