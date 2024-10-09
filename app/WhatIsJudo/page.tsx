import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/card';
import MrKano from '@/public/images/MrKano.jpg';

export default function WhatIsJudoPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="text-3xl">Vad är Judo</h1> <br />
				<div className="flex justify-center lg:justify-start">
					<Card className="h-[300px] w-[230px]">
						<CardBody className="overflow-hidden">
							<Image
								{...{
									alt: 'Jigoro Kano',
									src: MrKano,
									placeholder: 'blur',
									priority: true,
									quality: 100,
									height: 500,
									width: 400,
									style: {
										width: '100%',
										height: '100%',
									},
								}}
							/>
						</CardBody>
					</Card>
				</div>
				<br />
				<span>
					Judo är en Japansk kampsport som utvecklades av Jigoro Kano (1860-1938). Kano hade
					tidigare tränat Jujutsu, dvs Samurajernas gamla stridskonst, vid flera olika skolor. Då
					han tyckte att Jujutsu träningen var ineffektiv och dessutom inte passade in i ett modernt
					samhälle beslöt han att vidareutveckla sina kunskaper till en ny kampform. Resultatet blev
					Judo som grundades 1882.
				</span>
				<br />
				<br />
				<span>
					Det som skilde judo från den gamla Jujutsun var att teknikerna blev effektivare, onödiga
					tekniker försvann, inlärningen lades upp på ett pedagogiskt sätt och det blev säkert att
					träna. Fokus har kommit att ligga på kast- och fasthållningstekniker, men genom
					träningsformerna Randori (jap. fri övning eller övningskamp) och Kata (jap. teknikövningar
					i förutbestämd form) har judon fått en mycket bred repertoar innehållande alla typer av
					tekniker. Sporten har utvecklats och spridits över hela världen. Judo är idag världens
					största och populäraste kampsport.
				</span>
			</section>
			<br />
			<section>
				<h2 className="font-bold underline">En sport för alla</h2>
				<span>
					Judo är sporten som passar alla, gammal eller ung, man eller kvinna, kort eller lång,
					tjock eller smal. Alla kan finna en judostil och en nivå på träningen så att alla kan
					träna och utvecklas. Flickor och pojkar tränar tillsammans utifrån ålder och erfarenhet.
				</span>
			</section>
			<br />
			<section>
				<h2 className="font-bold underline">Den utvecklande barnidrotten</h2>
				<span>
					Judo är en utmärkt idrott för barn. Barnen utvecklar sin styrka, smidighet, koordination,
					kondition etc. Träningen sker disciplinerat. På ett utvecklande sätt tränas olika
					tekniker, lekar, tävlingar och andra träningsformer. Träningen är anpassad till barnens
					förutsättningar
				</span>
			</section>
			<br />
			<section>
				<h2 className="font-bold underline">Den överlägsna motionsformen</h2>
				<span>
					Judosporten passar även vuxna som vill träna för att få motion. Hela kroppen tränas. De
					som börjar träna märker ofta att man tvingas att aktivera muskelgrupper man aldrig
					tidigare använt. Konditionen utvecklas också under den energifyllda träningen. Man blir
					även smidigare och utvecklar bättre koordination.
				</span>
			</section>
			<br />
			<section>
				<h2 className="font-bold underline">Den tuffa och fartfyllda tävlingsidrotten</h2>
				<span>
					Den som vill kan ställa upp i tävlingar. Det finns ett stort urval av tävlingar runt om i
					Sverige och även internationellt; från små klubbmästerskap till internationella tävlingar,
					för alla från nybörjare till internationell elit.
				</span>
			</section>
			<br />
			<section>
				<h2 className="font-bold underline">Självförsvar</h2>
				<span>
					Huvudsyftet med att träna judo är inte att lära sig självförsvar. Självförsvar är dock
					något man ”får på köpet”. De reflexer och tekniker man utvecklar under Judoträningen är
					högeffektiva och väl utprovade tekniker som fungerar väl i en nödvärnssituation. Speciellt
					bra passar detta kvinnor som vill lära sig självförsvar då teknikerna kan användas på en
					större och starkare motståndare.
				</span>
			</section>
		</div>
	);
}
