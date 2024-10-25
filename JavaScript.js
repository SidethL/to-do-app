let tasks =[{
    id: 0,
    title: "Task 1",
    completed: true,
    isdeleted: false,
}, 
{
    id: 1,
    title: "Task 2",
    completed: false,
    isdeleted: false,

}]

function addtask() {
    let todocontainer =document.getElementById("todolist");
    todocontainer.innerHTML="";

    tasks 
    .filter ((item) => item.completed === false && item.isdeleted === false)
    array.forEach((todo.index) => {
        todocontainer.innerHTML +=
        <div class="card">
            <p>${todo.title}</p>
            <div>
                <span 
                id="completed-task-${todo.id}"
                class="material-symbol-outlined">done_outlined</span>
                <span 
                id="remove-task-${todo.id}"
                class="material-symbol-outlined">close</span>
            </div>
        </div>
        
    });
        
    });
}