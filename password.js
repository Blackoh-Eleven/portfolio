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

    // console.log(allbuttin.display)


if(allbuttin.display === 'none'){
    // console.log(2)
    buttin.style.display = 'flex'
    gene.style.display = 'none'
}
}


        // const projects = document.querySelectorAll('.box , .skills-container')

        // const observer = new IntersectionObserver(entries=> {
        //     entries.forEach(entry=>{
        //         if (entry.isIntersecting){
        //             entry.target.classList.add('show');
        //             observer.observe(entry.target);
        //         }
        //     })
        // })

        // projects.forEach(project=>observer.observe(project));



// for Generate All 

let generateAll = document.getElementById('generate_all_button').addEventListener('click',function generateAll(){
    let passWord = {
    numbers : 1234567890,
    Upper : ['ABCDEFGHIJ'],
    lower : 'abcdefghij'
}
let combined = passWord.numbers.toString() + passWord.Upper + passWord.lower


let splittedCombined = combined.split('')
// console.log(splittedCombined)



for (let i = splittedCombined.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [splittedCombined[i], splittedCombined[j]] = [splittedCombined[j], splittedCombined[i]];
}

let newChar = splittedCombined.join('')

// console.log(newChar)
let charsli = newChar.slice(0,7)
document.getElementById('passwordOutput').value = charsli
console.log(charsli)
})





// for removing  lowercase 

let eliminateuppercase = document.getElementById('eliminate-lowerCase')
    .addEventListener('click', function upperCase(){

        let passWord = {
            numbers : 1234567890,
            Upper : ['ABCDEFGHIJ'],
            lower : 'abcdefghij'
        }
        let combined = passWord.numbers.toString() + passWord.Upper + passWord.lower
        
        
        let splittedCombined = combined.split('')
        
        
        
        for (let i = splittedCombined.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [splittedCombined[i], splittedCombined[j]] = [splittedCombined[j], splittedCombined[i]];
        }
    
    let splittedResultToUpperCase = splittedCombined.join('').toUpperCase()  
    
    let charactersNeeded = splittedResultToUpperCase.slice(0,7)
    document.getElementById('passwordOutput').value = charactersNeeded
    console.log(charactersNeeded)
    } )


// for removing uppercase
let eliminatelowercase = document.getElementById('eliminate-UpperCase').addEventListener('click' , function lowerCase(){

    let passWord = {
        numbers : 1234567890,
        Upper : ['ABCDEFGHIJ'],
        lower : 'abcdefghij'
    }
    let combined = passWord.numbers.toString() + passWord.Upper + passWord.lower
    
    
    let splittedCombined = combined.split('')
    
    
    
    for (let i = splittedCombined.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [splittedCombined[i], splittedCombined[j]] = [splittedCombined[j], splittedCombined[i]];
    }

    let eliminateUpperCase = splittedCombined.join('').toLowerCase()
    let charactersNeeded = eliminateUpperCase.slice(0,7)
    document.getElementById('passwordOutput').value = charactersNeeded
    console.log(charactersNeeded)
    } )



    // for removing numbers 

    let eliminatenums = document.getElementById('eliminate-numbers').addEventListener('click' , function removeAndReplaceNumbers(){

    let passWord = {
        numbers : 1234567890,
        Upper : ['ABCDEFGHIJ'],
        lower : 'abcdefghij'
    }
    let combined = passWord.numbers.toString() + passWord.Upper + passWord.lower
    
    
    let splittedCombined = combined.split('')
    
    
    
    for (let i = splittedCombined.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [splittedCombined[i], splittedCombined[j]] = [splittedCombined[j], splittedCombined[i]];
    }
    
let arrjoin = splittedCombined.join('')
        let arrsli = arrjoin.slice(0,7)
        // console.log(arrsli)

        let shuffling_Alternative = 'ABCDEFabcdef'
        let shuffling_Alternative_tosplit = shuffling_Alternative.split('')

        for (let i = shuffling_Alternative_tosplit.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffling_Alternative_tosplit[i], shuffling_Alternative_tosplit[j]] = [shuffling_Alternative_tosplit[j], shuffling_Alternative_tosplit[i]];
        }
        let shuffling_Alternative_tojoin = shuffling_Alternative_tosplit.join('')
        // console.log(shuffling_Alternative_tojoin)
       
        let finale_charac_needed = shuffling_Alternative_tojoin.slice(0,1)
        console.log(finale_charac_needed)


let str = arrsli     

let result =''

for (let char of str) {
if (char >= '0' && char <= '9'){ ////.trim()
    result += finale_charac_needed
}else{
  result += char
}
}
document.getElementById('passwordOutput').value = result
console.log(result);
})



// copy btn

    function copyToClipBoard(){
        const copyText = document.getElementById('passwordOutput').value;
        console.log(copyText)

        navigator.clipboard.writeText(copyText)
    }

