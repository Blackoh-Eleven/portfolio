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

        








// let dataarray = []



// // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h,24h,7d')
//   .then(res => res.json())
//   .then(data => {console.log(data)

//     data.forEach(datum=>{
//       // console.log(datum.price_change_percentage_24h)
//       dataarray.push({
//         coinname: datum.id,
//         coinimg:datum.image,
//         coinprice:datum.price_change_24h,
//         coinpercentage: datum.price_change_percentage_24h
//       })

//     dataarray.sort((a,b)=>b.coinpercentage -a.coinpercentage)
    
//     })
//     // console.log(dataarray.sort((a,b)=>b.coinpercentage -a.coinpercentage))


//     // console.log(dataarray)
// // console.log(sorting(datum.price_change_percentage_24h))
// // console.log(dataarray.slice(0,3))
// let datasliced = dataarray.slice(0,3)

// datasliced.forEach(gainersname =>{
//   // console.log(gainersname.coinname)
//   document.getElementById('nameplace').innerHTML +=  `
//         <li class="flexingnameandicon">
//           <img src="${gainersname.coinimg}" />
//           <span class="coinname">${gainersname.coinname}</span>
//         </li>
//       `;

//       let gainerspricepercent =  gainersname.coinpercentage
//       // console.log(gainerspricepercent)

// document.getElementById('priceandpercent').innerHTML +=   `
//               <span class="coinpricechanges">$${(gainersname.coinprice).toLocaleString()}${
//                 gainerspricepercent > 0 
//                   ? `<i class="bi bi-caret-up-fill">${gainersname.coinpercentage.toFixed(2)}%</i>` 
//                   : `<i class="bi bi-caret-down-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
//               }</span> 
//             `
// })

// let coinnumber = 1

// console.log(data)

// data.forEach(mainname=>{
//   // console.log(mainname.id)


//   document.getElementById('maincoinlist').innerHTML += `

//         <li class="eachcoinprop">
//         <i class="fa-regular fa-star"></i> <span class="numlist">${coinnumber++}</span>
//         <span class="workon">
//           <img src="${mainname.image}" />
//           <span class="coinname">${mainname.name}   <span class="symbol">${mainname.symbol.toUpperCase()}</span></span>
//           </span>
//         </li>
// `



// document.getElementById('allprice').innerHTML += `

// <li class="eachcoinprice">
// $${mainname.current_price.toLocaleString()}
// </li>
// `
// let change = mainname.price_change_percentage_1h_in_currency;

// document.getElementById('all1hour').innerHTML += `
// <li class="eachcoin1hr">
// ${
//   change != null
//     ? change > 0
//       ? `<i class="bi bi-caret-up-fill">${change.toFixed(1)}%</i>`
//       : `<i class="bi bi-caret-down-fill">${change.toFixed(1)}%</i>`
//     : `<i class="bi bi-dash">N/A</i>`
// }
// </li>
// `;



// let change24hr = mainname.market_cap_change_percentage_24h;

// document.getElementById('all24hour').innerHTML += `
// <li class="eachcoin24hr">
// ${
//   change24hr != null
//     ? change24hr > 0
//       ? `<i class="bi bi-caret-up-fill">${change24hr.toFixed(1)}%</i>`
//       : `<i class="bi bi-caret-down-fill">${change24hr.toFixed(1)}%</i>`
//     : `<i class="bi bi-dash">N/A</i>`
// }
// </li>
// `;






// let change7days = mainname.price_change_percentage_7d_in_currency;

// document.getElementById('all7days').innerHTML += `
// <li class="eachcoin7days">
// ${
//   change7days != null
//     ? change7days > 0
//       ? `<i class="bi bi-caret-up-fill">${change7days.toFixed(1)}%</i>`
//       : `<i class="bi bi-caret-down-fill">${change7days.toFixed(1)}%</i>`
//     : `<i class="bi bi-dash">N/A</i>`
// }
// </li>
// `;



//   document.getElementById('all24hvol').innerHTML += `

//         <li class="each24hvol">
//         $${mainname.total_volume.toLocaleString()}
//         </li>
// `


//   document.getElementById('allmarketcap').innerHTML += `

//         <li class="eachmarketcap">
//         $${mainname.market_cap.toLocaleString()}
//         </li>
// `

