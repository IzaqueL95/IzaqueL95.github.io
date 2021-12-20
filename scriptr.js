let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbrl@trade') //usdt blr eur
let stockPrice = document.querySelector('#stock-price')
let stockPriceCurrency = document.querySelector('#stock-currency')
let howManyInner = document.querySelector('#how-many')

ws.onmessage = (event) => {
   let stockObjet = JSON.parse(event.data)
   
   var formatado = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(stockObjet.p) 

    stockPrice.innerText = formatado
    
  //   formatado * 1522
  
    stockPriceCurrency.innerText = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(stockObjet.p * 1509) 

    howMany = 400000000 
    var howIs = howMany /  stockObjet.p 

    howManyInner.innerText = howIs.toFixed(2)

  //   console.log(howIs.toFixed(2))
}