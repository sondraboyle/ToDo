
//Incomplete
const renderIncomplete = function(array){
    let incomplete = array.filter(function(task){
        return !task.completed
    })
    //add to the completed array
    incompleteTasks = incomplete
   
   let incompletedNum = incompleteTasks.length //the number of incomplete
    //create HTML for incomplete
    document.querySelector('#listTitle').textContent = `Tasks (${incompletedNum} left)`


    
   
}



//RENDER DOM
const renderList = function(list){
   
    
//create new row
//create unique row id
let id = list.id
console.log(id)
let rowId = taskList.findIndex(function(array){
    return array.id === id
    })
const row = document.createElement('div')
row.className = "row"
row.setAttribute('id',`item${rowId}`)
document.querySelector('#theList').appendChild(row)

//create 1st column with input
const column = document.createElement('div')
column.className = "col s1 checkedItem"
row.appendChild(column)

 
   //Checkbox
   const checkbox = document.createElement('input')
   checkbox.setAttribute('type', 'checkbox')
   checkbox.setAttribute('id', `completed${rowId}`)
   //previously checked stays checked
   if (taskList[rowId].completed == true ){
       checkbox.setAttribute('checked', 'checked')
   }
   checkLabel = document.createElement('label')
   checkLabel.setAttribute('for',`completed${rowId}`)
   column.appendChild(checkbox)
   column.appendChild(checkLabel)
        //event Listener
        document.querySelector(`#completed${rowId}`).addEventListener('change', function(e){
       //get the text element
      
       const completedText = e.target.parentNode.parentElement.children[1].innerText
        //find the index of the matching Todo
        let textIndex = taskList.findIndex(function(array){
            return completedText == array.text
        })
        console.log(completedText)
        console.log(taskList)
        //change completed attribute back
        if (e.target.checked == true) {
        taskList[textIndex].completed = true
        renderIncomplete(taskList)
       console.log(incompleteTasks)
        } else {
        taskList[textIndex].completed = false
        renderIncomplete(taskList)
        console.log(incompleteTasks)
        }
    
   })


//create second column with text
const column2 = document.createElement('div')
column2.className = "col s6"
column2.setAttribute('id',`column${rowId}`)
row.appendChild(column2)



            //create new list item
           const newItem = document.createElement('li')
           newItem.textContent = list.text
           newItem.id = list.id
           newItem.completed = list.completed
           document.querySelector(`#column${rowId}`).appendChild(newItem)
          
           
          
//create third column with X
const column3 = document.createElement('div')
column3.className = "col s1"
column3.setAttribute('id',`column3${rowId}`) 
row.appendChild(column3)
        
            //create link with icon
            const link = document.createElement('a'); //creates a link <a href="" ></a>
            link.className = "delete-item secondary-content";
            link.innerHTML = "<i class='fa fa-remove'></i>" //icon
            document.querySelector( `#column3${rowId}`).appendChild(link);//append the link to the li

                //add event Listener
                document.querySelector(`#column3${rowId}`).addEventListener('click',function(e){
                
                    if(e.target.parentElement.classList.contains('delete-item')){

                        //find the id of the column, turn it to a string, take the last number and find the row with that number in the id
                        let itemId = JSON.stringify(e.target.parentNode.parentNode.id)
                        itemIdNum = itemId.slice(8,9)
                        document.querySelector(`#item${itemIdNum}`).remove()
                
                    
                    //remove this item from the Array as well
                    let taskId = taskList.findIndex(function (array){
                        return array.id === id
                    })
                    console.log(taskId)
                    taskList.splice(taskId, 1)
                    // console.log(taskList)
                    renderIncomplete(taskList)
                    

                //make local storage = the new array
                localStorage.setItem('task', JSON.stringify(taskList))
                }   
                })


    
 }


//ADD TASK
const addTask = function(list){
  
    

    //erase the whole list first so that the array is shown only once
    document.querySelector('#theList').innerHTML = ''
    
    //render DOM
    taskList.forEach(function(list){
        renderList(list)


    })
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
renderList(list)
            
    })

}

