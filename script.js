let taskList = []
const filter = []

checkSaved()

//adding new tasks when you click submit
const input =  document.querySelector('#task-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e)
    if(e.target.elements.task.value != ''){
        taskList.push({
            id: uuidv4(),
            text: e.target.elements.task.value})
            e.target.elements.task.value = ''
            addTask(taskList)
             //save each task added to local storage as a string
             localStorage.setItem('task', JSON.stringify(taskList))
    }

    
    
    })


//Delete when you press the button --> need to target the whole list, then use an if statement
document.querySelector('#theList').addEventListener('click',function(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove()
        
    }
    //remove this item from the Array as well
    deleteThis = e.target.parentElement.parentElement.innerText

    let index = taskList.findIndex(function(array){
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



