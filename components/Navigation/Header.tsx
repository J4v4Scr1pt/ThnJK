'use client';

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
	Badge,
	Accordion,
	AccordionItem,
} from '@nextui-org/react';
import { TjkIcon } from './TjkIcon';
import ThemeSwitcher from '../ThemeSwitcher';
import { InfoDropdown } from './InfoDropdown';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavbarComp() {
	const pathname = usePathname();
	const currentPath = pathname;
	return (
		<Navbar
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
				<NavbarItem>
					<Link className="flex gap-2 text-inherit" href="#">
						Tävlingskalender
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="flex gap-2 text-inherit" href="#">
						Stor & Liten
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="flex gap-2 text-inherit" href="#">
						Falltryghet för äldre
					</Link>
				</NavbarItem>
				{/* <NavbarItem>
					<Link className="flex gap-2 text-inherit" href="#">
						Kontakt och faktauppgifter
					</Link>
				</NavbarItem> */}
				<NavbarItem>
					<Link className="flex gap-2 text-inherit" href="#">
						Föreninsdokument
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent
				className="flex h-12 max-w-fit items-center justify-between gap-0 rounded-full px-3 lg:bg-content2 lg:px-3 lg:dark:bg-content1"
				justify="center">
				<NavbarItem className="flex">
					<ThemeSwitcher />
				</NavbarItem>
				<NavbarItem className="ml-2">
					<Dropdown placement="bottom-end">
						<DropdownTrigger>
							<button className="mt-1 h-8 w-8 outline-none transition-transform">
								<Badge
									className="border-transparent"
									color="success"
									content=""
									placement="bottom-right"
									shape="circle"
									size="sm">
									<Avatar
										size="sm"
										src="https://t4.ftcdn.net/jpg/01/53/91/51/360_F_153915143_Uc6ryraafkZMONgDzCIGyYX8nCTuLVyg.jpg"
									/>
								</Badge>
							</button>
						</DropdownTrigger>
						<DropdownMenu aria-label="Profile Actions" variant="flat">
							<DropdownItem key="profile" className="h-14 gap-2">
								<p className="font-semibold">Signed in as</p>
								<p className="font-semibold">johndoe@example.com</p>
							</DropdownItem>
							<DropdownItem key="settings">My Settings</DropdownItem>
							<DropdownItem key="team_settings">Team Settings</DropdownItem>
							<DropdownItem key="analytics">Analytics</DropdownItem>
							<DropdownItem key="system">System</DropdownItem>
							<DropdownItem key="configurations">Configurations</DropdownItem>
							<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
							<DropdownItem key="logout" color="danger">
								Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>
			</NavbarContent>

			{/* Mobile Menu */}
			<NavbarMenu>
				<NavbarMenuItem>
					<Accordion className="p-0" itemClasses={{ title: 'font-normal text-medium' }}>
						<AccordionItem
							title="Information"
							classNames={{ content: 'flex flex-col', trigger: 'p-0' }}>
							<Link className="w-full" color="foreground" href="#">
								Om klubben
							</Link>
							<Link className="w-full" color="foreground" href="#">
								Vad är Judo/Länkar
							</Link>
							<Link className="w-full" color="foreground" href="#">
								Tränare & Styrelsen
							</Link>
							<Link className="w-full" color="foreground" href="#">
								Policys avseende avgifter och ledare vid läger och tävling
							</Link>
							<Link className="w-full" color="foreground" href="#">
								Vaccinerad Klubb
							</Link>
							<Link className="w-full" color="foreground" href="#">
								Inkluderings och jämställdhetsplan
							</Link>
						</AccordionItem>
					</Accordion>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/Membership'}>
					<Link
						aria-current={currentPath === '/Membership'}
						className="w-full"
						color="primary"
						href="Membership">
						Medlemskap
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem isActive={currentPath === '/TrainingTimes'}>
					<Link
						aria-current={currentPath === '/TrainingTimes'}
						className="w-full"
						color="foreground"
						href="TrainingTimes">
						Träningstider
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" color="foreground" href="#">
						Tävlingskalender
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" color="foreground" href="#">
						Stor & Liten
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" color="foreground" href="#">
						Falltryghet för äldre
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" color="foreground" href="#">
						Kontakt och faktauppgifter
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" color="foreground" href="#">
						Föreningsdokument
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}
