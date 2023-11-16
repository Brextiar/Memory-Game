import { getData, saveData } from './saves.js';
import {
	validEmail,
	validPassword,
	matchPassword,
	validPseudo,
	emailExisting,
} from './validate.js';
// import { refresh } from "./display.js";

function submitUser(e) {
	// Block auto refresh
	e.preventDefault();
	console.log('test' + emailExisting(e));
	// Si le champ n'est pas vide
	if (
		validPseudo(e) &&
		validEmail(e) &&
		validPassword(e) &&
		matchPassword(e) &&
		emailExisting(e)
	) {
		console.log('coucou');
		const nbrUser = getData('users');
		console.log('nombre d utilisateur' + nbrUser);
		// Sauvegarde "Sauvage"
		saveData('users', {
			userId: `#${nbrUser.length + 1}`,
			pseudo: e.currentTarget.querySelector('#pseudo').value,
			email: e.currentTarget.querySelector('#email').value,
			password: e.currentTarget.querySelector('#password').value,
		});

		// Empty Fields
		e.currentTarget.querySelector('#pseudoError').innerText = '';
		e.currentTarget.querySelector('#emailError').innerText = '';
		e.currentTarget.querySelector('#passwordError').innerText = '';
		e.currentTarget.querySelector('#matchError').innerText = '';
		e.currentTarget.querySelector('#emailError').innerText = '';
		e.currentTarget
			.querySelector('#validInscription')
			.classList.add('styleValidInscription');
		e.currentTarget.querySelector('#validInscription').innerText =
			'Inscriprion Validé!';
		setTimeout(() => {
			document.querySelector('#pseudo').value = '';
			document.querySelector('#email').value = '';
			document.querySelector('#password').value = '';
			document.querySelector('#password-confirm').value = '';
			document
				.querySelector('#validInscription')
				.classList.remove('styleValidInscription');
			document.querySelector('#validInscription').innerText = '';
		}, 3000);
		//Suprimer les éventuels message d'erreur restant
		// Refresh Users List
		// refresh()
	}
}

function logOut(e) {
	e.preventDefault();
	const USER = getData('users');
}

export { submitUser, logOut };