// // console.log(mainname.price_change_percentage_7d_in_currency.toFixed(1))

// })
// // let maincoinname = data.id
// // console.log(maincoinname)





//   })


//   document.getElementById('last7days').innerHTML += `
//            <div class="canvas"><canvas id="mychart"></canvas> </div> 
//         </li>
//     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


//     <script src="chart.js"></script>
  
//   `

  

//   // .catch(err=>{console.error('api fetch not working')})
//   .catch(err => console.error(err));






// let dataarray = [];

// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h,24h,7d')
//   .then(res => res.json())
//   .then(async data => { // make this async so we can await chart fetches
//     console.log(data);




//         let limited = data.slice(0,5)
//     console.log(limited)

//     // Top gainers array

//     const combinedData = await Promise.all(
//       limited.map(async(item)=>{
//         const api2 = await fetch(`https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`);
//         if(!api2.ok) {console.log('i didnt fetch api2')
//           return null;
//         }
//         const data2 = await api2.json()

//         return{
//           coinapi :item,
//           chartapi:data2.prices
//         }
//       })
//     )

//     return combinedData;

  
//   })
//   .then((combinedData)=>{
//     console.log('combined 1-1 data :',combinedData)
//   })
//   .catch(err => console.error(err));

//     // Top gainers array
//     data.forEach(datum => {
//       dataarray.push({
//         coinname: datum.id,
//         coinimg: datum.image,
//         coinprice: datum.price_change_24h,
//         coinpercentage: datum.price_change_percentage_24h
//       });

//       dataarray.sort((a, b) => b.coinpercentage - a.coinpercentage);
//     });

//     let datasliced = dataarray.slice(0, 3);

//     datasliced.forEach(gainersname => {
//       document.getElementById('nameplace').innerHTML +=  `
//         <li class="flexingnameandicon">
//           <img src="${gainersname.coinimg}" />
//           <span class="coinname">${gainersname.coinname}</span>
//         </li>
//       `;

//       let gainerspricepercent = gainersname.coinpercentage;

//       document.getElementById('priceandpercent').innerHTML +=   `
//         <span class="coinpricechanges">$${(gainersname.coinprice).toLocaleString()}${
//           gainerspricepercent > 0 
//             ? `<i class="bi bi-caret-up-fill">${gainersname.coinpercentage.toFixed(2)}%</i>` 
//             : `<i class="bi bi-caret-down-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
//         }</span> 
//       `;
//     });

//     let coinnumber = 1;

//     // Add chart data to each coin
//     for (let mainname of data) {

//       // Existing DOM updates
//       document.getElementById('maincoinlist').innerHTML += `
//         <li class="eachcoinprop">
//           <i class="fa-regular fa-star"></i> <span class="numlist">${coinnumber++}</span>
//           <span class="workon">
//             <img src="${mainname.image}" />
//             <span class="coinname">${mainname.name} <span class="symbol">${mainname.symbol.toUpperCase()}</span></span>
//           </span>
//         </li>
//       `;

//       document.getElementById('allprice').innerHTML += `
//         <li class="eachcoinprice">
//           $${mainname.current_price.toLocaleString()}
//         </li>
//       `;

//       let change = mainname.price_change_percentage_1h_in_currency;
//       document.getElementById('all1hour').innerHTML += `
//         <li class="eachcoin1hr">${
//           change != null
//             ? change > 0
//               ? `<i class="bi bi-caret-up-fill">${change.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;



    

      

//       // Other DOM updates...
//       let change24hr = mainname.market_cap_change_percentage_24h;
//       document.getElementById('all24hour').innerHTML += `
//         <li class="eachcoin24hr">${
//           change24hr != null
//             ? change24hr > 0
//               ? `<i class="bi bi-caret-up-fill">${change24hr.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change24hr.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       let change7days = mainname.price_change_percentage_7d_in_currency;
//       document.getElementById('all7days').innerHTML += `
//         <li class="eachcoin7days">${
//           change7days != null
//             ? change7days > 0
//               ? `<i class="bi bi-caret-up-fill">${change7days.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change7days.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       document.getElementById('all24hvol').innerHTML += `
//         <li class="each24hvol">
//           $${mainname.total_volume.toLocaleString()}
//         </li>
//       `;

