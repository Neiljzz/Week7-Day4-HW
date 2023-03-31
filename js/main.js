let colorButton = document.getElementById('changeColor')

let colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
let colorIndex = 0;

// colorButton.addEventListener('click', (event)=>{
//     let container = document.getElementsByClassName('container')[0];
//     container.className =`container w-75 p-1 bg-${colors[colorIndex]}`;
//     colorIndex = (colorIndex + 1) % colors.length;
//     console.log(`next color index: ${colorIndex}, next color: ${colors[colorIndex]}`)
// })
colorButton.addEventListener('click', changeColor)

function changeColor(event){
    let container = document.getElementsByClassName('container')[0];
    container.className =`container w-75 p-1 bg-${colors[colorIndex]}`;
    colorIndex = (colorIndex + 1) % colors.length;
}

// Grab the form
let form = document.getElementById('taskForm');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault(); 
    let taskName = event.target.taskName.value;
    console.log(taskName);
    addTask(taskName);

    // TODO: add task
    event.target.taskName.value = '';
}

function addTask(taskName){
    let taskList = document.getElementById('taskDisplay');
    let newTask = document.createElement('li');
    newTask.className = 'list-group-item';
    newTask.innerHTML = taskList.children.length +1 + '. ' + taskName;

    taskList.append(newTask)

    


    // add task name to ul

}