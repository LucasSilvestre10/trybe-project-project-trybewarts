const trybeLogin = document.getElementById('trybeLogin');
const checkValidation = document.getElementById('agreement');
const buttomChecked = document.getElementById('submit-btn');
buttomChecked.disabled = true;

function validation() {
  console.log('Chamou!');
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

trybeLogin.addEventListener('click', validation);

function validationOnOff() {
  if (checkValidation.checked !== true) {
    buttomChecked.disabled = true;
  } else {
    buttomChecked.disabled = false;
  }
}
checkValidation.addEventListener('click', validationOnOff);
