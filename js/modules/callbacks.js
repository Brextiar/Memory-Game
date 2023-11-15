import { saveData } from "./saves.js"
import { validEmail, validPassword, matchPassword, validPseudo } from "./validate.js";
// import { refresh } from "./display.js";

let nbrUsers = 0;
function submitUser(e) {
    // Block auto refresh
    e.preventDefault()
    // Si le champ n'est pas vide
    if (validPseudo(e) && validEmail(e) && validPassword(e) && matchPassword(e)) {
        nbrUsers++
        // Sauvegarde "Sauvage"
        saveData("users", {
            userId: `#${nbrUsers}`,
            pseudo: e.currentTarget.querySelector('#pseudo').value,
            email: e.currentTarget.querySelector('#email').value,
            password: e.currentTarget.querySelector('#password').value
        })

        // Empty Fields
        e.currentTarget.querySelector('#pseudo').value = ''
        e.currentTarget.querySelector('#email').value = ''
        e.currentTarget.querySelector('#password').value = ''
        e.currentTarget.querySelector('#password-confirm').value = ''
        e.currentTarget.querySelector('#validInscription').classList.add("styleValidInscription")
        e.currentTarget.querySelector('#validInscription').innerText = 'Inscriprion Validé!'

        //Suprimer les éventuels message d'erreur restant

        // Refresh Users List
        // refresh()
    }
}



export { nbrUsers, submitUser }