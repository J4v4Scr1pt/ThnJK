import Image from 'next/image';
import Link from 'next/link';
import INFOSkarmdump2023 from '@/public/images/INFO-skarmdump-2023.png';

export default function MembershipPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="text-3xl">Medlemskap</h1>
				<p>
					För att bli medlem hos oss behöver du fylla i en blankett som finns i vår
					dojo/träningslokal eller skriva ut den här:{' '}
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

				<Image
					className="h-[550px] w-[400px] shadow-large dark:shadow-none"
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
			</section>
		</div>
	);
}