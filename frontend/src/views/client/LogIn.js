import React, { useEffect, useState } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionRequiredAuthError, InteractionStatus } from '@azure/msal-browser';

import { callMsGraph } from '../../sso/MsGraphApiCall';
import { loginRequest } from '../../sso/authConfig';
import { msalInstance } from '../..';
import { IS_DEV_ENVIROMENT } from '../../constants/enviroments.constants';

import { LoginMicrosoft } from '../../components/ui/LoginMicrosoft';
import { Button } from '@mui/material';

const SignInButton = () => {
	const isAuthenticated = useIsAuthenticated();
	const history = useHistory();
	const { instance } = useMsal();

	// const { USER } = useSelectors();

	const handleLogin = () => instance.loginRedirect();

	const handleRedirect = () => {
		//TODO: dependiendo el tipo de usuario, se hara redireccion a su pagina correspondiente
		history.push('sdad');
	};

	if (IS_DEV_ENVIROMENT) {
		return <Button onClick={handleRedirect}>Ir a Onboarding</Button>;
	}

	return (
		<>
			{isAuthenticated ? (
				<Button onClick={handleRedirect}>Ir a ...</Button>
			) : (
				<Button onClick={handleLogin}>Continuar con Microsoft</Button>
			)}
		</>
	);
};

export const LogIn = () => {
	const { inProgress } = useMsal();
	const navigate = useNavigate();

	const [graphData, setGraphData] = useState(null);

	useEffect(() => {
		IS_DEV_ENVIROMENT ? getFakeUserInfo() : getUserInfo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inProgress, graphData]);

	const getFakeUserInfo = () => {
		if (graphData) return;

		saveToken({
			'@odata.context': 'https://graph.microsoft.com/v1.0/$metadata#users/$entity',
			businessPhones: [],
			displayName: 'DEVELOPER FRONTEND',
			givenName: 'DEV',
			jobTitle: 'Alumno',
			mail: 'developer.frontend@edu.utc.mx',
			mobilePhone: null,
			officeLocation: 'Ingenieria en Sistemas Computacionales',
			preferredLanguage: 'es-ES',
			surname: 'Frontend',
			userPrincipalName: 'developer.frontend@edu.utc.mx',
			id: '42596aa6-7449-418e-bdee-7fe1fff67c8b',
		});
	};

	const getUserInfo = async () => {
		msalInstance
			.acquireTokenSilent(loginRequest)
			.then(tokenResponse => {
				//TODO: guardar info de usuario en el STORE REDUX
				// setUserCountry(tokenResponse.account.idTokenClaims.ctry);
				console.log({tokenResponse})
			})
			.catch(error => {
				if (error instanceof InteractionRequiredAuthError)
					return msalInstance.acquireTokenRedirect(loginRequest);
			});

		if (!graphData && inProgress === InteractionStatus.None) {
			const response = await callMsGraph();
			setGraphData(response);
			//TODO: guardar info de usuario en el STORE REDUX
			// setUserData(response);
			saveToken(response);
		}
	};

	const saveToken = async user => {
		//TODO: CONFIGURACION JWT AL BACKEND Y LUEGO GUARDARLO EN EL STORE REDUX
		// const token = await _getToken(user);
		// setUserToken(token);
	};

	//TODO: REVISAR A DONDE SE REDIRECCIONA DEPENDIENDO EL USUARIO
	const handleLogin = () => {
		console.log('login');
		navigate('/docente/home');
	};

	return (
		<div>
			<div className='app p-3'>
				<div className='bg'></div>
				<div className='p-2'>
					<h1 className='text-center mb-5' style={styles.title}>
						Registro Utc
					</h1>
					<img
						src='https://utc.mx/wp-content/themes/utc/assets/images/logo-utc-v01.svg'
						alt='logo'
					/>

					<div className='inputs' style={styles.divButton}>
						<LoginMicrosoft handleLogin={handleLogin} />
						<SignInButton />
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = {
	title: {
		fontSize: '2rem',
		fontWeight: 'bold',
		color: '#ff6300',
	},
	divButton: {
		display: 'flex',
		marginTop: '5rem',
	},
};
