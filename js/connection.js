import { getData } from './modules/saves.js';
import { isConnected } from './modules/validate.js';

isConnected('users');

const formConnection = document.getElementById('form-connection');
console.log(formConnection);
formConnection.addEventListener('submit', (e) => {
	e.preventDefault();

	const old = getData('users');
	old.forEach((user) => {
		if (
			user.email === document.getElementById('email').value &&
			user.password === document.getElementById('password').value
		) {
			user.connection = true;
		}
	});
	const convertData = JSON.stringify(old);
	localStorage.setItem('users', convertData);
	console.log(localStorage.users);
});

//*******************//
//****Déconnection***//
//*******************//
