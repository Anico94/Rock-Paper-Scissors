$(document).ready(function(){
    const choices = ['rock', 'paper','scissors'];

    const computerSelects = function (array){
        let arrayIndex = Math.floor(Math.random()*array.length)
        return array[arrayIndex];
    }

    const playerSelects = function (){
        const playerSelection = $(this).children().attr('class');
        const computerSelection = computerSelects(choices);
        let winner = '';
        if(playerSelection === computerSelection){
            winner = `The game was a tie both you and the computer chose ${playerSelection}.`
        }else if (playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                winner = `The computer wins, you chose ${playerSelection} and the computer chose ${computerSelection}.`
            }else{
                winner =  `You win, you chose ${playerSelection} and the computer chose ${computerSelection}.`
            }
        }else if(playerSelection === 'paper'){
            if (computerSelection === 'rock'){
                return "You win"
            }else{
                winner = `The computer wins, you chose ${playerSelection} and the computer chose ${computerSelection}`
            }
        }else{
            if (computerSelection === 'rock'){
                winner = `The computer wins, you chose ${playerSelection} and the computer chose ${computerSelection}`
            }else{
                winner =  `You win, you chose ${playerSelection} and the computer chose ${computerSelection}.`
            }
        }
        
        $('.result-text').html(winner);
        $('div.result-screen').addClass('visibility');
    }

    const refresh = function(){
        $('div.result-screen').removeClass('visibility');
    }

    $('.button').on ('click', playerSelects);
    $('button').on('click', refresh)
});
