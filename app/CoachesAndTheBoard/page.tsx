import { Divider } from '@heroui/divider';

const coaches = [
	'Catrine Mattsson (huvudtränare)',
	'Emma Bönnestig',
	'Martin Hylander',
	'Peter Ericsson',
	'Michael Johansson',
	'Alva Larsson',
	'Vilja Kördel',
	'Zamzam Mohamed',
	'Jim Sandberg',
	'Veronica Trygg Sandberg',
	'Nathalie Mårtensson',
	'Lea Sandin',
	'Junie Mattsson',
	'Rasmus Bryntesson',
	'Tage Rikemanson',
	'Valter Rikemanson',
];

const board = [
	'Ordförande: Dennis Rikemanson',
	'Vice ordförande: Pierre Kördel',
	'Sekreterare: Nathalie Mårtensson',
	'Kassör: Niklas Larsson',
	'Ledamöter: Therese Sandin, Alva Larsson, Fredrik Mattsson',
	'Valberedningen: Zamzam Mohamed & Catrine Mattsson ',
];

export default function CoachesAndTheBoardPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="mb-6 text-3xl">Tränare & Styrelsen</h1>
				<h2>VÅRA TRÄNARE:</h2>
				<ul>
					{coaches.map((coach, index) => (
						<li key={index + coach} className="mb-2">
							{coach}
						</li>
					))}
				</ul>
				<Divider className="my-3 max-w-72" />
				<ul>
					{board.map((boardMember, index) => (
						<li key={index + boardMember} className="mb-2">
							{boardMember}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
