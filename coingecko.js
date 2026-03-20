function toggleSwitch(element){
    element.classList.toggle('checked');
}


// fetch("https://api.coingecko.com/api/v3/ping?x_cg_demo_api_key=CG-M64VHYTiBjBmiaia8xqJtU1q")
// .then(res =>res.json())
// .then(data => console.log(data))


fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-M64VHYTiBjBmiaia8xqJtU1q")
  .then(res => res.json())
  .then(data => console.log(data));




  const apiKey = "CG-M64VHYTiBjBmiaia8xqJtU1q";

fetch(`https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    let marketcapnumbers =  Math.round(data.data.total_market_cap.usd)
    let marketcap = marketcapnumbers.toLocaleString('en-US')
    console.log(Math.round(marketcapnumbers))

    document.getElementById('totalmarketcap').innerText = '$'+marketcap
    console.log(data.data.total_market_cap.usd); // total market cap in USD
    // console.log(data.data.total_volume.usd);     // total 24h volume

    let tradingvol = Math.round(data.data.total_volume.usd)
    let hrschange = tradingvol.toLocaleString('en-US')
    document.getElementById('24hrsvol').innerText = '$'+hrschange
    // console.log(data.data.market_cap_percentage.btc); // BTC dominance
  })
  .catch(err => console.error(err));


// const options = {method: 'GET', headers: {'x-cg-pro-api-key': '<CG-M64VHYTiBjBmiaia8xqJtU1q>'}};

// fetch('https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h')
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));