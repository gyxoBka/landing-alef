const mailInput = document.querySelector('#form__control-mail');
const checkboxInput = document.querySelector('.form__input_checkbox');
const submit = document.querySelector('.form__control--btn');

const regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if(!mailValidate()) {
        mailInput.classList.add('form__control--incorrect');
        return false;
    }

    if(!checkboxInput.checked) {
        checkboxInput.classList.add('form__input_checkbox-fail');
        return false;
    }

    sendForm();
});

mailInput.addEventListener('click', (e) => {
    mailInput.classList.remove('form__control--incorrect');
});

checkboxInput.addEventListener('click', (e) => {
    checkboxInput.classList.remove('form__input_checkbox-fail');
});

function sendForm() {
    console.log('sending form...')
}

function mailValidate() {
    let mail = mailInput.value;

    if(regMail.test(mail) == false) {
        return false;
    }

    return true;
}