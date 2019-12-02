//methord one
// let button = document.querySelector('button')
// let backGroundColorIsPink = false
// button.addEventListener('click', function () {
//   if (!backGroundColorIsPink) {
//     document.body.style.backgroundColor = 'pink'
//   } else {
//     document.body.style.backgroundColor = 'white'
//   }
//   backGroundColorIsPink = !backGroundColorIsPink
// })


//methord two
let body = document.querySelector('body')
let button = document.querySelector('button')
button.addEventListener('click', () => {
  body.classList.toggle('pink')
})