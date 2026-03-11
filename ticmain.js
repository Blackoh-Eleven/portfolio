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



    allboard.addEventListener('click',function(e){
        if(e.target.classList.contains('cell')){



        if (!picked.includes(e.target)){
            picked.push(e.target)
            e.target.textContent = "O"
            e.target.style.color = 'greenyellow'
            // console.log(e.target)
            
            mypick.push(e.target)
            console.log(mypick)

            // mypick.forEach(eachpick => {
            //     currentstatus= 'ongreen'
            //     console.log(currentstatus)
            // });

            // if(mypick.includes(gridTwo,gridFive,gridEight)){
            //     console.log('you get idea')
            // }

            // outcomes

                // outcome1
                if(gridOne.textContent === 'O' &&
                    gridTwo.textContent ==='O' &&
                    gridThree.textContent === 'O'
                ){
                result = 'YOU WIN'
                container.innerHTML = `<h1 >GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
                // outcome2
            }else if(gridFour.textContent === 'O' &&
                    gridFive.textContent ==='O' &&
                    gridSix.textContent === 'O'
                ){
                
                result = 'YOU WIN'
                container.innerHTML = `<h1 >GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
                // outcome3
            }else if (gridSeven.textContent === 'O' &&
                    gridEight.textContent ==='O' &&
                    gridNine.textContent === 'O'
                ){
                
                result = 'YOU WIN'
                container.innerHTML = `<h1>GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
                // outcome4
            }else if(gridOne.textContent === 'O' &&
                    gridFour.textContent ==='O' &&
                    gridSeven.textContent === 'O'
                ){
                
                result = 'YOU WIN'
                container.innerHTML = `<h1 >GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
                // outcome5
            }else if (gridTwo.textContent === 'O' &&
                    gridFive.textContent ==='O' &&
                    gridEight.textContent === 'O'
                ){
                
                result = 'YOU WIN'
                container.innerHTML = `<h1 >GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
            }else if (gridThree.textContent === 'O' &&
                    gridSix.textContent === 'O' &&
                    gridNine.textContent === 'O' 
            ){
                result = 'YOU WIN'
                container.innerHTML = `<h1 >GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
                // outcome6
            }else if (gridOne.textContent === 'O' &&
                    gridFive.textContent === 'O' &&
                    gridNine.textContent === 'O' 
            ){
                result = 'YOU WIN'
                container.innerHTML = `<h1 >GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
                // outcome7
            }else if (gridThree.textContent === 'O' &&
                  gridFive.textContent === 'O' &&
                  gridSeven.textContent === 'O' 
        ){
                result = 'YOU WIN'
                container.innerHTML = `<h1 >GAME OVER</h1>
                <h3>${result}</h3>`
                btn.style.display = 'block'
        }else if (result = '' && btn.style.display ==='none'){
            console.log('see rubish')
        }





        // for the computer move

        
        if(mypick.length >4 && result === ''){
            console.log('draw')
             setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>DRAW</h3>`
                   btn.style.display = 'block'
                },1000)
        }

        // console.log(!picked.includes(e.target))

        // if(mypick.includes(e.target)){

             let available = all.filter(item =>!picked.includes(item)) //filter.picked ones out and leaves behind the ones unpicked
    console.log(available)



    if(available.length >0){
        // console.log(available)
        let popped =available.pop()
        let computerpick = popped
        picked.push(popped)
        computerpick.textContent = 'X'
        computerpick.style.color = 'red'


    // if(e.target.textContent !== 'O'){

        // }










                        if(gridOne.textContent === 'X' &&
                    gridTwo.textContent ==='X' &&
                    gridThree.textContent === 'X'
                ){
                setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                },1000)

                // outcome2
            }else if(gridFour.textContent === 'X' &&
                    gridFive.textContent ==='X' &&
                    gridSix.textContent === 'X'
                ){
                    setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                },1000)
                // outcome3
            }else if (gridSeven.textContent === 'X' &&
                    gridEight.textContent ==='X' &&
                    gridNine.textContent === 'X'
                ){
                
                setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                },1000)
                // outcome4
            }else if(gridOne.textContent === 'X' &&
                    gridFour.textContent ==='X' &&
                    gridSeven.textContent === 'X'
                ){
                
                    setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                 },1000)
                // outcome5
            }else if (gridTwo.textContent === 'X' &&
                    gridFive.textContent ==='X' &&
                    gridEight.textContent === 'X'
                ){
                
                       setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                },1000)
            }else if (gridThree.textContent === 'X' &&
                    gridSix.textContent === 'X' &&
                    gridNine.textContent === 'X' 
            ){
                 setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                },1000)
                // outcome6
            }else if (gridOne.textContent === 'X' &&
                    gridFive.textContent === 'X' &&
                    gridNine.textContent === 'X' 
            ){
             setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                },1000)
                // outcome7
            }else if (gridThree.textContent === 'X' &&
                  gridFive.textContent === 'X' &&
                  gridSeven.textContent === 'X' 
        ){
                         setTimeout(()=>{
                    container.innerHTML = `<h1 >GAME OVER</h1>
                   <h3>You LOSE</h3>`
                   btn.style.display = 'block'
                },1000)
        }
        }













            //    


            // e.target.style.background = 'green'
            // e.target.style.background = 'transparent'
            // console.log(picked)
        }else{
          console.log('already picked')
        }
    
        }






   



        // console.log(mypick.length)










    

    // if()




    })







 let setbox = document.getElementById('settingsbox')
 let setboxes = window.getComputedStyle(setbox)

//  console.log(setboxes)
 


document.getElementById('settings').addEventListener('click',function(){
  
   console.log(setboxes.display)

   if(setboxes.display === 'none'){
    console.log('almost')
    setbox.style.display = 'grid'
   }else{setbox.style.display = 'none'}
})








































    // let gridOne  = document.getElementById('grid1')
    // let gridTwo = document.getElementById('grid2')
    // let gridThree = document.getElementById('grid3')
    // let gridFour = document.getElementById('grid4')
    // let gridFive = document.getElementById('grid5')
    // let gridSix = document.getElementById('grid6')
    // let gridSeven = document.getElementById('grid7')
    // let gridEight = document.getElementById('grid8')
    // let gridNine = document.getElementById('grid9')

    // let picked = []


    // let all =[gridOne ,gridTwo,gridThree,gridFour,gridFive,gridSix,gridSeven,gridEight,gridNine]

    // for(let i = all.length-1;i>0;i--){

    //     let j = Math.floor(Math.random() *(i+1) )

    //     let save = all[i]
    //     all[i] = all[j]
    //     all[j] = save
    // }

    // let count = 0



    // document.body.addEventListener('click',function(e){
    //     if(e.target.classList.contains('ticgrid')){



    //        if (!picked.includes(e.target)){
    //         picked.push(e.target)
    //         e.target.textContent = "picked"
    //         e.target.style.background = 'green'
    //         // console.log(picked)
    //        }else{console.log('alreadypicked');}


    
    //     }

    //     // console.log(!picked.includes(e.target))

    // let available = all.filter(item =>!picked.includes(item)) //filter.picked ones out and leaves behind the ones unpicked



    // if(available.length >0){
    //     // console.log(available)
    //     let popped =available.pop()
    //     let computerpick = popped
    //     picked.push(popped)
    //     computerpick.textContent = 'computer'
    //     computerpick.style.background = 'red'
    //     // console.log(popped)
    //     console.log(available)
    //     console.log(computerpick)
    // }






    // })
