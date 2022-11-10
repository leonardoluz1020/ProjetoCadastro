class Cadastro {
    constructor(fisrtName, lastName, email, cel, password, confirmPassword, genero) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.email = email;
        this.cel = cel;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.genero = genero;
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

let opcoesGenero

// Eventos de escolha de genero
genero.addEventListener('click', (e) => {
    opcoesGenero = e.target.value;
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
    console.log(retroForca.value)
    if ((!verificarSenha(senha, confirSenha)) || (nome.value === '') || (celular.value === '') || (senha.value === '') || (confirSenha.value === '') || (email.value === '')) {
       
        e.preventDefault();
    } else {
        document.querySelector('#impri-force-confir').innerHTML = '';
        document.querySelector('#impri-force').innerHTML = '';
        
        e.preventDefault();
        const cliente = new Cadastro(nome.value, sobreNome.value, email.value, celular.value, senha.value, confirSenha.value, opcoesGenero);
        console.log(cliente);
    }
})
// Função para verificar caracteres
function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = `[a-zA-Z]`;

    if (char.match(pattern)) {
        console.log(char)
        return true
    }
}
// Função para verificar senhas iguais
function verificarSenha(senha1, senha2) {
    let confirm = false

    if (senha1.value === '') {

        document.querySelector('#impri-force').innerHTML = `<span style='color: #ff0000'> Por favor preencher a senha !</span>`;

    } else if (senha2.value === '') {

        document.querySelector('#impri-force-confir').innerHTML = `<span style='color: #ff0000'> Por favor confirmar a senha !</span>`;
    }

    if (senha1.value === senha2.value) {
        
        confirm = true;
    } else {
       
        document.querySelector('#impri-force-confir').innerHTML = 'As senhas não conferi!';
    }
        return confirm
}
//  Validar senha
function validarSenhaForca() {
    let forca = 0;
    const senha = document.querySelector('#password').value;
    // document.querySelector('#show-numbers').innerHTML = `Senha ${senha} `;

    if ((senha.length >= 4) && (senha.length <= 7)) {//
        forca += 10;
    } else if (senha.length > 7) {
        forca += 25;
    }
    if ((senha.length >= 5) && (senha.match(/[a-z]+/))) {
        forca += 10;
    }
    if ((senha.length >= 6) && (senha.match(/[A-Z]+/))) {
        forca += 20;
    } if ((senha.length >= 7) && (senha.match(/[!@#$%&*()]/))) {
        forca += 25;
    }
    mostrarForca(forca);
}
// Mostrar nivel da senha
function mostrarForca(forca) {
    // document.querySelector('#force').innerHTML = `Força: ${forca}`;
    if (forca < 30) {
        document.querySelector('#impri-force').innerHTML = `<span style='color: #ff0000'> Fraca</span>`;
    } else if ((forca >= 30) && (forca <= 50)) {
        document.querySelector('#impri-force').innerHTML = `<span style='color: #ffD700'>Média</span>`;
    } else if ((forca > 50) && (forca <= 70)) {
        document.querySelector('#impri-force').innerHTML = `<span style='color: #7FFF00'>Forte</span>`;
    } else if ((forca > 70) && (forca <= 100)) {
        document.querySelector('#impri-force').innerHTML = `<span style='color: #008000'>Excelente</span>`;
    }
}