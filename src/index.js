import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

import { IntlProvider } from 'react-intl';

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

let language;
try {
	language = location.pathname.replace(/\//g, '')
	if (!language) {
		throw 'opa'
	}
} catch (e) {
	language = 'en'
}
let messages = require(`./locales/${language}.json`);

ReactDOM.render(
	<IntlProvider locale="pt" messages={messages}>
		<ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<App />
		</ThemeProvider>
	</IntlProvider>,
  document.querySelector('#root'),
);
