const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputs = document.querySelectorAll('input');
const trialBtn = document.getElementById('trial-btn');


trialBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '1px solid var(--red)';
            input.style.background = 'url(../images/icon-error.svg) no-repeat right 20px center';
        }
    })
})

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.placeholder = '';
    })
})