let todoList=[{name:'heloo', 
    duedate:'18-05-2026',
    Reminderat:'17:15'}, 

    {name:'bye bye ', 
    duedate:'18-05-2026',
    Reminderat:'22:19'}]

renderTodolist();
//  parsing through every element in the array 

function renderTodolist(){
    let todolistHTML = '';

    for(let i=0;i< todoList.length;i++){

        const todolistiteam = todoList[i];
        const {name,duedate,Reminderat} =todolistiteam;

        const html = `
            <div class="todo-row">
                <div class="task-name">${name}</div>
                <div class="task-date">${duedate}</div>
                <div class="task-time">${Reminderat}</div>
                <button class="delete-btn" onclick="
                    todoList.splice(${i}, 1);
                    renderTodolist();
                ">Delete</button>
            </div>
        `;
        todolistHTML += html;
    }




    document.querySelector('.js-display-task-blocks')
    .innerHTML=todolistHTML

}

function catchTheiteam (){

    const todo = document.querySelector('.js-todo-input');
    const taskName = todo.value;

    const tododate = document.querySelector('.js-todo-date');
    const taskdate =tododate.value;

    const todotime = document.querySelector('.js-todo-time');
    const tasktime =todotime.value;

    if (!taskdate) {
        alert("Please select a date!");
        return;
    } 
    
    if (!tasktime) {
        alert("Please set a time for the reminder!");
        return;
    }
    if (!taskName) {
        alert("Please enter the name of the Task!");
        return;
    }
    
    todoList.push({name:taskName,
        duedate:taskdate,
        Reminderat:tasktime}
    );



    todo.value='';

    renderTodolist();
}

function handleKeyDown(event){

    if (event.key === 'Enter'){

        catchTheiteam();
    }
}