const db = require('../data/db-config.js')


module.exports = {
    findTasks,
    addTask
}


function findTasks() {
    return db("tasks as t")
    .select(
      "p.name as projectName",
      "t.description as task",
      "p.description as projectDescription",
      "t.completed"
    )
    .innerJoin("projects as p", "t.project_id", "=", "p.id")
    .orderBy("p.name", "t.id");
}

function addTask(newTask) {
    return db ('tasks').insert(newTask)
}




function boolMapper() {
    
}
    