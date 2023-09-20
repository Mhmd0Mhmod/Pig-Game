'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const rollDice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let curentScore, curentPlayer, score;
const reset = () => {
    curentScore = 0;
    curentPlayer = 0;
    score = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;
    rollDice.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
}
reset();
const switchPlayer = () => {
    document.getElementById(`current--${+curentPlayer}`).textContent = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    document.querySelector('.btn--hold').disabled = 'ture';
    curentPlayer = !curentPlayer;
    curentScore = 0;
}
document.querySelector('.btn--roll').addEventListener('click', () => {
    document.querySelector('.btn--hold').removeAttribute('disabled');
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    rollDice.src = `dice-${diceNum}.png`;
    rollDice.classList.remove('hidden');
    if (diceNum === 1) {
        curentScore = 0;
        switchPlayer();
        return;
    }
    curentScore += diceNum;
    document.getElementById(`current--${+curentPlayer}`).textContent = curentScore;
})
document.querySelector('.btn--hold').addEventListener('click', () => {
    score[+curentPlayer] += curentScore;
    document.getElementById(`score--${+curentPlayer}`).textContent = score[+curentPlayer];
    if (score[+curentPlayer] >= 100) {
        document.querySelector('.btn--hold').disabled = 'ture';
        document.querySelector('.btn--roll').disabled = 'ture';
        document.querySelector(`.player--${+curentPlayer}`).classList.add('player--winner');
    } else {
        switchPlayer();
    }
    curentScore = 0;
})
document.querySelector(".btn--new").addEventListener('click', reset)