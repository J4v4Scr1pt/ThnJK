import Image from 'next/image';
import Link from 'next/link';
import INFOSkarmdump2023 from '@/public/images/INFO-skarmdump-2023.png';
import { MembershipForm } from './MembershipForm';
import { Card, CardBody } from '@nextui-org/card';

export default function MembershipPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="text-3xl">Medlemskap</h1>
				<MembershipForm />
				<p>
					För att bli medlem hos oss behöver du klicka på knappen ovan eller fylla i en blankett som
					finns i vår dojo/träningslokal alternativt skriva ut den här:{' '}
					<Link
						className="text-blue-600 visited:text-purple-600"
						href="/documents/MEDLEMSINFO-2023.pdf"
						download="MEDLEMSINFO-2023.pdf"
						locale={false}
						rel="noopener noreferrer"
						target="_blank"
						aria-label="Downlod MEDLEMSINFO-2023">
						Medlemsinfo.pdf
					</Link>
				</p>
				<ul className="my-8">
					<li>TEXTA GÄRNA </li>
					<li>FYLL I SAMTLIGA FÄLT</li>
					<li>HELA PERSONNUMRET MÅSTE FYLLAS I</li>
				</ul>

				<Card className="h-[550px] w-[400px]">
					<CardBody className="overflow-visible">
						<Image
							className="h-[550px] w-[400px]"
							{...{
								alt: 'INFO-skarmdump-2023',
								src: INFOSkarmdump2023,
								placeholder: 'blur',
								priority: true,
								quality: 100,
								height: 550,
								width: 400,
							}}
						/>
					</CardBody>
				</Card>
			</section>
		</div>
	);
}
