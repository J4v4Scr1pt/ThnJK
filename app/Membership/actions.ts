'use server';

export async function sendEmail(membership: membership) {
	const response = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			access_key: 'b48528f2-99a1-4634-9a87-451505c8fa82', // TODO: put in env
			subject: 'Medlemskap',
			...membership,
		}),
	});
	const result = await response.json();
	//TODO handle if error
	if (result.success) {
		return { success: true };
	}
}
