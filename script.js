let taskList = []
const filter = []


//adding new tasks when you click submit
const input =  document.querySelector('#task-form').addEventListener('submit', function(e){
    e.preventDefault()
    taskList.push({
    text: e.target.elements.task.value})
    e.target.elements.task.value = ''
    addTask(taskList)
     //save each task added to local storage as a string
     localStorage.setItem('task', JSON.stringify(taskList))
    
    })


//adding new elements for each task
const addTask = function(list){


//erase the whole list first so that the array is shown only once
document.querySelector('#theList').innerHTML = ''

    taskList.forEach(function(list){
        //create new list item
       const newItem = document.createElement('li')
       newItem.className = 'collection-item'
       newItem.textContent = list.text
       document.querySelector('.collection').appendChild(newItem)
      
    
        //create link with icon
        const link = document.createElement('a'); //creates a link <a href="" ></a>
        link.className = "delete-item secondary-content";
        link.innerHTML = "<i class='fa fa-remove'></i>" //icon
        newItem.appendChild(link);//append the link to the li
    })
}

//check for existing saved data
let tasksJSON = localStorage.getItem('task')
if( tasksJSON !== null){
    taskList = JSON.parse(tasksJSON)
    console.log(taskList)
    addTask(taskList)
}
//Delete when you press the button --> need to target the whole list, then use an if statement
document.querySelector('#theList').addEventListener('click',function(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove()
        
    }
    //remove this item from the Array as well
    deleteThis = e.target.parentElement.parentElement.innerText

    let index = taskList.findIndex(function(array, something){
        return array.text === deleteThis})
    
    taskList.splice(index, 1)

   //make local storage = the new array
   localStorage.setItem('task', JSON.stringify(taskList))

})

//CLEAR ALL BUTTON
document.querySelector('.clear-tasks').addEventListener('click',function(e){
    document.querySelector('#theList').innerHTML = ''
    //clear local storage
    localStorage.clear()
  for(let count= taskList.length; count > 0 ; count -- )
    taskList.pop()
    
})

//FILTER
document.querySelector('#filter').addEventListener('input',function(e){
    const input = e.target.value.toLowerCase()
    filter.text = input
        console.log(filter.text)
        renderFilter(taskList, input)
})

const renderFilter = function(array, query){
    let filteredTask = array.filter(function(task){
        return task.text.toLowerCase().includes(filter.text.toLowerCase())
        //returns an array with things that match this 
    })
//clear all the tasks
document.querySelector('#theList').innerHTML = ''

//add a new note for only those tasks
filteredTask.forEach(function(list){
    //create new list item
   const newItem = document.createElement('li')
   newItem.className = 'collection-item'
   newItem.textContent = list.text
   document.querySelector('.collection').appendChild(newItem)
//    console.log(list)

    //create link with icon
    const link = document.createElement('a'); //creates a link <a href="" ></a>
    link.className = "delete-item secondary-content";
    link.innerHTML = "<i class='fa fa-remove'></i>" //icon
    newItem.appendChild(link);//append the link to the li
})
}
