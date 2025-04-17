const {showTasks, addTodo} = require("../models/model")

const displayTask = (req, res)=>{
    const tasks = showTasks();
    res.render("html", {tasks}); // send raw data to view
};

const addTask = (req, res) => {
    const task = req.body.task;
    addTodo(task);
    res.redirect("/");
    // res.status(200).json({
    //     message: "task added successfully"
    // });
};

module.exports= {displayTask, addTask};