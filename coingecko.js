function toggleSwitch(element){
    element.classList.toggle('checked');
}

 const apiKey = "CG-M64VHYTiBjBmiaia8xqJtU1q";
 function getmarketcap(){
     let globalsignalicons = document.querySelectorAll(".globalredorgreen")
 fetch(`https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`)
  .then(res => res.json())
  .then(data => {

// for coins ///////////////////
    let coins = data.data.active_cryptocurrencies.toLocaleString()
    document.getElementById('spanactivecoins').innerText = coins
    // console.log(coins)

    // for exchanges ////////////////////
    let exchanges = data.data.markets.toLocaleString()
    document.getElementById('spanexchange').innerText = exchanges

    // console.log(data)
    ////////////////// for marketcap
    let marketcapnumbers =  Math.round(data.data.total_market_cap.usd)

    // let globalpercentage = ((newvalue-oldvalue)/oldvalue) * 100
    let globalpercentage = data.data.market_cap_change_percentage_24h_usd
    // console.log(globalpercentage)
   let allglobal =  document.querySelectorAll(".redorgreenpercentage");
    allglobal.forEach(alls=>{
        alls.innerText =  `${globalpercentage.toFixed(1)}%`
    })

        if(globalpercentage >= 0){
            // console.log('it is green')
             
             globalsignalicons.forEach(gsi => {
             gsi.classList.remove("bi-caret-down-fill");
              gsi.classList.add("bi-caret-up-fill");
});
        }else if(globalpercentage < 0){
            // console.log('it is red')
            
           globalsignalicons.forEach(gsi => {
           gsi.classList.remove("bi-caret-up-fill");
           gsi.classList.add("bi-caret-down-fill");
});

        }else {console.log('nothing changed')}


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

setInterval(getmarketcap,60000)

// Trending box


async function trending(){
fetch('https://api.coingecko.com/api/v3/search/trending')
  .then(res => res.json())
  .then(data => {
    // console.log(data);

    let coins = data.coins.slice(0,3);
    // console.log(coins)


    const promises = coins.map(coining=>{
       let coin = coining.item
        // console.log(coin)   
        let coinid = coin.id
        // console.log(coinid)






    return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinid}`)
    
       .then(res => res.json())
    //    .then(data=>{console.log(data)})
        .catch(err => {
      console.error(`Failed to fetch market data for ${coinid}`, err);
      return null; // prevent breaking Promise.all
    });
})

    return Promise.all(promises)

    .then(allData=>{
        allData.forEach(coinArray=>{
            // console.log(coinArray)
            const coinData = coinArray[0];
            // console.log(coinData)
                  document.getElementById('namesandicons').innerHTML += `
        <li class="flexingnameandicon">
          <img src="${coinData.image}" />
          <span class="coinname">${coinData.name}</span>
        </li>
      `;


      let pricepercent = coinData.price_change_percentage_24h

                        document.getElementById('priceandchanges').innerHTML += `
              <span class="coinpricechange">$${(coinData.current_price).toLocaleString()}${
                pricepercent > 0 
                  ? `<i class="bi bi-caret-up-fill">${pricepercent.toFixed(2)}%</i>` 
                  : `<i class="bi bi-caret-down-fill">${pricepercent.toFixed(2)}%</i>`
              }</span> 
            `;


        })
    })


  })

}

trending()

        








let dataarray = []



fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
  .then(res => res.json())
  .then(data => {console.log(data)

    data.forEach(datum=>{
      // console.log(datum.price_change_percentage_24h)
      dataarray.push({
        coinname: datum.id,
        coinimg:datum.image,
        coinprice:datum.price_change_24h,
        coinpercentage: datum.price_change_percentage_24h
      })

    dataarray.sort((a,b)=>b.coinpercentage -a.coinpercentage)
    
    })
    // console.log(dataarray.sort((a,b)=>b.coinpercentage -a.coinpercentage))


    // console.log(dataarray)
// console.log(sorting(datum.price_change_percentage_24h))
// console.log(dataarray.slice(0,3))
let datasliced = dataarray.slice(0,3)

datasliced.forEach(gainersname =>{
  // console.log(gainersname.coinname)
  document.getElementById('nameplace').innerHTML +=  `
        <li class="flexingnameandicon">
          <img src="${gainersname.coinimg}" />
          <span class="coinname">${gainersname.coinname}</span>
        </li>
      `;

      let gainerspricepercent =  gainersname.coinpercentage
      // console.log(gainerspricepercent)

document.getElementById('priceandpercent').innerHTML +=   `
              <span class="coinpricechanges">$${(gainersname.coinprice).toLocaleString()}${
                gainerspricepercent > 0 
                  ? `<i class="bi bi-caret-up-fill">${gainersname.coinpercentage.toFixed(2)}%</i>` 
                  : `<i class="bi bi-caret-down-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
              }</span> 
            `
})

let coinnumber = 1

console.log(data)

data.forEach(mainname=>{console.log(mainname.id)


  document.getElementById('maincoinlist').innerHTML += `

        <li class="eachcoinprop">
        <i class="fa-regular fa-star"></i> <span class="numlist">${coinnumber++}</span>
        <span class="workon">
          <img src="${mainname.image}" />
          <span class="coinname">${mainname.name}   <span class="symbol">${mainname.symbol.toUpperCase()}</span></span>
          </span>
        </li>



`
})
// let maincoinname = data.id
// console.log(maincoinname)





  })

  

  // .catch(err=>{console.error('api fetch not working')})
  .catch(err => console.error(err));

  