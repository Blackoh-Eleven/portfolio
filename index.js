    let ulbar = document.getElementById('nav')
    let allnav = window.getComputedStyle(ulbar)
   let bars =  document.getElementById('bars')
   let cancel = document.getElementById('cancel')

   
function showmenu(){
    if (allnav.display === 'none'){
        ulbar.style.display = 'flex'
        bars.classList.remove("fa-bars")
        bars.classList.add("fa-x")
    }else if(allnav.display ==='flex'){
        ulbar.style.display = 'none'
        bars.classList.remove("fa-x")
        bars.classList.add("fa-bars")
    }
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


}
}, 2000);


