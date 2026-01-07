import '@babel/polyfill';
import ready from 'domready';

import App from './App';

ready(() => {
	window.app = new App();
	// Uygulama giriş ekranından sonra başlatılacak
	// window.app.init();
});
