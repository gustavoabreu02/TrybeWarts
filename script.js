const buttonLogin = document.querySelector('#button-entrar');
const inputEmail = document.querySelector('#input-email1');
const inputSenha = document.querySelector('#input-senha');
const checkbox = document.querySelector('input[id = "agreement"]');
const buttonSubimit = document.querySelector('#submit-btn');
const sectionTextarea = document.querySelector(".section-textarea");
const textArea = document.querySelector('#textarea');

function verificaLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', verificaLogin);

buttonSubimit.disabled = true;
function desabilitaButtonEnviar() {
  if (checkbox.checked === false) {
    buttonSubimit.disabled = true;
  } else if (checkbox.checked === true) {
    buttonSubimit.disabled = false;
  }
}

checkbox.addEventListener('click', desabilitaButtonEnviar);

function contadorMais() {
  let cont = document.querySelector('#counter');
  cont.innerText = 500 - textArea.value.length;
}

  window.onload = () => {
  textArea.addEventListener('keydown', contadorMais);
}