//       document.getElementById('allmarketcap').innerHTML += `
//         <li class="eachmarketcap">
//           $${mainname.market_cap.toLocaleString()}
//         </li>
//       `;
//     }
//   })
//   .catch(err => console.error(err));
  

// let dataarray = []

// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h,24h,7d')

//   .then(res => res.json())
//   .then(async data => {
//     console.log(data);

//     let limited = data.slice(0,5)
//     console.log(limited)

//     const combinedData = await Promise.all(
//       limited.map(async(item)=>{
//         const api2 = await fetch(`https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`);
//         if(!api2.ok) {
//           console.log('i didnt fetch api2')
//           return null;
//         }
//         const data2 = await api2.json()

//         return{
//           coinapi :item,
//           chartapi:data2.prices
//         }
//       })
//     )

//     console.log('combined 1-1 data :',combinedData)


//     // Top gainers array
//         // data.forEach(datum => {
//         //   dataarray.push({
//         //     coinname: datum.id,
//         //     coinimg: datum.image,
//         //     coinprice: datum.price_change_24h,
//         //     coinpercentage: datum.price_change_percentage_24h
//         //   });

//         //   dataarray.sort((a, b) => b.coinpercentage - a.coinpercentage);
//         // });

//         data.forEach(datum => {
//   dataarray.push({
//     coinname: datum.id,
//     coinimg: datum.image,
//     coinprice: datum.price_change_24h,
//     coinpercentage: datum.price_change_percentage_24h
//   });
// });

// dataarray.sort((a, b) => b.coinpercentage - a.coinpercentage);

//     let datasliced = dataarray.slice(0, 3);

//     datasliced.forEach(gainersname => {
//       document.getElementById('nameplace').innerHTML +=  `
//         <li class="flexingnameandicon">
//           <img src="${gainersname.coinimg}" />
//           <span class="coinname">${gainersname.coinname}</span>
//         </li>
//       `;

//       let gainerspricepercent = gainersname.coinpercentage;

//       document.getElementById('priceandpercent').innerHTML +=   `
//         <span class="coinpricechanges">$${(gainersname.coinprice).toLocaleString()}${
//           gainerspricepercent > 0 
//             ? `<i class="bi bi-caret-up-fill">${gainersname.coinpercentage.toFixed(2)}%</i>` 
//             : `<i class="bi bi-caret-down-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
//         }</span> 
//       `;
//     });

//     let coinnumber = 1;

//     for (let mainname of data) {

//       document.getElementById('maincoinlist').innerHTML += `
//         <li class="eachcoinprop">
//           <i class="fa-regular fa-star"></i> <span class="numlist">${coinnumber++}</span>
//           <span class="workon">
//             <img src="${mainname.image}" />
//             <span class="coinname">${mainname.name} <span class="symbol">${mainname.symbol.toUpperCase()}</span></span>
//           </span>
//         </li>
//       `;

//       document.getElementById('allprice').innerHTML += `
//         <li class="eachcoinprice">
//           $${mainname.current_price.toLocaleString()}
//         </li>
//       `;

//       let change = mainname.price_change_percentage_1h_in_currency;
//       document.getElementById('all1hour').innerHTML += `
//         <li class="eachcoin1hr">${
//           change != null
//             ? change > 0
//               ? `<i class="bi bi-caret-up-fill">${change.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       let change24hr = mainname.market_cap_change_percentage_24h;
//       document.getElementById('all24hour').innerHTML += `
//         <li class="eachcoin24hr">${
//           change24hr != null
//             ? change24hr > 0
//               ? `<i class="bi bi-caret-up-fill">${change24hr.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change24hr.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       let change7days = mainname.price_change_percentage_7d_in_currency;
//       document.getElementById('all7days').innerHTML += `
//         <li class="eachcoin7days">${
//           change7days != null
//             ? change7days > 0
//               ? `<i class="bi bi-caret-up-fill">${change7days.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change7days.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       document.getElementById('all24hvol').innerHTML += `
//         <li class="each24hvol">
//           $${mainname.total_volume.toLocaleString()}
//         </li>
//       `;

//       document.getElementById('allmarketcap').innerHTML += `
//         <li class="eachmarketcap">
//           $${mainname.market_cap.toLocaleString()}
//         </li>
//       `;


//             document.getElementById('last7days').innerHTML += `
//             <canvas id="chart-${mainname.id}" width="100" height="40"></canvas>
//       `;
//     }

