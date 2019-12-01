const movies = [{
  title: 'In Bruges',
  rating: 5,
  hasWatched: true
},
{
  title: 'Frozen',
  rating: 4.5,
  hasWatched: false
},
{
  title: 'Mad Max',
  rating: 5,
  hasWatched: true
},
{
  title: 'Mad Max',
  rating: 5,
  hasWatched: true
},
{
  title: 'les',
  rating: 3.5,
  hasWatched: false
},
]
// for (let element of movie) {
//   if (element.hasWatched) {
//     console.log(`you have watched \"${element.title}\" - ${element.rating}stars`)
//   }
//   else if (!element.hasWatched) {
//     console.log(`you have not watched \"${element.title}\" - ${element.rating}stars`)
//   }
// }
function buildString(element) {
  let result = 'you have'
  if (element.hasWatched) {
    result += 'watched'
  } else if (!element.hasWatched) {
    result += 'not watched'
  }
  return result += `\"${element.title}\" - ${element.rating} stars`
}

movies.forEach((movie) => {
  console.log(buildString(movie))
})