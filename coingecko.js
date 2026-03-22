function toggleSwitch(element){
    element.classList.toggle('checked');
}

 const apiKey = "CG-M64VHYTiBjBmiaia8xqJtU1q";
 let oldvalue = null
//  let globalsignalicons = document.querySelectorAll(".globalredorgreen")

 function getmarketcap(){
     let globalsignalicons = document.querySelectorAll(".globalredorgreen")
 fetch(`https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    ////////////////// for marketcap
    let marketcapnumbers =  Math.round(data.data.total_market_cap.usd)

     let newvalue = marketcapnumbers

    if(oldvalue !== null){
        if(newvalue >oldvalue){
            console.log('it is green')
             
             globalsignalicons.forEach(gsi => {
             gsi.classList.remove("i.bi-caret-down-fill");
              gsi.classList.add(".bi-caret-up-fill");
});
        }else if(newvalue < oldvalue){
            console.log('it is red')
            
           globalsignalicons.forEach(gsi => {
           gsi.classList.remove("bi-caret-up-fill");
           gsi.classList.add("i.bi-caret-down-fill");
});

        }else {console.log('nothing changed')}
    }
    oldvalue = newvalue
    console.log('old value is:',oldvalue)

    let globalpercentage = ((oldvalue-newvalue)/oldvalue) * 100
    console.log(globalpercentage)
   let allglobal =  document.querySelectorAll(".redorgreenpercentage");
    allglobal.forEach(alls=>{
        alls.innerText =  `${globalpercentage}%`
    })


    let marketcap = marketcapnumbers.toLocaleString('en-US')
    let short = (marketcapnumbers/1e12).toFixed(3)
    let shortfigurewords =  (marketcapnumbers/1e12).toFixed(2)
    document.getElementById('marketshort').innerText = '$'+short+'T'
    document.getElementById('figurewords').innerText = `$ ${shortfigurewords}`
    // console.log(Math.round(marketcapnumbers))
    document.getElementById('totalmarketcap').innerText = '$'+marketcap

    // ///////////////for 24hr trading volumne
    let tradingvol = Math.round(data.data.total_volume.usd)
    let volumeshort = (tradingvol/1e9).toFixed(3)
    document.getElementById('volumeshort').innerText = `$${volumeshort}T`
    let hrschange = tradingvol.toLocaleString('en-US')
    document.getElementById('24hrsvol').innerText = '$'+hrschange

    /////////////for  BTC Dominance
    // console.log(data.data.market_cap_percentage.btc); // BTC dominance
    let btcdominance = data.data.market_cap_percentage.btc.toFixed(1)
    // console.log(btcdominance)
    let ethdominance = data.data.market_cap_percentage.eth.toFixed(1)
    // console.log(ethdominance)
    document.getElementById('btcdominance').innerText = `BTC ${btcdominance}%  ETH ${ethdominance}%`

    // //////////for Eth dominanace
    // console.log(data.data)

  })

  .catch(err => console.error(err));

}

getmarketcap()

setInterval(getmarketcap,10000)

//  fetch(`https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`)
//   .then(res => res.json())
//   .then(data => {
//     // console.log(data)
//     ////////////////// for marketcap
//     let marketcapnumbers =  Math.round(data.data.total_market_cap.usd)
//     let marketcap = marketcapnumbers.toLocaleString('en-US')
//     let short = (marketcapnumbers/1e12).toFixed(3)
//     document.getElementById('marketshort').innerText = '$'+short+'T'
//     console.log(Math.round(marketcapnumbers))
//     document.getElementById('totalmarketcap').innerText = '$'+marketcap

//     // ///////////////for 24hr trading volumne
//     let tradingvol = Math.round(data.data.total_volume.usd)
//     let volumeshort = (tradingvol/1e9).toFixed(3)
//     document.getElementById('volumeshort').innerText = `$${volumeshort}T`
//     let hrschange = tradingvol.toLocaleString('en-US')
//     document.getElementById('24hrsvol').innerText = '$'+hrschange

//     /////////////for  BTC Dominance
//     console.log(data.data.market_cap_percentage.btc); // BTC dominance
//     let btcdominance = data.data.market_cap_percentage.btc.toFixed(1)
//     console.log(btcdominance)
//     let ethdominance = data.data.market_cap_percentage.eth.toFixed(1)
//     console.log(ethdominance)
//     document.getElementById('btcdominance').innerText = `BTC ${btcdominance}%  ETH ${ethdominance}%`

//     // //////////for Eth dominanace
//     console.log(data.data)

//   })

//   .catch(err => console.error(err));
