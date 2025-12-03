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