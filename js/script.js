'use strict'

const hidden1El = document.querySelector('.hidden-1')
const hidden2El = document.querySelector('.hidden-2')
const hidden3El = document.querySelector('.hidden-3')
const hidden4El = document.querySelector('.hidden-4')

const current1El = document.querySelector('.current--1')
const current2El = document.querySelector('.current--2')
const current3El = document.querySelector('.current--3')
const current4El = document.querySelector('.current--4')

const currentScore1El = document.querySelector('.current--1-score')
const currentScore2El = document.querySelector('.current--2-score')
const currentScore3El = document.querySelector('.current--3-score')
const currentScore4El = document.querySelector('.current--4-score')

const player1El = document.querySelector('.player--1')
const player2El = document.querySelector('.player--2')
const player3El = document.querySelector('.player--3')
const player4El = document.querySelector('.player--4')

const diceEl = document.querySelector('.dice')
const resetEl = document.querySelector('.reset')

const rollDice1El = document.querySelector('.roll-dice-1')
const rollDice2El = document.querySelector('.roll-dice-2')
const rollDice3El = document.querySelector('.roll-dice-3')
const rollDice4El = document.querySelector('.roll-dice-4')

let activePlayer = 1

const init = function () {
  activePlayer = 1
  diceEl.classList.add('hide')

  hidden1El.classList.remove('roll-and-hold-1')
  current1El.classList.remove('current--1-hidden')
  player1El.classList.remove('player--1-hidden')

  hidden2El.classList.add('roll-and-hold-2')
  current2El.classList.add('current--2-hidden')
  player2El.classList.add('player--2-hidden')

  hidden3El.classList.add('roll-and-hold-3')
  current3El.classList.add('current--3-hidden')
  player3El.classList.add('player--3-hidden')

  hidden4El.classList.add('roll-and-hold-4')
  current4El.classList.add('current--4-hidden')
  player4El.classList.add('player--4-hidden')
}

// init()
// Initialize the game

resetEl.addEventListener('click', function () {
  init()
})

// Rolling dice & switching to new player if dice rolls as 1 functionality

const showPlayer1El = function () {
  hidden1El.classList.remove('roll-and-hold-1')
  current1El.classList.remove('current--1-hidden')
  player1El.classList.remove('player--1-hidden')
}
const showPlayer2El = function () {
  hidden2El.classList.remove('roll-and-hold-2')
  current2El.classList.remove('current--2-hidden')
  player2El.classList.remove('player--2-hidden')
}
const showPlayer3El = function () {
  hidden3El.classList.remove('roll-and-hold-3')
  current3El.classList.remove('current--3-hidden')
  player3El.classList.remove('player--3-hidden')
}
const showPlayer4El = function () {
  hidden4El.classList.remove('roll-and-hold-4')
  current4El.classList.remove('current--4-hidden')
  player4El.classList.remove('player--4-hidden')
}
const hideAllEl = function () {
  hidden1El.classList.add('roll-and-hold-1')
  current1El.classList.add('current--1-hidden')
  player1El.classList.add('player--1-hidden')

  hidden2El.classList.add('roll-and-hold-2')
  current2El.classList.add('current--2-hidden')
  player2El.classList.add('player--2-hidden')

  hidden3El.classList.add('roll-and-hold-3')
  current3El.classList.add('current--3-hidden')
  player3El.classList.add('player--3-hidden')

  hidden4El.classList.add('roll-and-hold-4')
  current4El.classList.add('current--4-hidden')
  player4El.classList.add('player--4-hidden')
}

