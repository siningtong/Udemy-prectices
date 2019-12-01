function max(arr) {
  let maxValue = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i]
    }
  }
  return maxValue
}
console.log(max([1, 2, 3]))
console.log(max([10, 3, 10, 4]))
console.log(max([-5, 100]))