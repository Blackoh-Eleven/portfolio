let greenish = document.getElementById('moving')
let greenishstyle = window.getComputedStyle(greenish)
let greenvalue = greenish.style.width
let span1 = document.getElementById('span1')
let span2 = document.getElementById('span2')
let span3 = document.getElementById('span3')
let alldot = [span1,span2,span3]

let loadingindex = 0
let loadingcolorindex = 0

count = 0




let currentdot = setInterval(()=>{

    alldot.forEach((dot)=>{
        dot.style.color = ''
        // console.log(dot.style.color)
    })


    // console.log(alldot[2].style.color)
    alldot[loadingcolorindex].style.color = '#2e7d32';
    loadingcolorindex++ 

    console.log(loadingcolorindex)

    if(loadingcolorindex >= 3){
        loadingcolorindex = 0   
    }
},1000)

// for green moving 
 let timer = setInterval(()=>{

   let all =  greenish.style.width = count++ +'%';

   if(count == 101){
    console.log('i don catch am')
    count = clearInterval(timer)
    clearInterval(currentdot)
    // document.getElementById('loading').textContent = 'Done'
    document.getElementById('loading').innerHTML = `<button class="start-btn" onclick="window.location.href='ticmain.html'" >Start</button>`
   }


},100)