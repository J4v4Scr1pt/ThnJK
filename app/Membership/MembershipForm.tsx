'use client';
import {
	Button,
	DatePicker,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Textarea,
	useDisclosure,
} from '@nextui-org/react';

export function MembershipForm() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Button className="my-4" onPress={onOpen} color="primary">
				Bli medlem
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} scrollBehavior="inside">
				<ModalContent as="form" action="">
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Bli medlem</ModalHeader>
							<ModalBody>
								<div className="flex max-w-96 flex-col gap-3">
									<DatePicker isRequired label="Datum" />
									<Input isRequired label="Förnamn" type="text" />
									<Input isRequired label="Efternamn" type="text" />
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Personnummer"
										type="number"
									/>
									<Input isRequired label="Gatuadress" type="text" />
									<Input isRequired label="Postadress" type="text" />
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Telefonnummer"
										type="number"
									/>
									<Input isRequired label="E-post" type="email" />
									<Textarea
										isRequired
										label="Allergi/Övrigt"
										description="Prata med tränaren om det är något vi behöver känna till"
										type="text"
									/>
									<span>
										Om något händer är det tryggt för oss tränare att nå någon anhörig:
									</span>
									<Input isRequired label="Namn" type="text" />
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Telefonnummer"
										type="number"
									/>
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Personnummer"
										type="number"
									/>
									<Input isRequired label="E-post" type="email" />
								</div>
							</ModalBody>
							<ModalFooter>
								<Button onPress={onClose}>Avbryt</Button>
								<Button color="primary">Skicka</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
