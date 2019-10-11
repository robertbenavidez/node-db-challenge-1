const db = require('../data/db-config');

module.exports = {
    findProjects,
    addProject,
    findById
}


function findProjects() {
    return db('projects')
}

function addProject(newProject) {
    return db('projects').insert(newProject, 'id')
}

function findById (id) {
    return db ('projects')
        .where({id})
        .first();
}