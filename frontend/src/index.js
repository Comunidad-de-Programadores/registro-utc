import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './sso/authConfig';
import App from './App';
import './styles/index.css';


export const msalInstance = new PublicClientApplication(msalConfig);

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
	msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback(event => {
	if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
		const account = event.payload.account;
		msalInstance.setActiveAccount(account);
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
    <App pca={msalInstance}/>
    </Router>
  </>
);
