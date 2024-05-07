'use client';

import type { IconProps } from '@iconify/react';

import React from 'react';
import { Link, Spacer } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { ScrollingSponsors } from '../ScrollingSponsors/ScrollingSponsors';

type SocialIconProps = Omit<IconProps, 'icon'>;

const navLinks = [
	{
		name: 'Home',
		href: '#',
	},
	{
		name: 'About',
		href: '#',
	},
	{
		name: 'Services',
		href: '#',
	},
	{
		name: 'Projects',
		href: '#',
	},
	{
		name: 'Contact',
		href: '#',
	},
	{
		name: 'Blog',
		href: '#',
	},
	{
		name: 'Careers',
		href: '#',
	},
];

const socialItems = [
	{
		name: 'Facebook',
		href: '#',
		icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
	},
	{
		name: 'Instagram',
		href: '#',
		icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
	},
	{
		name: 'Twitter',
		href: '#',
		icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
	},
	{
		name: 'YouTube',
		href: '#',
		icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:youtube-play" />,
	},
];

export function Footer() {
	return (
		<footer className="footer sticky bottom-0 flex h-full w-full flex-col bg-content1">
			<div className="mx-auto flex h-full w-full  flex-col items-center justify-center p-6 lg:mx-0 lg:px-8">
				<div className="flex items-center justify-center">
					<span className="text-medium font-medium">Trollhättans JK&apos;s sponsorer</span>
				</div>
				<Spacer y={3} />
				{/* <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
					{navLinks.map((item) => (
						<Link
							key={item.name}
							isExternal
							className="text-default-500"
							href={item.href}
							size="sm">
							{item.name}
						</Link>
					))}
				</div> */}
				{/* <Spacer y={6} /> */}
				<ScrollingSponsors />
				<Spacer y={6} />
				<div className="flex justify-center gap-x-4">
					{socialItems.map((item) => (
						<Link key={item.name} isExternal className="text-default-400" href={item.href}>
							<span className="sr-only">{item.name}</span>
							<item.icon aria-hidden="true" className="w-5" />
						</Link>
					))}
				</div>
				<Spacer y={4} />
				<p className="mt-1 text-center text-small text-default-400">
					&copy; 2024 ThnJK. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
