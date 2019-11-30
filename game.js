var currectAnswer = 4;
var stringGuess = prompt('make a guess');
var guess = Number(stringGuess);
if (guess === currectAnswer) {
  alert('you got it')

} else if (guess > currectAnswer) {
  alert('too high')
}
else {
  alert('too low')
}