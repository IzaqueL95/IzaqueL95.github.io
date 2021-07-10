const botao = document.querySelector('.botao')
const menu = document.querySelector('.header')
const botaoDark = document.querySelector('.botaodark')
const botaoTeste = document.querySelector('.botaoT')
const a = document.querySelector('.a')
const body = document.querySelector('.bodyControl')
const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')
const h1 = document.querySelector('.h1')


botao.addEventListener("click", LightModo)
function LightModo() {
    h1.classList.add("active")
    a.classList.add("active")
    menu.classList.add("active")
    a1.classList.add("active")
    a2.classList.add("active")
    body.classList.add("active")
}

botaoDark.addEventListener("click", dark)

function dark(){
    menu.classList.remove("active")
    a.classList.remove("active")
    body.classList.remove("active")
    a1.classList.remove("active")
    a2.classList.remove("active")
    h1.classList.remove("active")
}


botaoTeste.addEventListener("click", testa)
function testa(){
    menu.classList.remove("active")
    
}
    
