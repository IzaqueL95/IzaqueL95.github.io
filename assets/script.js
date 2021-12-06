const botao = document.querySelector('.botao')
const menu = document.querySelector('.header')
const botaoDark = document.querySelector('.botaodark')
const botaoTeste = document.querySelector('.botaoT')
const a = document.querySelector('.a')
const body = document.querySelector('.bodyControl')
const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')
const h1 = document.querySelector('.h1')
const h2 = document.querySelector('.h2')
const h3 = document.querySelector('.h3')
const eg = document.querySelector('.clasEgi')


botao.addEventListener("click", LightModo =>{
    h2.classList.add("active")
    h1.classList.add("active")
    h3.classList.add("active")
    a.classList.add("activeMenuItem")
    menu.classList.add("activeMenu")
    a1.classList.add("activeMenuItem")
    a2.classList.add("activeMenuItem")
    body.classList.add("active")
    eg.classList.add("active")
})


botaoDark.addEventListener("click", dark)

function dark(){
    menu.classList.remove("activeMenu")
    a.classList.remove("activeMenuItem")
    body.classList.remove("active")
    a1.classList.remove("activeMenuItem")
    a2.classList.remove("activeMenuItem")
    h1.classList.remove("active")
    h2.classList.remove("active")
    h3.classList.remove("active")
    eg.classList.remove("active")
}


botaoTeste.addEventListener("click", testa)
function testa(){
    menu.classList.remove("active")
    
}
    
