import { getData } from './saves.js';

function validPseudo(e) {
	const pseudo = e.currentTarget.querySelector('#pseudo').value;
	if (pseudo < 3 || pseudo > 8) {
		e.currentTarget.querySelector(
			'#pseudoError'
		).innerText = `Entrez un pseudo entre 3 et 8 caractère`;
		return false;
	} else {
		console.log('pseudo :>> true');
		return true;
	}
}

function validEmail(e) {
	const regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (regex.test(e.currentTarget.querySelector('#email').value)) {
		e.currentTarget.querySelector('#emailError').innerText = '';
		console.log('email :>> true');
		return true;
	} else {
		e.currentTarget.querySelector(
			'#emailError'
		).innerText = `Entrez une adresse mail valide.`;
		return false;
	}
}

function validPassword(e) {
	const regex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*\d).{6,}$/;
	if (regex.test(e.currentTarget.querySelector('#password').value)) {
		e.currentTarget.querySelector('#passwordError').innerText = '';
		console.log('password :>> true');
		return true;
	} else {
		e.currentTarget.querySelector('#passwordError').innerText =
			'Entrez un mot de passe valide';
		return false;
	}
}

function matchPassword(e) {
	if (
		e.currentTarget.querySelector('#password-confirm').value !=
		e.currentTarget.querySelector('#password').value
	) {
		e.currentTarget.querySelector(
			'#matchError'
		).innerText = `Votre mot de passe ne correspond pas.`;
		return false;
	} else {
		console.log('matchPswd :>> true');
		return true;
	}
}

function emailExisting(e) {
	const old = getData('users');

	if (old.length < 1) {
		e.currentTarget.querySelector('#emailError').innerText = '';
		return true;
	} else {
		old.forEach((user) => {
			if (user.email === e.currentTarget.querySelector('#email').value) {
				e.currentTarget.querySelector(
					'#emailError'
				).innerText = `l'email utilisé est déjà enregistré.`;
				e.currentTarget.querySelector('#pseudo').value = '';
				e.currentTarget.querySelector('#email').value = '';
				e.currentTarget.querySelector('#password').value = '';
				e.currentTarget.querySelector('#password-confirm').value = '';
				return false;
			}
		});
		e.currentTarget.querySelector('#emailError').innerText = '';
		return true;
	}
}

function isConnected(key) {
	const USERS = getData(key);
	const logIn = document.getElementById('logIn');
	let connected = false;

	USERS.forEach((user) => {
		if (user.connection) {
			connected = true;
		}
	});
	if (connected) {
		logIn.classList.remove('animatedConectionBtn');
		logIn.style.color = 'red';
		logIn.innerText = 'Déconnexion';
	} else {
		logIn.classList.add('animatedConectionBtn');
		logIn.style.color = 'green';
		logIn.innerText = 'Connexion';
	}
}

export {
	validEmail,
	validPassword,
	matchPassword,
	validPseudo,
	emailExisting,
	isConnected,
};