const generateRandomAndDisplay = function (activePlayer) {
  // genrate random number
  const diceValue = Math.trunc(Math.random() * 6) + 1
  console.log(diceValue)
  // display dice
  diceEl.classList.remove('hide')
  diceEl.src = `./img/dice-${diceValue}.png`

  // check if the dice value is 1
  if (activePlayer === 1) {
    if (diceValue === 1) {
      hideAllEl()
      showPlayer2El()
      currentScore1El.textContent = 0
      activePlayer += 1
      currentScore2El.textContent = 0
      diceValue = 0
    } else {
      hideAllEl()
      showPlayer1El()
      currentScore1El.textContent =
        Number(currentScore1El.textContent) + diceValue
    }
  } else if (activePlayer === 2) {
    if (diceValue === 1) {
      hideAllEl()
      showPlayer3El()
      currentScore2El.textContent = 0
      activePlayer += 1
      currentScore3El.textContent = 0
      diceValue = 0
    } else {
      hideAllEl()
      showPlayer2El()
      currentScore2El.textContent =
        Number(currentScore2El.textContent) + diceValue
    }
  } else if (activePlayer === 3) {
    if (diceValue === 1) {
      hideAllEl()
      showPlayer4El()
      currentScore3El.textContent = 0
      activePlayer += 1
      currentScore4El.textContent = 0
      diceValue = 0
    } else {
      hideAllEl()
      showPlayer3El()
      currentScore3El.textContent =
        Number(currentScore3El.textContent) + diceValue
    }
  } else if (activePlayer === 4) {
    if (diceValue === 1) {
      hideAllEl()
      showPlayer1El()
      currentScore4El.textContent = 0
      activePlayer = 1
      currentScore1El.textContent = 0
      diceValue = 0
    } else {
      hideAllEl()
      showPlayer4El()
      currentScore4El.textContent =
        Number(currentScore4El.textContent) + diceValue
    }
  }
}

rollDice1El.addEventListener('click', function () {
  init()
  activePlayer = 1
  generateRandomAndDisplay(activePlayer)
})

rollDice2El.addEventListener('click', function () {
  activePlayer = 2
  generateRandomAndDisplay(activePlayer)
})

rollDice3El.addEventListener('click', function () {
  activePlayer = 3
  generateRandomAndDisplay(activePlayer)
})

rollDice4El.addEventListener('click', function () {
  activePlayer = 4
  generateRandomAndDisplay(activePlayer)
})

// Holding current score to total score

const player1ScoreEl = document.querySelector('.player--1-score')
const player2ScoreEl = document.querySelector('.player--2-score')
const player3ScoreEl = document.querySelector('.player--3-score')
const player4ScoreEl = document.querySelector('.player--4-score')

const hold1El = document.querySelector('.hold-1')
const hold2El = document.querySelector('.hold-2')
const hold3El = document.querySelector('.hold-3')
const hold4El = document.querySelector('.hold-4')

const bodyEl = document.querySelector('body')
console.log(bodyEl)
const playerWinningEl = document.querySelector('.player-winning')
const completeContainerEl = document.querySelector('complete-container')

hold1El.addEventListener('click', function () {
  player1ScoreEl.textContent =
    Number(player1ScoreEl.textContent) + Number(currentScore1El.textContent)
  if (Number(player1ScoreEl.textContent) >= 10) {
    hideAllEl()
    completeContainerEl.classList.add('hide')
    bodyEl.classList.add('body')
    playerWinningEl.classList.remove('hide')
  } else {
    currentScore1El.textContent = 0
    hideAllEl()
    showPlayer2El()
  }
})
hold2El.addEventListener('click', function () {
  player2ScoreEl.textContent =
    Number(player2ScoreEl.textContent) + Number(currentScore2El.textContent)
  currentScore2El.textContent = 0
  hideAllEl()
  showPlayer3El()
})
hold3El.addEventListener('click', function () {
  player3ScoreEl.textContent =
    Number(player3ScoreEl.textContent) + Number(currentScore3El.textContent)
  currentScore3El.textContent = 0
  hideAllEl()
  showPlayer4El()
})
hold4El.addEventListener('click', function () {
  player4ScoreEl.textContent =
    Number(player4ScoreEl.textContent) + Number(currentScore4El.textContent)
  currentScore4El.textContent = 0
  hideAllEl()
  showPlayer1El()
})
