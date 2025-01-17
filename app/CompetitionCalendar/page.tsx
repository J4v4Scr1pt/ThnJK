import Image from 'next/image';
import { Card, CardBody } from '@heroui/card';
import Tavlingskalender from '@/public/images/Tavlingskalender-2025-VAREN.png';

export default function CompetitionCalendarPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="mb-6 text-3xl">Tävlingskalender</h1>
				<p>
					<strong>Förtydligande om avgifter:</strong> Från och med höstterminen 2023 gäller att man
					anmäler sig före deadline i Smoothcomp för Early bird avgift om det finns eller standard
					avgift om det inte finns Early Bird. Det innebär att klubben går in efter deadline och
					godkänner/betalar alla anmälningar. Görs en anmälan efter detta kommer klubben inte
					godkänna eller betala anmälan om man inte kan visa upp kvitto/bevis på att man själv
					betalt in hela avgiften till Trollhättans Judoklubb.
				</p>
				<strong>OBS: </strong>
				<strong className="text-red-500 underline">
					Anmälan i god tid och avanmälan med giltigt skäl stöttar vi. Sen anmälan och ogiltig
					avanmälan/ej dyker upp stöttar vi inte, utan medlemmen får stå för alla avgifter.
				</strong>
				<ul className="my-8 list-disc pl-6">
					<li>
						Anmälan görs individuellt i Smoothcomp (betalning klickar du förbi) Önskar du hjälp
						med Smoothcomp be ledarna på klubben om hjälp.
					</li>
					<li>
						Alla anmälningsavgifter på <strong>prioriterad</strong> tävling/läger betalas av
						klubben. OM anmälan är gjord före utgången av Early/Standard avgift.
					</li>
					<li>Läs vår policy avseende avgifter och ledare vid läger och tävling.</li>
				</ul>

				<Card className="light">
					<CardBody>
						<Image
							{...{
								alt: 'Tavlingskalender-2024',
								src: Tavlingskalender,
								placeholder: 'blur',
								priority: true,
								quality: 100,
								height: 1457,
								width: 942,
								style: {
									width: '100%',
									height: 'auto',
								},
							}}
						/>
					</CardBody>
				</Card>
			</section>
		</div>
	);
}
