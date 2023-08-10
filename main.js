const form = document.getElementById("verificar-numeros");
const numA = document.getElementById("numero-A");
const numB = document.getElementById("numero-B");

// função para validar o que foi digitado nos campos
function validarNumero (numA, numB) {
    let numeroMaior = false;

    // verificação do valor dos campos
    if (numA >= numB && numB != '') {
        numeroMaior = true
    }

    return numeroMaior;
}

// criando função para gerar a mensagem de erro e salvando em uma variavel
let erro = function mensagemErro(event) {
    // transformando o valor recebido nos campos para int
    // chamando a função validarNumero e salvando em valorValido
    valorValido = validarNumero(parseInt(numA.value), parseInt(numB.value));
    // sequencia lógica para adicionar ou remover mensagem de erro
    if (valorValido === true) {
        numB.classList.add('error');
        document.querySelector(".error-mensage").style.display = 'block';
    } else {
        numB.classList.remove('error');
        document.querySelector(".error-mensage").style.display = 'none';
    }
}

// fazendo o teste do valor dos campos
numA.addEventListener('keyup', erro);
numB.addEventListener('keyup', erro);

// função para previnir que o valor seja apagado e para mensagem de sucesso
form.addEventListener("submit", function(e){

    // previnindo o reload da pagina
    e.preventDefault();

    // criando mensagem de sucesso
    const mensagemSucesso = `O número <b>${numA.value}</b> é menor que o número <b>${numB.value}</b>`;


    formValido = validarNumero(parseInt(numA.value), parseInt(numB.value));

    // criando mensagem de sucesso
    if (!formValido) {
        const containerMensagemSucesso = document.querySelector(".sucess-mensage")
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numA.value = '';
        numB.value = '';
    }
})