import { loginRequest, graphConfig } from './authConfig';
import { msalInstance } from '../index';

export async function callMsGraph() {
	const account = msalInstance.getActiveAccount();
	if (!account) {
		throw Error(
			'No active account! Verify a user has been signed in and setActiveAccount has been called.',
		);
	}

	const { accessToken } = await msalInstance.acquireTokenSilent({
		...loginRequest,
		account: account,
	});

	const bearer = `Bearer ${accessToken}`;
	const headers = new Headers();

	headers.append('Authorization', bearer);

	const options = {
		method: 'GET',
		headers,
	};

	try {
		const response = await fetch(graphConfig.graphMeEndpoint, options)
		return response.json();
	} catch (error) {
		console.log('Ocurrio un error al conectar con MsGraph')
		console.log(error)
		return;
	}

}
