type formState = {
	date?: {
		_errors: string[];
	};
	firstName?: {
		_errors: string[];
	};
	lastName?: {
		_errors: string[];
	};
	socialSecurityNumber?: {
		_errors: string[];
	};
	streetAddress?: {
		_errors: string[];
	};
	mailingAddress?: {
		_errors: string[];
	};
	phoneNumber?: {
		_errors: string[];
	};
	eMail?: {
		_errors: string[];
	};
	otherInfo?: {
		_errors: string[];
	};
	relativeName?: {
		_errors: string[];
	};
	relativePhoneNumber?: {
		_errors: string[];
	};
	relativeSocialSecurityNumber?: {
		_errors: string[];
	};
	relativeEmail?: {
		_errors: string[];
	};
} | null;

type membership = {
	date: string;
	firstName: string;
	lastName: string;
	ssNumber: string;
	streetAddress: string;
	mailingAddress: string;
	phoneNumber: string;
	eMail: string;
	otherInfo: string | null;
	relativeName: string;
	relativePhoneNumber: string;
	relativeSsNumber: string;
	relativeEmail: string;
};
