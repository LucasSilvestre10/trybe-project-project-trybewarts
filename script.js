const trybeLogin = document.getElementById('trybeLogin');
// const checkValidation = document.getElementById('agreement');
// let buttomChecked = document.getElementById('submit-btn').checked;
// const buttomCheckedDisable = document.getElementById('submit-btn').disable;

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

// function validationOnOff () {
//   if (checkValidation !== true) {
//     buttomChecked = true}
// }
