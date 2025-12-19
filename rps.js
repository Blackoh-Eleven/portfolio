let computermove = ''
let result = ''
let judge = ''
let score = 0


    function generate(){
        let randomnum = Math.random()
    console.log(randomnum)

    if(randomnum >= 0 && randomnum <1/3){
        computermove = 'Rock'
    } else if (randomnum >=1/3 && randomnum <2/3){
        computermove = 'Paper'
    }else if (randomnum >=2/3 && randomnum <=3/3){
        computermove = 'Scissors'
    }
}




document.getElementById('rock').addEventListener('click',function(){

    generate()

           if(computermove === 'Rock'){
        result = 'you tie'
        
    }else if (computermove === 'Paper'){
        result = 'You Lose'

    }else if (computermove === 'Scissors'){
        result = 'You Win'
    }

    // for scores
    if(result === 'You Win'){
        score++
        document.getElementById('scores').textContent = `Score: ${score}`
    }
    // for display
     judge = `you picked rock ,computer picked ${computermove} you ${result}`
    document.getElementById('pick').textContent = judge
    
})



document.getElementById('paper').addEventListener('click',function(){
    generate()


           if(computermove === 'Rock'){
        result = 'You Win'
        
    }else if (computermove === 'Paper'){
        result = 'You Tie'

    }else if (computermove === 'Scissors'){
        result = 'You Lose'
    }

    // for the score
        if(result === 'You Win'){
        score++
        document.getElementById('scores').textContent = `Score: ${score}`
    }

    // for display
    judge = `you picked Paper ,computer picked ${computermove} you ${result}`
    document.getElementById('pick').textContent = judge
})

document.getElementById('scissors').addEventListener('click',function(){
    generate()


           if(computermove === 'Rock'){
        result = 'you Lose'
        
    }else if (computermove === 'Paper'){
        result = 'You Win'

    }else if (computermove === 'Scissors'){
        result = 'You Tie'
    }

    // for score
            if(result === 'You Win'){
        score++
        document.getElementById('scores').textContent = `Score: ${score}`
    }

    // for display
         judge = `you picked Scissors ,computer picked ${computermove} you ${result}`
    document.getElementById('pick').textContent = judge
})


