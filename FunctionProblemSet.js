// const isEven = function (num) {
//   if (num % 2 === 0) {
//     return true
//   }

//   return false

// }
// isEven(4)
// isEven(21)
// isEven(68)
// isEven(333)

// const factorial = function (num) {
//   let result = 1
//   for (let i = num; i > 1; i--) {
//     result = result * i
//   }
//   return result
// }
// factorial(4)

const toSnake = function (str) {
  let newstr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      newstr += '_'
    }
    else {
      newstr += str[i]
    }
  }
  return newstr
}
console.log(toSnake('hello--world--go'))