const inputEl = document.querySelector('#input');
const buttonEl = document.querySelector('#delete');
const outputEl = document.querySelector('#list-container')
const form = document.querySelector('form')

// delete tasks 

const removeTask = id =>{
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks',tasks))
    }
    tasks = tasks.filter(task=>{
       
        return task.id !== +id
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    getTasks();
}



// get tasks 

const getTasks = ()=>{
    let tasks ;
    if(localStorage.getItem('tasks')===null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    console.log(tasks)
    // display to DOM 
    let output ; 
    const allTasks = tasks.map((task)=>{
        return `
        <li id="item">
        <span>${task.title}</span>
        <button onClick="removeTask('${task.id}')" id="delete">X</button>
    </li>
        `
    })

    output = allTasks.join('');
    outputEl.innerHTML = output ; 
}

getTasks()

// add task  and save into local storage
const addTask = (e)=>{
    e.preventDefault()
    if(inputEl.value ===""){
        alert('enter a task !!')
    }
    //  get the item 
    const task = inputEl.value;
    if(task){
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks = []
            console.log(tasks)
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'))
            console.log(tasks)
        }
        tasks.unshift({
            id: Date.now(),
            title:task,

        });
        // save to storage 
        localStorage.setItem('tasks',JSON.stringify(tasks) )
        // empty input 
        inputEl.value = ''
    }
    getTasks()
}
// get items 
  

// Event listener 

form.addEventListener('submit',addTask) 







document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const addButton = document.querySelector('button[type="submit"]');
    const listContainer = document.getElementById('list-container');
    const modal = document.getElementById('confirmModal');
    const yesBtn = document.getElementById('deleteYes');
    const noBtn = document.getElementById('deleteNo');

    addButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (input.value.trim() !== '') {
            const newItem = document.createElement('li');
            newItem.innerHTML = `<span>${input.value}</span><button class="delete">X</button>`;
            listContainer.appendChild(newItem);
            input.value = ''; 
            newItem.querySelector('.delete').addEventListener('click', function() {
                modal.style.display = 'block';
                yesBtn.onclick = () => {
                    listContainer.removeChild(newItem);
                    modal.style.display = 'none';
                };
                noBtn.onclick = () => {
                    modal.style.display = 'none';
                };
            });
        }
    });
});
