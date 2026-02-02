let navs = document.getElementById('navlinks')
let allnavs = window.getComputedStyle(navs)
let bars = document.getElementById('bars')
let allbars = window.getComputedStyle(bars)
let cross = document.getElementById('cross')
let allcross = window.getComputedStyle(cross)

document.getElementById("bars").addEventListener('click',function(){
    console.log('working')

    if(allnavs.display === 'none' || cross.display === 'none'){
        navs.style.display ='block'
        bars.style.display = 'none'
        cross.style.display = 'block'
    }
})

document.getElementById('cross').addEventListener('click',function (){
     if (allnavs.display === 'block' || cross.display === 'block'){
        navs.style.display = 'none'
        bars.style.display = 'block'
        cross.style.display = 'none'
    }
})



let generateAll = document.getElementById('generate_all_button').addEventListener('click',function generateAll(){
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

let newChar = splittedCombined.join('')
let charsli = newChar.slice(0,7)
document.getElementById('passwordOutput').innerHTML = charsli
console.log(charsli)
})

//for elimination of numbers button

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
        console.log(arrsli)

        let shuffling_Alternative = 'ABCDEFabcdef'
        let shuffling_Alternative_tosplit = shuffling_Alternative.split('')

        for (let i = shuffling_Alternative_tosplit.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffling_Alternative_tosplit[i], shuffling_Alternative_tosplit[j]] = [shuffling_Alternative_tosplit[j], shuffling_Alternative_tosplit[i]];
        }
        let shuffling_Alternative_tojoin = shuffling_Alternative_tosplit.join('')
       
        let finale_charac_needed = shuffling_Alternative_tojoin.slice(0,1)
        console.log(finale_charac_needed)


let str = arrsli
// let numstr = ''



let result =''

for (let char of str) {
if (char >= '0' && char <= '9'){ ////.trim()
    result += finale_charac_needed
}else{
  result += char
}
}
document.getElementById('passwordOutput').innerHTML = result
console.log(result);
})

//for eliminate lowercase button

let eliminatelowercase = document.getElementById('eliminate-lowerCase').
addEventListener('click' , function lowerCase(){

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
    document.getElementById('passwordOutput').innerHTML = charactersNeeded
    console.log(charactersNeeded)
    } )

    //for eliminate uppercase button

    let eliminateuppercase = document.getElementById('eliminate-UpperCase')
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
    
    let splittedResultToUpperCase = splittedCombined.join('').toUpperCase()  //locale uppercase
    
    let charactersNeeded = splittedResultToUpperCase.slice(0,7)
    document.getElementById('passwordOutput').innerHTML = charactersNeeded
    console.log(charactersNeeded)
    } )

    function copyToClipBoard(){
        const copyText = document.getElementById('passwordOutput').innerText;
        console.log(copyText)

        navigator.clipboard.writeText(copyText)
    }
   