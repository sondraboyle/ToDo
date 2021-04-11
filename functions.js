
//ADD TASK
const addTask = function(list){
    console.log(taskList)
    

    //erase the whole list first so that the array is shown only once
    document.querySelector('#theList').innerHTML = ''
        
    taskList.forEach(function(list){
//create new row
//create unique row id
let id = list.id
let rowId = taskList.findIndex(function(array){
    return array.id === id
    })
const row = document.createElement('div')
row.className = "row"
row.setAttribute('id',`item${rowId}`)
document.querySelector('#theList').appendChild(row)

//create 1st column with input
const column = document.createElement('div')
column.className = "col s1"
row.appendChild(column)

 
   //input
   const checkbox = document.createElement('input')
   checkbox.setAttribute('type', 'checkbox')
   checkbox.setAttribute('id', `completed${rowId}`)
   checkLabel = document.createElement('label')
   checkLabel.setAttribute('for',`completed${rowId}`)
   column.appendChild(checkbox)
   column.appendChild(checkLabel)


//create second column with text
const column2 = document.createElement('div')
column2.className = "col s6"
column2.setAttribute('id',`column${rowId}`)
row.appendChild(column2)
console.log(row)


            //create new list item
           const newItem = document.createElement('li')
           newItem.textContent = list.text
           newItem.id = list.id
           newItem.completed = list.completed
           document.querySelector(`#column${rowId}`).appendChild(newItem)
          
           
          
//create third column with X
const column3 = document.createElement('div')
column3.className = "col s1"
column3.setAttribute('id',`column3${taskId}`) 
row.appendChild(column3)
        
            //create link with icon
            const link = document.createElement('a'); //creates a link <a href="" ></a>
            link.className = "delete-item secondary-content";
            link.innerHTML = "<i class='fa fa-remove'></i>" //icon
            document.querySelector( `#column3${taskId}`).appendChild(link);//append the link to the li
            

console.log(document.querySelector('#theList'))

            
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
//create new row
//create unique row id
let id = list.id
let rowId = taskList.findIndex(function(array){
    return array.id === id
    })
const row = document.createElement('div')
row.className = "row"
row.setAttribute('id',`item${rowId}`)
document.querySelector('#theList').appendChild(row)

//create 1st column with input
const column = document.createElement('div')
column.className = "col s1"
row.appendChild(column)

 
    //input
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', `completed${rowId}`)
    checkLabel = document.createElement('label')
    checkLabel.setAttribute('for',`completed${rowId}`)
    column.appendChild(checkbox)
    column.appendChild(checkLabel)

//create second column with text
const column2 = document.createElement('div')
column2.className = "col s6"
//create unique id
console.log(list.id)
let taskId = taskList.findIndex(function(array){
return array.id === id
})
column2.setAttribute('id',`column${taskId}`)
row.appendChild(column2)
console.log(row)


            //create new list item
           const newItem = document.createElement('li')
           newItem.textContent = list.text
           newItem.id = list.id
           newItem.completed = list.completed
           document.querySelector(`#column${taskId}`).appendChild(newItem)
          
           
          
//create third column with X
const column3 = document.createElement('div')
column3.className = "col s1"
column3.setAttribute('id',`column3${taskId}`) 
row.appendChild(column3)
        
            //create link with icon
            const link = document.createElement('a'); //creates a link <a href="" ></a>
            link.className = "delete-item secondary-content";
            link.innerHTML = "<i class='fa fa-remove'></i>" //icon
            document.querySelector( `#column3${taskId}`).appendChild(link);//append the link to the li
            
})
}