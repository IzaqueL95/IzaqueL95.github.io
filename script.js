const mezChange = document.querySelector('#teste')
const mez = document.querySelector('#mez')
const back1 = document.querySelector('.back-hov')
const bar = document.querySelector('#bar')
const mural = document.querySelector('#mural')
const music = document.querySelector('#music')
const com = document.querySelector('#com')
const conheca = document.querySelector('#conheca')
const changeText = document.querySelector('#changeText')
const changeReverse = document.querySelector('#changeReverse')
const mas = document.querySelector('#mas')
const pet = document.querySelector('#pet')
const saç = document.querySelector('#sal')
const sob = document.querySelector('#sob')
const drin = document.querySelector('#drin')
const drinAut = document.querySelector('#drinAut')
const mra = document.querySelector('#mra')

const dob1 = document.querySelector('#dob-1')
const dob2 = document.querySelector('#dob-2')
const dob3 = document.querySelector('#dob-3')
const dob4 = document.querySelector('#dob-4')
const dob5 = document.querySelector('#dob-5')
const dob6 = document.querySelector('#dob-6')

const tac = document.querySelector('#tac')
const prat = document.querySelector('#prat')


var navbar = document.querySelector('nav');


const gast = document.querySelector('#gast')
const med = document.querySelector('#med')
const firstText = document.querySelector('#firstText')
const but = document.querySelector('#but')
const iconS = document.querySelector('#iconS')

window.onload = carregou()
function carregou(){
    setTimeout(function(){ 
        gast.classList.remove("opaci")
        med.classList.remove("opaci")
        firstText.classList.remove("opaci")
        but.classList.remove("opaci")
        iconS.classList.remove("opaci")
    }, 800);
}

/*INICIO DA FUNÇÃO PARA MOSTRAR A TAÇA E O PRATO AO ROLAR PARA BAIXO*/
document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  if(posicaoy >= 2100){
    tac.classList.add("img-taca-show")
    prat.classList.add("img-prato-show")
  }
  
  else{
    tac.classList.remove("img-taca-show")
    prat.classList.remove("img-prato-show")
  }
});
/*FIM DA FUNÇÃO PARA MOSTRAR A TAÇA E O PRATO AO ROLAR PARA BAIXO*//*Função para mostrar a taça e o prato ao rolar para baixo*/


/*INICIO DAS FUNÇÕES PARA APLICAR O EFEITO DE DOBRA NOS CARDS DOS PRATOS E DRINKS */
pet.addEventListener("mouseover", changeMod =>{
    dob1.classList.add("corte-show")
})
pet.addEventListener("mouseout", changeMod =>{
        dob1.classList.remove("corte-show")
})

mas.addEventListener("mouseover", changeMod =>{
    dob2.classList.add("corte2-show")
})
mas.addEventListener("mouseout", changeMod =>{
        dob2.classList.remove("corte2-show")
})

sal.addEventListener("mouseover", changeMod =>{
    dob3.classList.add("corte3-show")
})
sal.addEventListener("mouseout", changeMod =>{
        dob3.classList.remove("corte3-show")
})

sob.addEventListener("mouseover", changeMod =>{
    dob4.classList.add("corte4-show")
    
})
sob.addEventListener("mouseout", changeMod =>{
        dob4.classList.remove("corte4-show")
})

drin.addEventListener("mouseover", changeMod =>{
    dob5.classList.add("corte5-show")
})
drin.addEventListener("mouseout", changeMod =>{
        dob5.classList.remove("corte5-show")
})

drinAut.addEventListener("mouseover", changeMod =>{
    dob6.classList.add("corte6-show")
})
drinAut.addEventListener("mouseout", changeMod =>{
        dob6.classList.remove("corte6-show")
})
/*FIM DAS FUNÇÕES PARA APLICAR O EFEITO DE DOBRA NOS CARDS DOS PRATOS E DRINKS */



/*INICIO DAS FUNÇÕES QUE ALTERAM AS IMAGENS AO PASSAR O MOUSE NAS SEÇÕES AREA EXT, MEZANINO, BAR... */
mezChange.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){ 
        back1.classList.add("back-hov-ext")
    }, 400);
})
mezChange.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){
        back1.classList.remove("back-hov-ext")
     }, 500);
})

mez.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){
        back1.classList.add("back-hov-mez")
     }, 400);
})
mez.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){ 
        back1.classList.remove("back-hov-mez")
    }, 500);
})

bar.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){ 
        back1.classList.add("back-hov-bar")}, 400);
})
bar.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){ 
        back1.classList.remove("back-hov-bar")}, 500);
})


mural.addEventListener("mouseover", changeModo =>{
    setTimeout(function(){
        back1.classList.add("back-hov-mural")
     }, 400);
})
mural.addEventListener("mouseout", changeModo =>{
    setTimeout(function(){
        back1.classList.remove("back-hov-mural")
     }, 500);
})


music.addEventListener("mouseover", changeMod =>{
    setTimeout(function(){
        back1.classList.add("back-hov-music")
     }, 400);
})
music.addEventListener("mouseout", changeMod =>{
    setTimeout(function(){ 
        back1.classList.remove("back-hov-music")
    }, 500);
})
/*FIMDAS FUNÇÕES QUE ALTERAM AS IMAGENS AO PASSAR O MOUSE NAS SEÇÕES AREA EXT, MEZANINO, BAR... */


/*INICIO DAS FUNÇÕES PARA TROCAR ELEMENTOS AO CLICAR EM 'CLIQUE AQUI PARA SABER MAIS' */
com.addEventListener("click", changeMods =>{
        conheca.innerHTML = '<b>ÁREA EXTERNA</b>'
        changeText.innerHTML = 'Na área externa você poderá se divertir ainda mais com seus amigos, em <br> um ambiente aberto, que é possível assistir as ruas do bairro Tatuapé, uma <br> das melhores regiões da cidade de São Paulo. Local ideal para o seu happy <br>hour, além de ser um lugar pet friendly, ou seja, você poderá levar o seu pet <br>  para almoçar junto contigo, fazendo com que sua experiência fique ainda <br>mais confortável!'
        back1.classList.add("back-hov-more")
        mezChange.classList.add("vazia")
        mez.classList.add("vazia")
        music.classList.add("vazia")
        bar.innerHTML = ''
        mural.innerHTML = ''
        com.innerHTML = ''
        mra.innerHTML = 'CONHEÇA <b>MAIS</b>'
        changeReverse.classList.add("opacChange")
})

changeReverse.addEventListener("click", changeMods =>{
    conheca.innerHTML = 'CONHEÇA <b>MAIS</b>'
    changeText.innerHTML = 'Além de nos conquistar com nossos deliciosos pratos, possuímos três ambientes distintos, <br> que darão exclusividade em cada vez que você visitar o nosso espaço!'
    back1.classList.remove("back-hov-more")
    mezChange.classList.remove("vazia")
    mez.classList.remove("vazia")
    music.classList.remove("vazia")
    bar.innerHTML = 'BAR'
    mural.innerHTML = 'MURAL INSTAGRAMÁVEL'
    changeReverse.classList.remove("opacChange")
    com.innerHTML = 'Clique aqui para saber mais'
    mra.innerHTML = ''
})
/*FIM DAS FUNÇÕES PARA TROCAR ELEMENTOS AO CLICAR EM 'CLIQUE AQUI PARA SABER MAIS' */

