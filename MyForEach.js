function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}
myForEach([1, 2, 3, 4], (arr) => { console.log(arr) })