//   })
//   .catch(err => console.error(err));


// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h,24h,7d')
//   .then(res => res.json())
//   .then(async data => {
//     console.log(data);

//     let limited = data.slice(0,5);
//     console.log(limited);

//     const combinedData = await Promise.all(
//       limited.map(async(item)=>{
//         const api2 = await fetch(`https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`);
//         if(!api2.ok) {
//           console.log('i didnt fetch api2');
//           return null;
//         }
//         const data2 = await api2.json();

//         return{
//           coinapi :item,
//           chartapi:data2.prices
//         };
//       })
//     );

//     console.log('combined 1-1 data :',combinedData);

//     // Top gainers
//     data.forEach(datum => {
//       dataarray.push({
//         coinname: datum.id,
//         coinimg: datum.image,
//         coinprice: datum.price_change_24h,
//         coinpercentage: datum.price_change_percentage_24h
//       });
//     });

//     dataarray.sort((a, b) => b.coinpercentage - a.coinpercentage);

//     let datasliced = dataarray.slice(0, 3);  //sliced just to display just top 3 which is needed 

//     datasliced.forEach(gainersname => {  //displaying the top 3 which was sliced
//       document.getElementById('nameplace').innerHTML +=  `
//         <li class="flexingnameandicon">
//           <img src="${gainersname.coinimg}" />
//           <span class="coinname">${gainersname.coinname}</span>
//         </li>
//       `;

//       let gainerspricepercent = gainersname.coinpercentage; //getting the gainers percentage

//       document.getElementById('priceandpercent').innerHTML +=   `  
//         <span class="coinpricechanges">$${(gainersname.coinprice).toLocaleString()}${
//           gainerspricepercent > 0 
//             ? `<i class="bi bi-caret-up-fill">${gainersname.coinpercentage.toFixed(2)}%</i>` 
//             : `<i class="bi bi-caret-down-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
//         }</span> 
//       `;
//     });

    

//     let coinnumber = 1;  //the initial for each serial numberof each coin which will increase later on

//     for (let mainname of data) {   //want display each number,coinlogo(image) and coinname 

//       document.getElementById('maincoinlist').innerHTML += `
//         <li class="eachcoinprop">
//           <i class="fa-regular fa-star"></i> <span class="numlist">${coinnumber++}</span>
//           <span class="workon">
//             <img src="${mainname.image}" />
//             <span class="coinname">${mainname.name} <span class="symbol">${mainname.symbol.toUpperCase()}</span></span>
//           </span>
//         </li>
//       `;

//       // want to display each coin price
//       document.getElementById('allprice').innerHTML += `
//         <li class="eachcoinprice">
//           $${mainname.current_price.toLocaleString()}
//         </li>
//       `;

//       //about to display price percentage
//       let change = mainname.price_change_percentage_1h_in_currency;
//       document.getElementById('all1hour').innerHTML += `
//         <li class="eachcoin1hr">${
//           change != null
//             ? change > 0
//               ? `<i class="bi bi-caret-up-fill">${change.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       //display 24hr change
//       let change24hr = mainname.market_cap_change_percentage_24h;
//       document.getElementById('all24hour').innerHTML += `
//         <li class="eachcoin24hr">${
//           change24hr != null
//             ? change24hr > 0
//               ? `<i class="bi bi-caret-up-fill">${change24hr.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change24hr.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       //display 7days change
//       let change7days = mainname.price_change_percentage_7d_in_currency;
//       document.getElementById('all7days').innerHTML += `
//         <li class="eachcoin7days">${
//           change7days != null
//             ? change7days > 0
//               ? `<i class="bi bi-caret-up-fill">${change7days.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change7days.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       //24 hr volume
//       document.getElementById('all24hvol').innerHTML += `
//         <li class="each24hvol">
//           $${mainname.total_volume.toLocaleString()}
//         </li>
//       `;



//       //display each coin total market cap
//       document.getElementById('allmarketcap').innerHTML += `
//         <li class="eachmarketcap">
//           $${mainname.market_cap.toLocaleString()}
//         </li>
//       `;

//      //html for each 7days chart
//       document.getElementById('last7days').innerHTML += `
//         <canvas id="chart-${mainname.id}" width="100" height="40" style="background: purple;"></canvas>
        
       
//       `;

