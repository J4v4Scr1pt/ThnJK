'use client';

import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Link,
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Avatar,
	Badge,
	Accordion,
	AccordionItem,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import NotificationsCard from './NotificationsCard';
import { TjkIcon } from './TjkIcon';
import ThemeSwitcher from '../ThemeSwitcher';
import { DropDown } from './Dropdown';

export default function NavbarComp() {
	return (
		<Navbar
			classNames={{
				base: 'lg:bg-transparent lg:backdrop-filter-none max-w-full',
				item: 'data-[active=true]:text-primary',
				wrapper: 'px-4 sm:px-6 w-screen max-w-full',
			}}
			height="60px">
			<NavbarBrand className="flex-grow-0">
				<NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
				<TjkIcon />
				<p className="font-bold text-inherit">TJK</p>
			</NavbarBrand>
			<NavbarContent
				className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex"
				justify="center">
				<DropDown />
				<NavbarItem isActive>
					<Link aria-current="page" className="flex gap-2 text-inherit" href="#">
						Medlemskap
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="flex gap-2 text-inherit" href="#">
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
				className="flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1"
				justify="end">
				<NavbarItem className="hidden sm:flex">
					<Button isIconOnly radius="full" variant="light">
						<Icon className="text-default-500" icon="solar:magnifer-linear" width={22} />
					</Button>
				</NavbarItem>
				<NavbarItem className="flex">
					<ThemeSwitcher />
				</NavbarItem>
				<NavbarItem className="hidden sm:flex">
					<Button isIconOnly radius="full" variant="light">
						<Icon className="text-default-500" icon="solar:settings-linear" width={24} />
					</Button>
				</NavbarItem>
				<NavbarItem className="flex">
					<Popover offset={12} placement="bottom-end">
						<PopoverTrigger>
							<Button
								disableRipple
								isIconOnly
								className="overflow-visible"
								radius="full"
								variant="light">
								<Badge color="danger" content="5" showOutline={false} size="md">
									<Icon className="text-default-500" icon="solar:bell-linear" width={22} />
								</Badge>
							</Button>
						</PopoverTrigger>
						<PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
							<NotificationsCard className="w-full shadow-none" />
						</PopoverContent>
					</Popover>
				</NavbarItem>
				<NavbarItem className="px-2">
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
									<Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29526708c" />
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
						<AccordionItem title="Information" classNames={{ trigger: 'p-0' }}>
							<Link className="w-full" color="foreground" href="#">
								Om klubben
							</Link>
							<Link className="w-full" color="foreground" href="#">
								Vad är Judo/Länkar
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
				<NavbarMenuItem isActive>
					<Link aria-current="page" className="w-full" color="primary" href="#">
						Medlemskap
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link className="w-full" color="foreground" href="#">
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
