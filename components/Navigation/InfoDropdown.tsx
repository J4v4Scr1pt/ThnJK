import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Icon } from '@iconify/react';

export function InfoDropdown() {
	const icons = {
		chevron: <Icon className="text-default-500" icon="solar:alt-arrow-down-linear" width={24} />,
		docs: <Icon className="text-primary-500" icon="solar:document-text-outline" width={24} />,
		syringe: <Icon className="text-primary-500" icon="solar:syringe-outline" width={24} />,
		gender: <Icon className="text-primary-500" icon="icons8:gender" width={24} />,
		policy: <Icon className="text-primary-500" icon="carbon:policy" width={24} />,
		judo: <Icon className="text-primary-500" icon="emojione-monotone:martial-arts-uniform" width={24} />,
		peoplePanel: <Icon className="text-primary-500" icon="fa6-solid:people-line" width={24} />,
	};
	return (
		<Dropdown>
			<NavbarItem>
				<DropdownTrigger>
					<Button
						disableRipple
						className="bg-transparent p-0 text-medium text-inherit data-[hover=true]:bg-transparent"
						endContent={icons.chevron}
						radius="sm"
						variant="light">
						Information
					</Button>
				</DropdownTrigger>
			</NavbarItem>
			<DropdownMenu
				aria-label="ThnJkInfo"
				className="w-[340px]"
				itemClasses={{
					base: 'gap-4',
				}}>
				<DropdownItem
					key="about"
					description="Information till våra medlemmar och deras föräldrar"
					startContent={icons.docs}>
					Om klubben
				</DropdownItem>
				<DropdownItem
					key="links"
					description="Beskrivning om Judons bakgrund och nyttiga länkar"
					startContent={icons.judo}>
					Vad är Judo/Länkar
				</DropdownItem>
				<DropdownItem
					key="people_panel"
					description="Våra tränare och styrelsemedlemmar"
					startContent={icons.peoplePanel}>
					Tränare & Styrelsen
				</DropdownItem>
				<DropdownItem
					key="policys"
					description="Policys avseende avgifter och ledare vid läger och tävling"
					startContent={icons.policy}>
					Policys
				</DropdownItem>
				<DropdownItem
					key="no_drugs"
					description="Information om hur vi jobbar med doping"
					startContent={icons.syringe}>
					Vaccinerad Klubb
				</DropdownItem>
				<DropdownItem
					key="inclusive_club"
					description="Information om hur vi jobbar med jämställdhet"
					startContent={icons.gender}>
					Inkluderings och jämställdhetsplan
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
