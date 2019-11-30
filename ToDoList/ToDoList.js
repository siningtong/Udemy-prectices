let toDo = []
window.setTimeout(() => {
  let enter = prompt('what do you want to do')
  while (enter !== 'quit') {
    if (enter === 'list') {
      toDo.forEach((item, index) => {
        console.log(`${index}:${item}`)
      })
    } else if (enter === 'new') {
      let newEnter = prompt('enter new item')
      toDo.push(newEnter)
      console.log(`${newEnter} has been added to the list`)
    }
    else if (enter === 'delate') {
      let delate = prompt('Enter index you want to delate')
      toDo.splice(Number(delate), 1)
      console.log('toDo removed')
    }
    enter = prompt('what do you want to do')
  }
  console.log('you have quit')

}, 500)

