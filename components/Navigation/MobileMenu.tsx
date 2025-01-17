import { NavbarMenu, NavbarMenuItem } from '@heroui/navbar';
import { Accordion, AccordionItem } from '@heroui/accordion';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const informationMenuItems = [
	'/AboutTheClub',
	'/WhatIsJudo',
	'/CoachesAndTheBoard',
	'/Policies',
	'/VaccinatedClub',
	'/InclusionAndEqualityPlan',
	'/ProfileClothes',
	'/AssociationDocuments',
	'/ContactAndFactualInformation',
];

const isAnyItemActiveInAccordion = (currentPath: string) =>
	informationMenuItems.some((i) => i === currentPath);

export function MobileMenu({
	currentPath,
	setIsMenuOpen,
}: {
	currentPath: string;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<NavbarMenu>
			<NavbarMenuItem>
				<Accordion
					className="p-0"
					itemClasses={{ title: 'font-normal text-medium' }}
					defaultExpandedKeys={isAnyItemActiveInAccordion(currentPath) ? '1' : undefined}>
					<AccordionItem
						key="1"
						title="Information"
						classNames={{ content: 'flex flex-col', trigger: 'p-0' }}>
						<NavbarMenuItem isActive={currentPath === '/AboutTheClub'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/AboutTheClub'}
								href="/AboutTheClub"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Om klubben
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/WhatIsJudo'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/WhatIsJudo'}
								href="/WhatIsJudo"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Vad är Judo/Länkar
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/CoachesAndTheBoard'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/CoachesAndTheBoard'}
								href="/CoachesAndTheBoard"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Tränare & Styrelsen
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/Policies'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/Policies'}
								href="/Policies"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Policys avseende avgifter och ledare vid läger och tävling
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/VaccinatedClub'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/VaccinatedClub'}
								href="/VaccinatedClub"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Vaccinerad Klubb
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/InclusionAndEqualityPlan'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/InclusionAndEqualityPlan'}
								href="/InclusionAndEqualityPlan"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Inkluderings och jämställdhetsplan
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/ProfileClothes'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/ProfileClothes'}
								href="/ProfileClothes"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Profilkläder
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/AssociationDocuments'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/AssociationDocuments'}
								href="/AssociationDocuments"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Föreningsdokument
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem isActive={currentPath === '/ContactAndFactualInformation'}>
							<Link
								className="w-full"
								color="foreground"
								aria-current={currentPath === '/ContactAndFactualInformation'}
								href="/ContactAndFactualInformation"
								onClick={() => setIsMenuOpen((prev) => !prev)}>
								Kontakt och faktauppgifter
							</Link>
						</NavbarMenuItem>
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
			<NavbarMenuItem isActive={currentPath === '/AJudo'}>
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
	);
}
