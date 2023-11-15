function validPseudo (e) {
    const pseudo = e.currentTarget.querySelector('#pseudo').value 
    if (pseudo < 3 || pseudo > 8 ) {
        e.currentTarget.querySelector('#pseudoError').innerText = `Entrez un pseudo entre 3 et 8 caractère`
        return false
    } else {
        return true
    }
}

function validEmail (e) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(e.currentTarget.querySelector('#email').value)) {
        e.currentTarget.querySelector('#emailError').innerText = ""
        return true
    } else {
        e.currentTarget.querySelector('#emailError').innerText = `Entrez une adresse mail valide.`
        return false
    }
}

function validPassword (e) {
    const regex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*\d).{6,}$/
    if (regex.test(e.currentTarget.querySelector('#password').value)) {
        e.currentTarget.querySelector('#passwordError').innerText = ""
        return true
    } else {
        e.currentTarget.querySelector('#passwordError').innerText = "Entrez un mot de passe valide"
        return false
    }
}

function matchPassword (e) {
    if (e.currentTarget.querySelector('#password-confirm').value != e.currentTarget.querySelector('#password').value) {
        e.currentTarget.querySelector('#matchError').innerText = `Votre mot de passe ne correspond pas.`
        return false
    } else {
        return true
    }
}

export {validEmail, validPassword, matchPassword, validPseudo}