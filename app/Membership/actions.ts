'use server';

export async function sendEmail(membership: membership) {
	const response = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			access_key: '387fae22-85e3-4be1-b622-9b2c0210306f', // TODO: put in env
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