//       // MATCH CHART DATA
//       let match = combinedData.find(obj => obj && obj.coinapi.id === mainname.id);

//       if (match) {
//         let prices = match.chartapi;

//         let labels = prices.map(p => new Date(p[0]).toLocaleDateString());
//         let dataPoints = prices.map(p => p[1]);

//         let ctx = document.getElementById(`chart-${mainname.id}`).getContext('2d');

//         new Chart(ctx, {
//           type: 'line',
//           data: {
//             labels: labels,
//             datasets: [{
//               data: dataPoints,
//               borderWidth: 1,
//               tension: 0.3
//             }]
//           },
//           options: {
//             plugins: { legend: { display: false } },
//             scales: {
//               x: { display: false },
//               y: { display: false }
//             }
//           }
//         });
//       }else{console.log('no match na why i nor show ')}
//     }

//   })

//   .catch(err => console.error(err));




// let dataarray = [];

// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h,24h,7d')
//   .then(res => res.json())
//   .then(async data => {
//     console.log(data);

//     let limited = data.slice(0,5);
//     console.log(limited);

//     const combinedData = await Promise.all(
//       limited.map(async(item)=>{
//         const api2 = await fetch(`https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`);
//         if(!api2.ok) {
//           console.log('i didnt fetch api2');
//           return null;
//         }
//         const data2 = await api2.json();

//         return{
//           coinapi :item,
//           chartapi:data2.prices
//         };
//       })
//     );

//     console.log('combined 1-1 data :',combinedData);

//     // Top gainers
//     data.forEach(datum => {
//       dataarray.push({
//         coinname: datum.id,
//         coinimg: datum.image,
//         coinprice: datum.price_change_24h,
//         coinpercentage: datum.price_change_percentage_24h
//       });
//     });

//     dataarray.sort((a, b) => b.coinpercentage - a.coinpercentage);

//     let datasliced = dataarray.slice(0, 3);

//     datasliced.forEach(gainersname => {
//       document.getElementById('nameplace').innerHTML +=  `
//         <li class="flexingnameandicon">
//           <img src="${gainersname.coinimg}" />
//           <span class="coinname">${gainersname.coinname}</span>
//         </li>
//       `;

//       let gainerspricepercent = gainersname.coinpercentage;

//       document.getElementById('priceandpercent').innerHTML +=   `  
//         <span class="coinpricechanges">$${(gainersname.coinprice).toLocaleString()}${
//           gainerspricepercent > 0 
//             ? `<i class="bi bi-caret-up-fill">${gainersname.coinpercentage.toFixed(2)}%</i>` 
//             : `<i class="bi bi-caret-down-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
//         }</span> 
//       `;
//     });

//     let coinnumber = 1;

//     // ✅ FIXED: only loop limited (5 coins)
//     for (let mainname of limited) {

//       document.getElementById('maincoinlist').innerHTML += `
//         <li class="eachcoinprop">
//           <i class="fa-regular fa-star"></i> <span class="numlist">${coinnumber++}</span>
//           <span class="workon">
//             <img src="${mainname.image}" />
//             <span class="coinname">${mainname.name} <span class="symbol">${mainname.symbol.toUpperCase()}</span></span>
//           </span>
//         </li>
//       `;

//       document.getElementById('allprice').innerHTML += `
//         <li class="eachcoinprice">
//           $${mainname.current_price.toLocaleString()}
//         </li>
//       `;

//       let change = mainname.price_change_percentage_1h_in_currency;
//       document.getElementById('all1hour').innerHTML += `
//         <li class="eachcoin1hr">${
//           change != null
//             ? change > 0
//               ? `<i class="bi bi-caret-up-fill">${change.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       let change24hr = mainname.market_cap_change_percentage_24h;
//       document.getElementById('all24hour').innerHTML += `
//         <li class="eachcoin24hr">${
//           change24hr != null
//             ? change24hr > 0
//               ? `<i class="bi bi-caret-up-fill">${change24hr.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change24hr.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       let change7days = mainname.price_change_percentage_7d_in_currency;
//       document.getElementById('all7days').innerHTML += `
//         <li class="eachcoin7days">${
//           change7days != null
//             ? change7days > 0
//               ? `<i class="bi bi-caret-up-fill">${change7days.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change7days.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       document.getElementById('all24hvol').innerHTML += `
//         <li class="each24hvol">
//           $${mainname.total_volume.toLocaleString()}
//         </li>
//       `;

