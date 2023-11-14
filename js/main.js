$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');

    $('#telefone').mask('(00) 00000-0000');

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail.',
            telefone: 'Por favor, insira o seu telefone.',
            cpf: 'Por favor, insira o seu CPF.',
            endereco: 'Por favor, insira o seu endereço.',
            cep: 'Por favor, insira o seu CEP.'
        },
        errorClass: "mensagem-erro"
    })
})