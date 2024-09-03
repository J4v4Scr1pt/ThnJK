import { z } from 'zod';

export const membershipSchema = z.object({
	date: z.string().trim().min(1, { message: 'Du måste ange ett datum' }),
	firstName: z.string().trim().min(1, { message: 'Du måste ange namn' }),
	lastName: z.string().trim().min(1, { message: 'Du måste ange efternamn' }),
	socialSecurityNumber: z.string().trim().min(1, { message: 'Du måste ange ett personnummer' }),
	streetAddress: z.string().trim().min(1, { message: 'Du måste ange en gatuadress' }),
	mailingAddress: z.string().trim().min(1, { message: 'Du måste ange en postadress' }),
	phoneNumber: z.string().trim().min(1, { message: 'Du måste ange ett telefonnummer' }),
	eMail: z.string().trim().min(1, { message: 'Du måste ange en e-post' }),
	otherInfo: z.nullable(z.string()),
	relativeName: z.string().trim().min(1, { message: 'Du behöver ange en anhörigs namn' }),
	relativePhoneNumber: z.string().trim().min(1, { message: 'Du behöver ange en anhörigs telefonnummer' }),
	relativeSocialSecurityNumber: z
		.string()
		.trim()
		.min(1, { message: 'Du behöver ange en anhörigs personnummer' }),
	relativeEmail: z.string().trim().min(1, { message: 'Du behöver ange en anhörigs e-post' }),
});
