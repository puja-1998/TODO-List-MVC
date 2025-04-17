const tasks = ["shopping", "swimming"];

function showTasks(){
    return tasks;
}

function addTodo(task){
    tasks.push(task);
}

module.exports = {showTasks, addTodo};