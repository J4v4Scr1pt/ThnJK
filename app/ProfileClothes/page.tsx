import { Link } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/card';
import Image from 'next/image';
import ExiteClothes from '@/public/images/ExiteClothes.jpg';

export default function ProfileClothesPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="mb-6 text-3xl">Profilkläder</h1>
				<p>
					Trollhättans Judoklubb har idag ett samarbete med Excite för att beställa kläder med
					förenings-logga på. Klicka dig vidare på länken nedan för att se utbudet och beställa.
					Notera att upphämtning kan ske på Excite i Trollhättan. Vill du ha frakt så tillkommer en
					kostnad.
				</p>
				<br />
				<Link
					href="https://butik.exite.se/sortiment/trollhattans-judoklubb"
					isExternal
					showAnchorIcon>
					Trollhättans Judoklubb - Exite | New Wave Profile
				</Link>
				<br />
				<br />
				<Card className="h-auto w-auto max-w-[800px] light">
					<CardBody>
						<Image
							{...{
								alt: 'INFO-skarmdump-2023',
								src: ExiteClothes,
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
			</section>
		</div>
	);
}
