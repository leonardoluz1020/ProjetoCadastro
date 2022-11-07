class Cadastro {
    constructor(fisrtName, lastName, email, cel, password, confirmPassword) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.email = email;
        this.cel = cel;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

const nome = document.querySelector('#firstname');
const btn = document.querySelector('#btn-continue-button');
const genero = document.querySelector('#gender-group');
const sobreNome = document.querySelector('#lastname');
const email = document.querySelector('#email');
const celular = document.querySelector('#number');
const senha = document.querySelector('#password');
const confirSenha = document.querySelector('#confirmpassword');



// Eventos de escolha de genero
genero.addEventListener('click', (e) => {
    let opcoesGenero = e.target.value;
    console.log(opcoesGenero);
    return opcoesGenero
})
// Eventos de caracteres no Primeiro nome 
nome.addEventListener('keypress', function (e) {

    if (!checkChar(e)) {
        e.preventDefault();
    }

})
// Eventos caracteres no Sobrenome
sobreNome.addEventListener('keypress', function (e) {

    if (!checkChar(e)) {
        e.preventDefault();
    }

})
// Eventos do click do button de cadastro
btn.addEventListener('click', (e) => {

    if (!verificarSenha(senha, confirSenha)) {
        e.preventDefault();
    } else {
        const cliente = new Cadastro(nome.value, sobreNome.value, email.value, celular.value, senha.value, confirSenha.value);
        console.log(cliente);
    }
})
// Função para verificar caracteres
function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = `[a-zA-Z0-9]`;

    if (char.match(pattern)) {
        console.log(char)
        return true
    }
}
// Função para verificar senhas
function verificarSenha(senha1, senha2) {
    let confirm = false
    const senhaCompare = senha1.value
    if (senha1.value === senha2.value) {

        confirm = true;
        if (senhaCompare.includes('')) {

        }

    } else {
        alert(`Senha não conferi, Porfavor digite as senhas iguais`)
    }



    return confirm
}
