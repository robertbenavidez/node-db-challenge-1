const db = require('../data/db-config');

module.exports = {
    findProjects
}


function findProjects() {
    return db('projects')
}