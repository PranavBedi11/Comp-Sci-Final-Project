import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';

import UserAuthProvider from './components/UserAuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserAuthProvider>
			<App />
		</UserAuthProvider>
	</React.StrictMode>
);
