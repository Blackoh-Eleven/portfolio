// let nums = 2565854645;
// console.log(nums.toString())

// let numstr = nums.toString()

// let short = (numstr/1e9).toFixed(3)
// // console.log(numstr.slice(0,3))

//  const apiKey = "CG-M64VHYTiBjBmiaia8xqJtU1q";
// fetch('https://api.coingecko.com/api/v3/search/trending')
//   .then(res => res.json())
//   .then(data => {
//     // console.log(data);

//     let coins = data.coins.slice(0,3);
//     // console.log(coins)


//     coins.forEach(coin=>{
//         coin = coin.item
//         console.log(coin)


//         // document.getElementById('testing').innerHTML += `<li class="flexing">${coin.name} <img src="${coin.small}" /> <span>$${(coin.data.price).toFixed(2)}</span></li>`
//         document.getElementById('testing').innerHTML += `
        
        
//         <li class="flexing">${coin.name} <img src="${coin.small}" /> <span>$${(coin.data.price).toFixed(2)}</span></li>`
//     })



//     // coins.forEach(coin => {
//     //   console.log(coin.item.name, coin.item.price_btc);
//     // });
//   });




  // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
  // .then(res => res.json())
  // .then(marketData => {
  //   console.log(marketData);
  // });


































//   Promise.all([
//   fetch('https://api.coingecko.com/api/v3/search/trending').then(res => res.json()),
//   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin').then(res => res.json())
// ])
// .then(([trendingData, marketData]) => {

//   let coins = trendingData.coins.slice(0,3);

//   coins.forEach(coin => {
//     coin = coin.item;

//     // find matching market data
//     let market = marketData.find(m => m.id === coin.id);

//     let price = market ? market.current_price : 0;



//     document.getElementById('testing').innerHTML += `
//       <li class="flexingnameandicon">
//         <span class="coinprice">$${price}</span>
//       </li>
//     `;
//   });

// });


let allnums = [2,3,4,22,1,0,5,6,,1,12,31,13,15,99,7,18,51]

// for (let i =allnums.length;i<0;i++){
  // console.log(allnums[i])
// }


  