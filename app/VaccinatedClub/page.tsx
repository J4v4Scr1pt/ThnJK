import { Card, CardBody } from '@nextui-org/card';
import Image from 'next/image';
import VaccinatedClub from '@/public/images/VaccinatedClub.png';
import { Link } from '@nextui-org/link';

export default function VaccinatedClubPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="mb-6 text-3xl">Vaccinerad Klubb</h1>
				<h2>
					<strong>Antidoping: </strong>
				</h2>
				<p>
					Trollhättans Judoklubb jobbar aktivt med antidoping. Vår klubb är ”vaccinerad” vilket
					innebär att vi systematiskt genomför utbildningar och sprider information om antidoping.
					Aktiv doping är som tur är ganska ovanligt inom judo som idrott men ”oavsiktlig” doping
					desto vanligare. Det kan röra sig om mediciner man tar eller kosttillskott som verkar
					harmlösa. Syftet med att vara en vaccinerad klubb är att tränare, ledare och aktiva
					tävlingsjudokas skall ha en djupare kunskap om antidoping .
				</p>
				<br />
				<h2>
					<strong>Trollhättans Judoklubbs handlingsplan: </strong>
				</h2>
				<Card className="h-auto w-auto max-w-[800px] light">
					<CardBody>
						<Image
							{...{
								alt: 'vaccinerad klubb',
								src: VaccinatedClub,
								placeholder: 'blur',
								priority: true,
								quality: 100,
								height: 550,
								width: 400,
								style: {
									width: '100%',
									height: '100%',
								},
							}}
						/>
					</CardBody>
				</Card>
				<br />
				<h2>
					<strong>Röd-Gröna listan:</strong>
				</h2>
				<p>Här kan du söka på olika läkemedel och se om de är dopingklassade. </p>
				<p>
					Om du använder ett läkemedel som är dopingklassat tar du kontakt med klubbens ansvariga
					(se vår handlingsplan)
				</p>
				<Link
					showAnchorIcon
					isExternal
					href="https://www.antidoping.se/dispens-laekemedelssoek/roed-groena-listan/">
					Röd-gräna antidoping listan
				</Link>
				<br />
				<br />
				<h2>
					<strong>Ren vinnare:</strong>
				</h2>
				<p>Här kan du testa dig själv och dina kunskaper om antidoping</p>
				<Link showAnchorIcon isExternal href="https://renvinnare.se/">
					Ren vinnare
				</Link>
				<br />
				<br />
				<h2>
					<strong>Läs mer: </strong>
				</h2>
				<p>På antidoping.se kan du läsa mer om antidoping.</p>
				<Link showAnchorIcon isExternal href="https://www.antidoping.se/">
					Antidoping
				</Link>
				<br />
				<br />
				<h2>
					<strong>Vaccinera klubben: </strong>
				</h2>
				<p>Här kan du läsa om hur vi har gått tillväga för att bli en vaccinerad klubb.</p>
				<Link showAnchorIcon isExternal href="https://www.vaccineraklubben.se/">
					Vaccinera klubben
				</Link>
			</section>
		</div>
	);
}
