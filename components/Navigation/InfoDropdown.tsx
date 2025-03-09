import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import { NavbarItem } from '@heroui/navbar';
import { Button } from '@heroui/button';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const icons = {
	chevron: <Icon className="text-default-500" icon="solar:alt-arrow-down-linear" width={24} />,
	docs: (
		<div>
			<Icon className="text-primary-500" icon="solar:document-text-outline" width={24} />
		</div>
	),
	syringe: <Icon className="text-primary-500" icon="solar:syringe-outline" width={24} />,
	gender: <Icon className="text-primary-500" icon="icons8:gender" width={24} />,
	policy: (
		<div>
			<Icon className="text-primary-500" icon="carbon:policy" width={24} />
		</div>
	),
	judo: (
		<div>
			<Icon className="text-primary-500" icon="emojione-monotone:martial-arts-uniform" width={24} />
		</div>
	),
	peoplePanel: <Icon className="text-primary-500" icon="fa6-solid:people-line" width={24} />,
	profileClothes: <Icon className="text-primary-500" icon="game-icons:clothes" width={24} />,
	documents: <Icon className="text-primary-500" icon="carbon:document-pdf" width={24} />,
	contact: <Icon className="text-primary-500" icon="mdi:contact-mail-outline" width={24} />,
};
export function InfoDropdown() {
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
			<DropdownMenu aria-label="ThnJkInfo">
				<DropdownItem
					as={Link}
					key="about"
					href="/AboutTheClub"
					description="Information till våra medlemmar och deras föräldrar"
					startContent={icons.docs}>
					Om klubben
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="links"
					href="/WhatIsJudo"
					description="Beskrivning om Judons bakgrund och nyttiga länkar"
					startContent={icons.judo}>
					Vad är Judo/Länkar
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="people_panel"
					href="/CoachesAndTheBoard"
					description="Våra tränare och styrelsemedlemmar"
					startContent={icons.peoplePanel}>
					Tränare & Styrelsen
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="policys"
					href="/Policies"
					description="Policys avseende avgifter och ledare vid läger och tävling"
					startContent={icons.policy}>
					Policys
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="no_drugs"
					href="/VaccinatedClub"
					description="Information om hur vi jobbar med doping"
					startContent={icons.syringe}>
					Vaccinerad Klubb
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="inclusive_club"
					href="/InclusionAndEqualityPlan"
					description="Information om hur vi jobbar med jämställdhet"
					startContent={icons.gender}>
					Inkluderings och jämställdhetsplan
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="profile_clothes"
					href="/ProfileClothes"
					description="Våra profil kläder i samarbete med Excite"
					startContent={icons.profileClothes}>
					Profilkläder
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="association_documents"
					href="/AssociationDocuments"
					description="Här kan du läsa föreningens olika dokument"
					startContent={icons.documents}>
					Föreningsdokument
				</DropdownItem>
				<DropdownItem
					as={Link}
					key="contact_factual"
					href="/ContactAndFactualInformation"
					description="Våra kontakt samt faktura uppgifter"
					startContent={icons.contact}>
					Kontakt och faktauppgifter
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
