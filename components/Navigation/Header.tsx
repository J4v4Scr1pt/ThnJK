'use client';

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Accordion,
	AccordionItem,
} from '@nextui-org/react';
import { TjkIcon } from './TjkIcon';
import ThemeSwitcher from '../ThemeSwitcher';
import { InfoDropdown } from './InfoDropdown';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

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

			{/* Mobile Menu */}
			<NavbarMenu>
				<NavbarMenuItem>
					<Accordion className="p-0" itemClasses={{ title: 'font-normal text-medium' }}>
						<AccordionItem
							title="Information"
							classNames={{ content: 'flex flex-col', trigger: 'p-0' }}>
							<Link
								className="w-full"
								color="foreground"
								href="/AboutTheClub"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Om klubben
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/WhatIsJudo"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Vad är Judo/Länkar
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/CoachesAndTheBoard"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Tränare & Styrelsen
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/Policies"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Policys avseende avgifter och ledare vid läger och tävling
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/VaccinatedClub"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Vaccinerad Klubb
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/InclusionAndEqualityPlan"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Inkluderings och jämställdhetsplan
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/ProfileClothes"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Profilkläder
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/AssociationDocuments"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Föreningsdokument
							</Link>
							<Link
								className="w-full"
								color="foreground"
								href="/ContactAndFactualInformation"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Kontakt och faktauppgifter
							</Link>
						</AccordionItem>
					</Accordion>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/Membership'}>
					<Link
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-current={currentPath === '/Membership'}
						className="w-full"
						color="primary"
						href="Membership">
						Medlemskap
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/TrainingTimes'}>
					<Link
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-current={currentPath === '/TrainingTimes'}
						className="w-full"
						color="foreground"
						href="TrainingTimes">
						Träningstider
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/CompetitionCalendar'}>
					<Link
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-current={currentPath === '/CompetitionCalendar'}
						className="w-full"
						color="foreground"
						href="/CompetitionCalendar">
						Tävlingskalender
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/BigAndLittle'}>
					<Link
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-current={currentPath === '/BigAndLittle'}
						className="w-full"
						color="foreground"
						href="BigAndLittle">
						Stor & Liten
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/FallSafetyForTheElderly'}>
					<Link
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-current={currentPath === '/FallSafetyForTheElderly'}
						className="w-full"
						color="foreground"
						href="FallSafetyForTheElderly">
						Falltryghet för äldre
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/FallSafetyForTheElderly'}>
					<Link
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-current={currentPath === '/AJudo'}
						className="w-full"
						color="foreground"
						href="AJudo">
						A-Judo: Anpassad Judo för Alla
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}
