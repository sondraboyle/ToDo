let taskList = []
const filter = []
let incompleteTasks = []

//check for existing saved data
const checkSaved = function(list){
    let tasksJSON = localStorage.getItem('task')
    if( tasksJSON !== null){
        taskList = JSON.parse(tasksJSON)
        // console.log(taskList)
        addTask(taskList)
    }
    }

checkSaved()
//calculate incomplete
renderIncomplete(taskList)

//adding new tasks when you click submit
const input =  document.querySelector('#task-form').addEventListener('submit', function(e){
    e.preventDefault()
    
    if(e.target.elements.task.value != ''){
        taskList.push({
            id: uuidv4(),
            text: e.target.elements.task.value,
            completed: false})
            e.target.elements.task.value = ''
            // console.log(taskList)
            addTask(taskList)
            renderIncomplete(taskList)
             //save each task added to local storage as a string
             localStorage.setItem('task', JSON.stringify(taskList))
             
            
    }
    
    })

//CLEAR ALL BUTTON
document.querySelector('.clear-tasks').addEventListener('click',function(e){
    document.querySelector('#theList').innerHTML = ''
    //clear local storage
    localStorage.clear()
//clear array
  for(let count= taskList.length; count > 0 ; count -- )
    taskList.pop()
    
    renderIncomplete(taskList)
    
})


//FILTER
document.querySelector('#filter').addEventListener('input',function(e){
    const input = e.target.value.toLowerCase()
    filter.text = input
        // console.log(filter.text)
        renderFilter(taskList, input)
})

