let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbrl@trade') //usdt blr eur
let stockPrice = document.querySelector('#stock-price')
let stockPriceCurrency = document.querySelector('#stock-currency')
let howManyInner = document.querySelector('#how-many')
let porc = document.querySelector('#porcentagem')
let btcPerc = document.querySelector('#btc-perc')
ws.onmessage = (event) => {
   let stockObjet = JSON.parse(event.data)
   
   var formatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(stockObjet.p) 

    stockPrice.innerText = formatado
    
  //   formatado * 1522
  
    stockPriceCurrency.innerText = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(stockObjet.p * 1509) 

    var howMany = 400000000 
    var howIs = howMany /  stockObjet.p 

    var perc = stockObjet.p * 1509

     var resultsPerc = (perc / howMany -1) * 100

     porc.innerText = '+' +  resultsPerc.toFixed(2) + ' %'
      // console.log(perc)
     if(perc > howMany){
       porc.classList.add("colorG")
     }

     
     howManyInner.innerText = howIs.toFixed(2)

     var results = 1509
     var btcResultPerc = (howIs / results - 1) * 100 
     
     btcPerc.innerText = btcResultPerc.toFixed(2) + ' %'

     if(btcResultPerc < results){
       btcPerc.classList.add("colorR")
     }
  //   console.log(howIs.toFixed(2))
}