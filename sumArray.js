function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
console.log(sumArray([1, 2, 3]))
console.log(sumArray([10, 3, 10, 4]))
console.log(sumArray([-5, 100]))