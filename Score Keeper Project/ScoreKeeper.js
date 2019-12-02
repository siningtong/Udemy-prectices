let playerOne = document.getElementsByClassName('playerOne')[0]
let playerTwo = document.getElementsByClassName('playerTwo')[0]
let resetButton = document.getElementsByClassName('reset')[0]
let strScoreOne = document.getElementsByClassName('playerOneScore')[0].textContent
let strScoreTwo = document.getElementsByClassName('playerTwoScore')[0].textContent
let targetValue = document.getElementById('input')
let scoreOne = Number(strScoreOne)
let scoreTwo = Number(strScoreTwo)



playerOne.addEventListener('click', () => {
  if (scoreOne !== Number(document.getElementById('target').textContent) && scoreTwo !== Number(document.getElementById('target').textContent)) {
    scoreOne++
    document.getElementsByClassName('playerOneScore')[0].textContent = scoreOne
  }
  if (scoreOne === Number(document.getElementById('target').textContent)) {
    document.getElementsByClassName('playerOneScore')[0].classList.add('color')
  }
})

playerTwo.addEventListener('click', () => {
  if (scoreOne !== Number(document.getElementById('target').textContent) && scoreTwo !== Number(document.getElementById('target').textContent)) {
    scoreTwo++
    document.getElementsByClassName('playerTwoScore')[0].textContent = scoreTwo
  }
  if (scoreTwo === Number(document.getElementById('target').textContent)) {
    document.getElementsByClassName('playerTwoScore')[0].classList.add('color')
  }
})

resetButton.addEventListener('click', reset)

targetValue.addEventListener('change', () => {
  reset()
  document.getElementById('target').textContent = this.value
})

function reset() {
  scoreOne = 0
  scoreTwo = 0
  document.getElementsByClassName('playerOneScore')[0].textContent = '0'
  document.getElementsByClassName('playerOneScore')[0].classList.remove('color')
  document.getElementsByClassName('playerTwoScore')[0].textContent = '0'
  document.getElementsByClassName('playerTwoScore')[0].classList.remove('color')
}