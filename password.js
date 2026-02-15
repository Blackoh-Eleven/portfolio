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



// document.getElementById('.generation').addEventListener("click",function(){

//     console.log('yeaah')
// })








let gene = document.getElementById('generation')
allgene = window.getComputedStyle(gene)


function boro(){
    // console.log('im working')

    let buttin =  document.getElementById('btn')

    let allbuttin = window.getComputedStyle(buttin)

    console.log(allbuttin.display)


if(allbuttin.display === 'none'){
    // console.log(2)
    buttin.style.display = 'flex'
    gene.style.display = 'none'
}
}


        const projects = document.querySelectorAll('.box , .skills-container')

        const observer = new IntersectionObserver(entries=> {
            entries.forEach(entry=>{
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                    observer.observe(entry.target);
                }
            })
        })

        projects.forEach(project=>observer.observe(project));