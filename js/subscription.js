import { submitUser, } from "./modules/callbacks.js";

const newUserForm = document.getElementById('newUserForm')

newUserForm.addEventListener('submit', submitUser);