let bars = document.getElementById('bars')
let allbars = window.getComputedStyle(bars)

let navs = document.getElementById('nav')
let allnavs = window.getComputedStyle(navs)


function showmenu(){
    // console.log(allbars.display)
    // allnavs.style.display = 'block'
    // console.log(allnavs.display)

    if(allbars.display === 'block'){
        bars.style.display = 'flex'
        navs.style.display = 'grid'
        bars.classList.remove('fa-bars')
        bars.classList.add('fa-x')
    }else if(allbars.display === 'flex'){
        bars.style.display = 'block'
        navs.style.display = 'none'
        bars.classList.remove('fa-x')
        bars.classList.add('fa-bars')
    }
}