import { Divider } from '@heroui/react';

export default function ContactAndFactualInformationPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="mb-6 text-3xl">Kontakt och faktauppgifter</h1>
				<span>
					<strong>Bildad: </strong>
				</span>
				<span>1966-09-22</span>
				<Divider className="my-3 max-w-96" />
				<span>
					<strong>Föreningsnr: </strong>
				</span>
				<span>12230-15</span>
				<Divider className="my-3 max-w-96" />
				<span>
					<strong>Organisationsnr: </strong>
				</span>
				<span>863000-9895</span>
				<Divider className="my-3 max-w-96" />
				<span>
					<strong>Adress: </strong>
				</span>
				<span>Älvhögsborg, Kanaltorget 7</span>
				<Divider className="my-3 max-w-96" />
				<span>
					<strong>Postadress: </strong>
				</span>
				<span>46131 Trollhättan</span>
				<Divider className="my-3 max-w-96" />
				<span>
					<strong>E-post: </strong>
				</span>
				<a
					className="ml-1 text-blue-600 visited:text-purple-600"
					href="mailto:trollhattansjk@gmail.com ">
					trollhattansjk@gmail.com
				</a>
				<Divider className="my-3 max-w-96" />
				<span>
					<strong>Bankgiro: </strong>
				</span>
				<span>5119-9685</span>
				<Divider className="my-3 max-w-96" />
				<span>
					<strong>Swish nummer: </strong>
				</span>
				<a className="mx-1 text-blue-600 visited:text-purple-600" href="tel:1234149076">
					123 414 9076
				</a>
				<Divider className="my-3 max-w-96" />
			</section>
		</div>
	);
}
