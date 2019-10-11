const express = require('express');

const TModel = require('./tasks-model.js');

const router = express.Router();


// Find Tasks

router.get('/', (req, res) => {
    TModel.findTasks()
        .then(tasks => {
            tasks.map(task => {
                if (task.completed === 0){
                    task.completed = false;
                    return task;
                } else {
                    task.completed = true;
                    return task;
                }
            });
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to retreive tasks'})
        })
})

// Add Task

router.post('/', (req, res) => {
    const newTask = req.body;
    
    console.log(newTask)
    TModel.addTask(newTask)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json({message: "Unable to add task"})
        });
});




module.exports = router;