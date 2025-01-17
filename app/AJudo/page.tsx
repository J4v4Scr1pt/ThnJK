import Image from 'next/image';
import { Card, CardBody } from '@heroui/card';
import DHallen from '@/public/images/D-hallen.png';
import AjudoTranare from '@/public/images/A-judo_tranare.png';

export default function AJudoPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="mb-6 text-3xl">A-Judo: Anpassad Judo för Alla</h1>
				<p>
					A-judo står för anpassad judo vilket innebär att personer med särskilda behov ska ha
					möjligheten att träna judo. Träningen är först och främst inriktad på att främja
					koordinationsförmågan och kroppsuppfattningen. Vi tränar i en mindre grupp med mer
					tränartäthet. Det viktigaste för oss är att de som tränar har roligt och känner en
					gemenskap på mattan.
				</p>
				<br />
				<Card>
					<CardBody>
						<iframe
							className="w-full"
							height="439"
							src="https://www.youtube.com/embed/cGRAUvM7Rjg?si=Ymr8CpZj0ctvovrB"
							title="Det här är judo - ParaMe.se"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</CardBody>
				</Card>
				<br />
				<p>
					<strong>Vad är judo?</strong>
				</p>
				<p>
					Judo är en japansk kampsport där du ska besegra din motståndare genom att kasta eller
					hålla fast din motståndare. Det är inte tillåtet att sparka eller slåss. Läs mer om judo
					under fliken - Information/Vad är Judo
				</p>
				<br />
				<p>
					<strong>Var är träningen?</strong>
				</p>
				<p>Vi tränar på Älvhögsborg i judons träningslokal, D-hallen, som ligger två våningar ner.</p>
				<br />
				<Card className="h-auto w-auto light lg:h-[259px]">
					<CardBody className="overflow-hidden">
						<Image
							{...{
								alt: 'd-hallen',
								src: DHallen,
								placeholder: 'blur',
								priority: true,
								quality: 100,
								height: 259,
								width: 400,
								className: 'lg:h-full h-auto',
								style: {
									width: '100%',
								},
							}}
						/>
					</CardBody>
				</Card>
				<br />
				<p>
					<strong>När är träningen?</strong>
				</p>
				<p>Varje onsdag 17:00- 18:00. Terminsstart onsdag 4/9 vecka 36.</p>
				<br />
				<p>
					<strong>Kostnad?</strong>
				</p>
				<p>Nybörjare 700 kronor. (Du får provträna gratis 4 gånger)</p>
				<br />
				<p>
					<strong>Klädsel?</strong>
				</p>
				<p>
					Träningskläder som sitter löst och ger dig rörelsefrihet. Om du ändå vill ha ett tips
					fungerar långa mjukisbyxor och en långärmad t-shirt fint. Vi tränar barfota vilket gör att
					vi inte halkar på mattorna.
				</p>
				<br />
				<span>
					<strong>Tränare: </strong>
				</span>
				<span>
					Catrine Mattsson, Vilja Kördel, Junie Mattsson, Johan Sandin.(
					<strong> Alla har en utbildning inom A-judo</strong>)
				</span>
				<br />
				<br />
				<Card className="h-auto w-auto light lg:h-[448px]">
					<CardBody className="overflow-hidden">
						<Image
							{...{
								alt: 'd-hallen',
								src: AjudoTranare,
								placeholder: 'blur',
								priority: true,
								quality: 100,
								height: 448,
								width: 400,
								className: 'lg:h-full h-auto',
								style: {
									width: '100%',
								},
							}}
						/>
					</CardBody>
				</Card>
				<br />
				<p>
					<strong>Frågor och anmälan?</strong>
				</p>
				<p>
					Vid frågor eller fundering går det bra att kontakta Vilja Kördel på:
					<a className="mx-1 text-blue-600 visited:text-purple-600" href="tel:0709666329">
						070-9666329
					</a>
				</p>
				<p>
					Anmälan sker till klubbens mail:
					<a
						className="ml-1 text-blue-600 visited:text-purple-600"
						href="mailto:trollhattansjk@gmail.com">
						trollhattansjk@gmail.com
					</a>
				</p>
			</section>
		</div>
	);
}
