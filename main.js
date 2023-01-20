const form = document.getElementById('formulario');
const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const msgSucesso = `O número <b>${valorB.value}</b> é maior que o número <b>${valorA.value}</b>!`
const msgErro = `O número <b>${valorB.value}</b> não é maior que o número <b>${valorA.value}</b> Tente novamente!`

if (parseInt(valorB.value) > parseInt(valorA.value)) {

const containerMensagemSucesso = document.querySelector('.success-message');
containerMensagemSucesso.innerHTML = msgSucesso;
containerMensagemSucesso.style.display = 'block';
        
    valorA.value = '';
    valorB.value = '';
}

else {
    
const containerMensagemErro = document.querySelector('.error-message');
containerMensagemErro.innerHTML = msgErro;
containerMensagemErro.style.display = 'block';
}
})