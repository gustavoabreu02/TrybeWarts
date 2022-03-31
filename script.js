const buttonLogin = document.querySelector('#button-entrar');
const inputEmail = document.querySelector('#input-email');
const inputSenha = document.querySelector('#input-senha');

function verificaLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', verificaLogin);
