import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import setGlobalStyles from 'styles/globals';
import { Provider } from 'react-redux';
import configureStore from 'store';
import * as serviceWorker from './serviceWorker';

// setGlobalStyles();
const renderApp = () => {
	const initialState = {};
	const store = configureStore(initialState);
	store.dispatch({ type: '@emoticon/@@INIT' });
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'),
	);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