//       document.getElementById('allmarketcap').innerHTML += `
//         <li class="eachmarketcap">
//           $${mainname.market_cap.toLocaleString()}
//         </li>
//       `;

//       // chart canvas
//       document.getElementById('last7days').innerHTML += `
//         <canvas id="chart-${mainname.id}" width="100" height="40" ; class="eachchart"></canvas>
//       `;

//       // match chart data
//       // let match = combinedData.find(obj => obj && obj.coinapi.id === mainname.id);
      
//       let match = cleanedData.find(obj => obj.coinapi.id === mainname.id);
//       // const cleanData = combinedData.filter(Boolean)
//       if (!match) continue; // ✅ FIX

//       // let prices = match.chartapi;
//       let prices = match.chartapi.slice(0, 50);

//       // let labels = prices.map(p => new Date(p[0]).toLocaleDateString());
//       labels = prices.map((_, i) => i);
//       let dataPoints = prices.map(p => p[1]);

//       let ctx = document.getElementById(`chart-${mainname.id}`).getContext('2d');

//       new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: labels,
//           datasets: [{
//             data: dataPoints,
//             borderWidth: 2,
//             tension: 0.3,
//             borderColor: '#00ff88',
// backgroundColor: 'transparent',
// fill: false,
//             pointRadius:0
//           }]
//         },
//         options: {
//           plugins: { legend: { display: false } },
//           scales: {
//             x: { display: false },
//             y: { display: false ,beginAtZero:false}
//           }
//         }
//       });
//     }

//   })
//   .catch(err => console.error(err));

