import React from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

import { IS_DEV_ENVIROMENT } from '../constans/environment.constants';

const AuthLayout = ({ children }) => {
	return (
		<>
			{IS_DEV_ENVIROMENT ? (
				<>{children}</>
			) : (
				<>
					<AuthenticatedTemplate>{children}</AuthenticatedTemplate>
					<UnauthenticatedTemplate>
						{/* TODO:AGREGAR COMPONENTE PARA REDIRECCION */}
						{/* <LoginForm>
									<NotAuthenticated />
								</LoginForm> */}
						<div>
							<p>Debes iniciar sesión para poder acceder a este módulo.</p>
						</div>
					</UnauthenticatedTemplate>
				</>
			)}
		</>
	);
};

export default AuthLayout;
