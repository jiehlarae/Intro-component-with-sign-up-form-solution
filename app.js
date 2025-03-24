const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const trialBtn = document.getElementById('trial-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
})

function setError(element, message) {
    const inputForm = element.parentElement;
    const errorMessage = inputForm.querySelector('.error');

    errorMessage.innerText = message;
    element.style.border = '1px solid var(--red)';
    element.style.background = 'url(../images/icon-error.svg) no-repeat right 20px center';
}

function setSuccess(element) {
    const inputForm = element.parentElement;
    const errorMessage = inputForm.querySelector('.error')
    const inputs = inputForm.querySelector('input');

    errorMessage.innerText = '';
    element.style.border = '1px solid var(--dark-blue)';
    element.style.background = 'none';
}

function validEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateInputs() {
    const firstNamevalue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNamevalue === '') {
        setError(firstName, 'First Name cannot be empty')
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'Last Name cannot be empty')
    } else {
        setSuccess(lastName);
    }

    // Need to fix this
    // if (emailValue === '') {
    //     setError(email, 'Email cannot be empty')
    // } else if (!validEmail(emailValue)) {
    //     setError(email, 'Looks like this is not an email')
    // } else {
    //     setSuccess(email);
    // }

    if (passwordValue === '') {
        setError(password, 'Password cannot be empty')
    } else {
        setSuccess(password);
    }
}