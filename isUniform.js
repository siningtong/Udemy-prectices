function isUniform(arr) {
  let item = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (item !== arr[i]) {
      return false
    }
  }
  return true
}
console.log(isUniform([1, 2, 1, 1]))
console.log(isUniform([1, 1, 1, 1,]))
console.log(isUniform(['a', 'a', 'a']))
console.log(isUniform([1, 1, '1']))