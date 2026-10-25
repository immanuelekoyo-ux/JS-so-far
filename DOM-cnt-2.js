const card = document.querySelector('.card');
const form = document.getElementById('signupForm');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');
const successMessage = document.getElementById('successMessage');

const fullnameError = document.querySelector('#fullname-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (fullname.value.trim() === '') {
        fullnameError.textContent = 'Full name is required';
        isValid = false;
    }else if (fullname.value.trim().length < 3) {
        fullnameError.textContent = 'Full name must be at least 3 characters long';
        isValid = false;
    }
    // }else if (fullname.value.trim().length >= 3) {
    //     fullnameError.textContent = '';
    // }

    if (email.value.trim() === '') { 
        emailError.textContent = 'Email is required';
        isValid = false;
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;  
    }else if (password.value.trim().length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    }else if (password.value.trim().length >= 8) {
        passwordError.textContent = '';
    }

    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.textContent = 'Confirm password is required';
        isValid = false;
    }else if (confirmPassword.value.trim() !== password.value.trim()) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    }


    if (isValid === true) {
        // Form is valid, you can submit it or perform further actions
        card.classList.add('hidden');
        successMessage.classList.add('show');
    }
});   
