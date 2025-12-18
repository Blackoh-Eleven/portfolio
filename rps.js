let computermove = ''
let result = ''

function setcomputermove(){
    let randomnum = Math.random()
    console.log(randomnum)

    if(randomnum >= 0 && randomnum <1/3){
        computermove = 'Rock'
        console.log(computermove)
    } else if (randomnum >=1/3 && randomnum <2/3){
        computermove = 'Paper'
    }else if (randomnum >=2/3 && randomnum <=3/3){
        computermove = 'Scissors'
    }

    console.log(computermove)
}

setcomputermove()

document.getElementById('rock').addEventListener('click',function(){
    if(computermove === 'Rock'){
        result = 'you tie'
        
    }else if (computermove === 'Paper'){
        result = 'You Lose'

    }else if (computermove === 'Scissors'){
        result = 'You Win'
    }

    console.log(`you picked rock ,computer picked ${computermove} you ${result}`)
    document.getElementById('pick').textContent = `you picked rock ,computer picked ${computermove} you ${result}`
})