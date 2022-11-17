import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MsalProvider } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';



import { AppRoutes } from './router/App.routes';
import { store, persistor } from './store/store';
import { CustomNavigationClient } from './sso/NavigationClient';

function App({ pca }) {
	// The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
	const navigate = useNavigate();
	const navigationClient = new CustomNavigationClient(navigate);
	pca.setNavigationClient(navigationClient);
	return (
		<MsalProvider instance={pca}>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AppRoutes />
				</PersistGate>
			</Provider>
		</MsalProvider>
	);
}

export default App;
