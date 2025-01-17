'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from '@heroui/navbar';
import { TjkIcon } from './TjkIcon';
import ThemeSwitcher from '../ThemeSwitcher';
import { InfoDropdown } from './InfoDropdown';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export default function NavbarComp() {
	const pathname = usePathname();
	const currentPath = pathname;
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="header"
			classNames={{
				base: 'lg:bg-transparent lg:backdrop-filter-none max-w-full',
				item: 'data-[active=true]:text-primary',
				wrapper: 'px-4 sm:px-6 w-screen max-w-full',
			}}
			height="60px">
			<NavbarBrand className="flex-grow-0">
				<NavbarMenuToggle className="mr-2 h-6 lg:hidden" />
				<TjkIcon />
				<NavbarItem isActive={currentPath === '/'}>
					<Link aria-current={currentPath === '/'} className="font-bold text-inherit" href="/">
						TJK
					</Link>
				</NavbarItem>
			</NavbarBrand>
			<NavbarContent
				className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 lg:flex"
				justify="center">
				<InfoDropdown />
				<NavbarItem isActive={currentPath === '/Membership'}>
					<Link
						aria-current={currentPath === '/Membership'}
						className="flex gap-2 text-inherit"
						href="Membership">
						Medlemskap
					</Link>
				</NavbarItem>
				<NavbarItem isActive={currentPath === '/TrainingTimes'}>
					<Link
						aria-current={currentPath === '/TrainingTimes'}
						className="flex gap-2 text-inherit"
						href="TrainingTimes">
						Träningstider
					</Link>
				</NavbarItem>
				<NavbarItem isActive={currentPath === '/CompetitionCalendar'}>
					<Link
						className="flex gap-2 text-inherit"
						href="/CompetitionCalendar"
						aria-current={currentPath === '/CompetitionCalendar'}>
						Tävlingskalender
					</Link>
				</NavbarItem>
				<NavbarItem isActive={currentPath === '/BigAndLittle'}>
					<Link
						aria-current={currentPath === '/BigAndLittle'}
						className="flex gap-2 text-inherit"
						href="BigAndLittle">
						Stor & Liten
					</Link>
				</NavbarItem>
				<NavbarItem isActive={currentPath === '/FallSafetyForTheElderly'}>
					<Link
						aria-current={currentPath === '/FallSafetyForTheElderly'}
						className="flex gap-2 text-inherit"
						href="FallSafetyForTheElderly">
						Falltryghet för äldre
					</Link>
				</NavbarItem>
				<NavbarItem isActive={currentPath === '/AJudo'}>
					<Link
						aria-current={currentPath === '/AJudo'}
						className="flex gap-2 text-inherit"
						href="AJudo">
						A-Judo: Anpassad Judo för Alla
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent
				className="flex h-12 max-w-fit items-center justify-between gap-0 rounded-full px-3 lg:bg-content2 lg:px-3 lg:dark:bg-content1"
				justify="center">
				<NavbarItem className="flex">
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarContent>

			<MobileMenu currentPath={currentPath} setIsMenuOpen={setIsMenuOpen} />
		</Navbar>
	);
}
