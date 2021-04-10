
//ADD TASK
const addTask = function(list){

    //erase the whole list first so that the array is shown only once
    document.querySelector('#theList').innerHTML = ''
    
        taskList.forEach(function(list){
            //create new list item
           const newItem = document.createElement('li')
           newItem.className = 'collection-item'
           newItem.textContent = list.text
           newItem.id = list.id
           document.querySelector('.collection').appendChild(newItem)
          
        
            //create link with icon
            const link = document.createElement('a'); //creates a link <a href="" ></a>
            link.className = "delete-item secondary-content";
            link.innerHTML = "<i class='fa fa-remove'></i>" //icon
            newItem.appendChild(link);//append the link to the li
        })
    }

//check for existing saved data
const checkSaved = function(){
let tasksJSON = localStorage.getItem('task')
if( tasksJSON !== null){
    taskList = JSON.parse(tasksJSON)
    console.log(taskList)
    addTask(taskList)
}
}


// FILTER
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