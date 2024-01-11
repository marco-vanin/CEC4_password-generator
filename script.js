/* Variables */
let passwordLength = 16;


/* Selectors */
const passwordDisplay = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const lengthInput = document.getElementById('length');
const saveBtn = document.getElementById('saveBtn');


/* Event Listeners */
generateBtn.addEventListener('click', generatePassword);
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
saveBtn.addEventListener('click', updatePasswordLength);


/* Functions */
function generatePassword() {
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordDisplay.innerHTML = password;
}

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function updatePasswordLength() {
    passwordLength = lengthInput.value;
    closeModal();
}
