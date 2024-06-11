import Image from 'next/image';
import Tavlingskalender from '@/public/images/tavlingskalender-2024-VAREN_3.png';

export default function CompetitionCalendarPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="text-3xl">Tävlingskalender</h1>
                <br />
				<p>
				<b>Förtydligande om avgifter:</b> Från och med höstterminen 2023 gäller att man anmäler sig före deadline i Smoothcomp för Early bird avgift om det finns eller standard avgift om det inte finns Early Bird. 
                Det innebär att klubben går in efter deadline och godkänner/betalar alla anmälningar. Görs en anmälan efter detta kommer klubben inte godkänna eller betala anmälan om man inte kan visa upp kvitto/bevis på att man själv betalt in hela avgiften till Trollhättans Judoklubb. 
                <b className='text-red-500 underline'> Anmälan i god tid och avanmälan med giltigt skäl stöttar vi. Sen anmälan och ogiltig avanmälan/ej dyker upp stöttar vi inte, utan medlemmen får stå för alla avgifter.</b>
				</p>
				<ul className="my-8 list-disc">
					<li>Anmälan görs individuellt i Smoothcomp (betalning klickar du förbi) Önskar du hjälp med Smoothcomp be ledarna på klubben om hjälp.</li>
					<li>Alla anmälningsavgifter på <b>prioriterad</b> tävling/läger betalas av klubben. OM anmälan är gjord före utgången av Early/Standard avgift.</li>
					<li>Läs vår policy avseende avgifter och ledare vid läger och tävling.</li>
				</ul>

				<Image
					className="h-[500px] w-screen shadow-large dark:shadow-none"
					{...{
						alt: 'INFO-skarmdump-2023',
						src: Tavlingskalender,
						placeholder: 'blur',
						priority: true,
						quality: 100,
						width: 738,
						height: 431,
					}}
				/>
			</section>
		</div>
	);
}
