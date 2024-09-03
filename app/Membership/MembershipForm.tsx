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
import { useFormState, useFormStatus } from 'react-dom';
import { membershipSchema } from './membershipSchema';

export function MembershipForm() {
	const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
	const onSubmitAction = async (prevState: formState, data: FormData) => {
		const formData = Object.fromEntries(data);
		const parsed = membershipSchema.safeParse(formData);
		if (!parsed.success) {
			const errors = parsed.error?.format();
			return errors;
		}

		if (parsed.success) {
			onClose();
		}
		return null;
	};

	const [formState, formAction] = useFormState(onSubmitAction, null);
	return (
		<>
			<Button className="my-4" onPress={onOpen} color="primary">
				Bli medlem
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} scrollBehavior="inside">
				<ModalContent as="form" action={formAction}>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Bli medlem</ModalHeader>
							<ModalBody>
								<div className="flex max-w-96 flex-col gap-3">
									<DatePicker
										isRequired
										label="Datum"
										name="date"
										isInvalid={Boolean(formState?.date)}
										errorMessage={formState?.date?._errors[0]}
									/>
									<Input
										isRequired
										label="Förnamn"
										type="text"
										name="firstName"
										isInvalid={Boolean(formState?.firstName)}
										errorMessage={formState?.firstName?._errors[0]}
									/>
									<Input
										isRequired
										label="Efternamn"
										type="text"
										name="lastName"
										isInvalid={Boolean(formState?.lastName)}
										errorMessage={formState?.lastName?._errors[0]}
									/>
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Personnummer"
										type="number"
										name="socialSecurityNumber"
										isInvalid={Boolean(formState?.socialSecurityNumber)}
										errorMessage={formState?.socialSecurityNumber?._errors[0]}
									/>
									<Input
										isRequired
										label="Gatuadress"
										type="text"
										name="streetAddress"
										isInvalid={Boolean(formState?.streetAddress)}
										errorMessage={formState?.streetAddress?._errors[0]}
									/>
									<Input
										isRequired
										label="Postadress"
										type="text"
										name="mailingAddress"
										isInvalid={Boolean(formState?.mailingAddress)}
										errorMessage={formState?.mailingAddress?._errors[0]}
									/>
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Telefonnummer"
										type="number"
										name="phoneNumber"
										isInvalid={Boolean(formState?.phoneNumber)}
										errorMessage={formState?.phoneNumber?._errors[0]}
									/>
									<Input
										isRequired
										label="E-post"
										type="email"
										name="eMail"
										isInvalid={Boolean(formState?.eMail)}
										errorMessage={formState?.eMail?._errors[0]}
									/>
									<Textarea
										label="Allergi/Övrigt"
										description="Prata med tränaren om det är något vi behöver känna till"
										type="text"
										name="otherInfo"
									/>
									<span>
										Om något händer är det tryggt för oss tränare att nå någon anhörig:
									</span>
									<Input
										isRequired
										label="Namn"
										type="text"
										name="relativeName"
										isInvalid={Boolean(formState?.relativeName)}
										errorMessage={formState?.relativeName?._errors[0]}
									/>
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Telefonnummer"
										type="number"
										name="relativePhoneNumber"
										isInvalid={Boolean(formState?.relativePhoneNumber)}
										errorMessage={formState?.relativePhoneNumber?._errors[0]}
									/>
									<Input
										classNames={{
											input: '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
										}}
										isRequired
										label="Personnummer"
										type="number"
										name="relativeSocialSecurityNumber"
										isInvalid={Boolean(formState?.relativeSocialSecurityNumber)}
										errorMessage={formState?.relativeSocialSecurityNumber?._errors[0]}
									/>
									<Input
										isRequired
										label="E-post"
										type="email"
										name="relativeEmail"
										isInvalid={Boolean(formState?.relativeEmail)}
										errorMessage={formState?.relativeEmail?._errors[0]}
									/>
								</div>
							</ModalBody>
							<FooterContent onClose={onClose} />
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

const FooterContent = ({ onClose }: { onClose: () => void }) => {
	const { pending } = useFormStatus();
	return (
		<ModalFooter>
			<Button isLoading={pending} onPress={onClose}>
				Avbryt
			</Button>
			<Button isLoading={pending} color="primary" type="submit">
				Skicka
			</Button>
		</ModalFooter>
	);
};
