function randomChoice(){
    var index= Math.floor(Math.random()*3)
    var options=['ROCK','PAPER','SCISSORS']
    return options[index]
}
function judge(user1,user2){
    if (user1=='ROCK'){
        if(user2=='ROCK'){
            return 'DRAW'
        }
        else if(user2=='PAPER'){
            return 'COMPUTER WON'
        }
        else if(user2=='SCISSORS'){
            return 'YOU WON'
        }
    }

    if (user1=='PAPER'){
        if(user2=='ROCK'){
            return 'YOU WON'
        }
        else if(user2=='PAPER'){
            return 'DRAW'
        }
        else if(user2=='SCISSORS'){
            return 'COMPUTER WON'
        }
    }
    
    if (user1=='SCISSORS'){
        if(user2=='ROCK'){
            return 'COMPUTER WON'
        }
        else if(user2=='PAPER'){
            return 'YOU WON'
        }
        else if(user2=='SCISSORS'){
            return 'DRAW'
        }
    }
}
var pcChoice=document.querySelector('.pc-choice')
var results=document.querySelector('.results')

var rock=document.getElementById('rock-button')
rock.addEventListener('click',function(){
    let user = 'ROCK'
    let computer=randomChoice()
    results.innerText=''
    var yourChoice= document.querySelector('.your-choice')
    yourChoice.innerText='ROCK'
    pcChoice.innerText= computer
    results.innerText=judge(user,computer)
    
})

var paper=document.getElementById('paper-button')
paper.addEventListener('click',function(){
    let user='PAPER'
    let computer=randomChoice()
    results.innerText=''
    var yourChoice= document.querySelector('.your-choice')
    yourChoice.innerText='PAPER'
    pcChoice.innerText= computer
    results.innerText=judge(user,computer)
    
})

var scissors=document.getElementById('scissors-button')
    scissors.addEventListener('click',function(){
    let user='SCISSORS'
    let computer =randomChoice()
    results.innerText=''
    var yourChoice= document.querySelector('.your-choice')
    yourChoice.innerText='SCISSORS'
    pcChoice.innerText= computer
    results.innerText=judge(user,computer)
})


