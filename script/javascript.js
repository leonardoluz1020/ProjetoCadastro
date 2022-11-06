class Cadastro {
    constructor(fisrtName, lastName, email, cel, password, confirmPassword) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.email = email;
        this.cel =cel;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

const btn = document.querySelector('#btn-continue-button');
const genero = document.querySelector('#gender-group')
let opcoesGenero;

const radioGenero = Event => {
opcoesGenero = Event.value
// console.log(opcoesGenero);
console.log(Event.target.value);

}

btn.addEventListener('click',(e)=>{
const nome = document.querySelector('#firstname');
const sobreNome = document.querySelector('#lastname');
const email = document.querySelector('#email');
const celular = document.querySelector('#number');
const senha = document.querySelector('#password');
const confirSenha = document.querySelector('#confirmpassword');
console.log(nome.value)
console.log(sobreNome.value)
console.log(email.value)
console.log(celular.value)
console.log(senha.value)
console.log(confirSenha.value)

})
console.log('Teste')

 genero.addEventListener('click', radioGenero);