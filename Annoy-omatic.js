let enter = prompt('Are you there yet?')

while (enter.includes('yes') === false && enter.includes('yeath') === false) {
  let enter = prompt('Are you there yet?')
}

alert('you got it')

