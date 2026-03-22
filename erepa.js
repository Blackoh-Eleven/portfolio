// let nums = 2565854645;
// console.log(nums.toString())

// let numstr = nums.toString()

// let short = (numstr/1e9).toFixed(3)
// // console.log(numstr.slice(0,3))

// console.log(short)


 const apiKey = "CG-M64VHYTiBjBmiaia8xqJtU1q";

//  fetch(`https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`)
//   .then(res => res.json())
//   .then(data => {
//     // console.log(data)
//     ////////////////// for marketcap
//     let marketcapnumbers =  Math.round(data.data.total_market_cap.usd)
//     let marketcap = marketcapnumbers.toLocaleString('en-US')
//     let short = (marketcapnumbers/1e12).toFixed(3)
//     // console.log(marketcapnumbers)
//     // document.getElementById('marketshort').innerText = '$'+short+'T'
//     // console.log(Math.round(marketcapnumbers))
//     // document.getElementById('totalmarketcap').innerText = '$'+marketcap


//     let oldvalue = null;
//     let newvalue = marketcapnumbers

//     if(oldvalue !== null){
//         if(newvalue >oldvalue){
//             console.log('it is green')
//         }else if(newvalue < oldvalue){
//             console.log('it is red')
//         }else {console.log('nothing changed')}
//     }
//     oldvalue = newvalue
//   })
//   .catch(err=>console.error(err))

    let oldvalue = null;

  setInterval(() => {
    //  fetch(`https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    ////////////////// for marketcap
    let marketcapnumbers =  Math.round(data.data.total_market_cap.usd)
    let marketcap = marketcapnumbers.toLocaleString('en-US')
    let short = (marketcapnumbers/1e12).toFixed(3)
    // console.log(marketcapnumbers)
    // document.getElementById('marketshort').innerText = '$'+short+'T'
    // console.log(Math.round(marketcapnumbers))
    // document.getElementById('totalmarketcap').innerText = '$'+marketcap



    let newvalue = marketcapnumbers

    if(oldvalue !== null){
        if(newvalue >oldvalue){
            console.log('it is green')
        }else if(newvalue < oldvalue){
            console.log('it is red')
        }else {console.log('nothing changed')}
    }
    oldvalue = newvalue
    console.log('old value is:',oldvalue)
  })
  .catch(err=>console.error(err))
  }, 2000);