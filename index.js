    let ulbar = document.getElementById('nav')
   let bars =  document.getElementById('bars')
   let cancel = document.getElementById('cancel')
function showmenu(){

    ulbar.style.left = '-20px'
    cancel.style.display = 'block'
    bars.style.display = 'none'
}

function hidemenu(){
    ulbar.style.left = '2000px'
    bars.style.display = 'block'
    cancel.style.display = 'none'
}

let possibilities = ['HTML','CSS','JavaScript','React']

let space = document.getElementById('changingspace')

let i =0 
let count = 0;

 setInterval(() => {

    space.style.opacity = 0;


     if (i < possibilities.length){
   let gorro = possibilities[count++]

   if(count === 4){
    count = 0;    
   }
       setTimeout(()=>{
        space.style.opacity =1
           document.getElementById('changingspace').textContent = gorro
    },600)

    // console.log(gorro)
    // console.log(count)
}
}, 2000);


