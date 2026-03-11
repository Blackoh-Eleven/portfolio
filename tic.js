    let gridOne  = document.getElementById('cell1')
    let gridTwo = document.getElementById('cell2')
    let gridThree = document.getElementById('cell3')
    let gridFour = document.getElementById('cell4')
    let gridFive = document.getElementById('cell5')
    let gridSix = document.getElementById('cell6')
    let gridSeven = document.getElementById('cell7')
    let gridEight = document.getElementById('cell8')
    let gridNine = document.getElementById('cell9')
    let container = document.getElementById('container')

    let allboard = document.getElementById('board')
    let btn = document.getElementById('btn')

    let picked = []
    let mypick = []
    let computerpick = []
    let  result = ''
    let currentstatus = ''



    let all =[gridOne ,gridTwo,gridThree,gridFour,gridFive,gridSix,gridSeven,gridEight,gridNine]

    for(let i = all.length-1;i>0;i--){

        let j = Math.floor(Math.random() *(i+1) )

        let save = all[i]
        all[i] = all[j]
        all[j] = save
    }

    let count = 0



//     allboard.addEventListener('click',function(e){

       




//         let available = all.filter(item =>!picked.includes(item)) //filter.picked ones out and leaves behind the ones unpicked


 
//              if(available.length >0){
//         console.log(available)
//         let popped =available.pop()
//         let computerpick = popped
//         picked.push(popped)
//         computerpick.textContent = 'X'
//         computerpick.style.color = 'red'
// }

//     })




  







      function allboards(e){
         if(e.target.classList.contains('cell')){
        if (!picked.includes(e.target)){
            picked.push(e.target)
            e.target.textContent = "O"
            e.target.style.color = 'greenyellow'
            mypick.push(e.target)

            let available = all.filter(item =>!picked.includes(item))
                 if(available.length >0){
        console.log(available)
        let popped =available.pop()
        let computerpick = popped
        picked.push(popped)
        computerpick.textContent = 'X'
        computerpick.style.color = 'red'
}

   
        }else{
            console.log('alreadypicked')
        }
    
    }
    }