let dataarray = [];

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h,24h,7d')
  .then(res => res.json())
  .then(async data => {
    console.log(data);

    let limited = data.slice(0,5);
    console.log(limited);

    const combinedData = await Promise.all(
      limited.map(async (item) => {
        const api2 = await fetch(`https://api.coingecko.com/api/v3/coins/${item.id}/market_chart?vs_currency=usd&days=7`);
        if (!api2.ok) {
          console.log('i didnt fetch api2');
          return null;
        }

        const data2 = await api2.json();

        // console.log(data2.prices)

        return {
          coinapi: item,
          chartapi: data2.prices
        };
      })
    
    );

    

    //define cleanedData (YOU WERE MISSING THIS)
    const cleanedData = combinedData.filter(Boolean);

    console.log('combined 1-1 data :', cleanedData);

    // Top gainers
    data.forEach(datum => {
      dataarray.push({
        coinname: datum.id,
        coinimg: datum.image,
        coinprice: datum.price_change_24h,
        coinpercentage: datum.price_change_percentage_24h
      });
    });

    dataarray.sort((a, b) => b.coinpercentage - a.coinpercentage);

    let datasliced = dataarray.slice(0, 3);

    datasliced.forEach(gainersname => {
      document.getElementById('nameplace').innerHTML += `
        <li class="flexingnameandicon">
          <img src="${gainersname.coinimg}" />
          <span class="coinname">${gainersname.coinname}</span>
        </li>
      `;

      let gainerspricepercent = gainersname.coinpercentage;

      document.getElementById('priceandpercent').innerHTML += `
        <span class="coinpricechanges">$${gainersname.coinprice.toLocaleString()}${
          gainerspricepercent > 0
            ? `<i class="bi bi-caret-up-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
            : `<i class="bi bi-caret-down-fill">${gainersname.coinpercentage.toFixed(2)}%</i>`
        }</span>
      `;
    });

    let coinnumber = 1;

    for (let mainname of limited) {


  let change = mainname.price_change_percentage_1h_in_currency;
  let change24hr = mainname.market_cap_change_percentage_24h;
  let change7days = mainname.price_change_percentage_7d_in_currency;
  document.getElementById('tablebody').innerHTML += `
    <tr>
      <td><i class="fa-regular fa-star"></i> ${coinnumber++}</td>
      <td><span class="workon">
            <img src="${mainname.image}" />
            <span class="coinname">${mainname.name}
              <span class="symbol">${mainname.symbol.toUpperCase()}</span>
            </span>
          </span></td>
          <td> $${mainname.current_price.toLocaleString()}</td>

          <td> ${
          change != null
            ? change > 0
              ? `<i class="bi bi-caret-up-fill">${change.toFixed(1)}%</i>`
              : `<i class="bi bi-caret-down-fill">${change.toFixed(1)}%</i>`
            : `<i class="bi bi-dash">N/A</i>`
        }</td>

        <td>${
          change24hr != null
            ? change24hr > 0
              ? `<i class="bi bi-caret-up-fill">${change24hr.toFixed(1)}%</i>`
              : `<i class="bi bi-caret-down-fill">${change24hr.toFixed(1)}%</i>`
            : `<i class="bi bi-dash">N/A</i>`
        }</td>

        <td>${
          change7days != null
            ? change7days > 0
              ? `<i class="bi bi-caret-up-fill">${change7days.toFixed(1)}%</i>`
              : `<i class="bi bi-caret-down-fill">${change7days.toFixed(1)}%</i>`
            : `<i class="bi bi-dash">N/A</i>`
        }</td>

        <td>$${mainname.total_volume.toLocaleString()}</td>

        <td>$${mainname.market_cap.toLocaleString()}</td>

        <td><canvas id="chart-${mainname.id}" width="100" height="40" class="eachchart"></canvas></td>

        
    </tr>

      
      
    
  `;
  
//       document.getElementById('maincoinlist').innerHTML += `
//         <li class="eachcoinprop">
//           <i class="fa-regular fa-star"></i>
//           <span class="numlist">${coinnumber++}</span>
//           <span class="workon">
//             <img src="${mainname.image}" />
//             <span class="coinname">${mainname.name}
//               <span class="symbol">${mainname.symbol.toUpperCase()}</span>
//             </span>
//           </span>
//         </li>
//       `;

//       document.getElementById('allprice').innerHTML += `
//         <li class="eachcoinprice">
//           $${mainname.current_price.toLocaleString()}
//         </li>
//       `;

//       // let change = mainname.price_change_percentage_1h_in_currency;
//       document.getElementById('all1hour').innerHTML += `
//         <li class="eachcoin1hr">${
//           change != null
//             ? change > 0
//               ? `<i class="bi bi-caret-up-fill">${change.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       // let change24hr = mainname.market_cap_change_percentage_24h;
//       document.getElementById('all24hour').innerHTML += `
//         <li class="eachcoin24hr">${
//           change24hr != null
//             ? change24hr > 0
//               ? `<i class="bi bi-caret-up-fill">${change24hr.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change24hr.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       // let change7days = mainname.price_change_percentage_7d_in_currency;
//       document.getElementById('all7days').innerHTML += `
//         <li class="eachcoin7days">${
//           change7days != null
//             ? change7days > 0
//               ? `<i class="bi bi-caret-up-fill">${change7days.toFixed(1)}%</i>`
//               : `<i class="bi bi-caret-down-fill">${change7days.toFixed(1)}%</i>`
//             : `<i class="bi bi-dash">N/A</i>`
//         }</li>
//       `;

//       document.getElementById('all24hvol').innerHTML += `
//         <li class="each24hvol">
//           $${mainname.total_volume.toLocaleString()}
//         </li>
//       `;

//       document.getElementById('allmarketcap').innerHTML += `
//         <li class="eachmarketcap">
//           $${mainname.market_cap.toLocaleString()}
//         </li>
//       `;

//       // chart canvas
// document.getElementById('last7days').insertAdjacentHTML('beforeend', `
//   <canvas id="chart-${mainname.id}" width="100" height="40" class="eachchart"></canvas>
// `);

      // match chart data
      let match = cleanedData.find(obj => obj.coinapi.id === mainname.id);
      if (!match) continue;

      let prices = match.chartapi.slice(0, 50);

      // proper declaration
      let labels = prices.map((_, i) => i);
      let dataPoints = prices.map(p => p[1]);

      let ctx = document.getElementById(`chart-${mainname.id}`).getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            data: dataPoints,
            borderWidth: 2,
            tension: 0.3,
            borderColor: 'green',
            backgroundColor: 'transparent',
            fill: false,
            pointRadius: 0
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },  
            y: { display: false, beginAtZero: false }
          }
        }
      });
    }

  })
  .catch(err => console.error(err));
