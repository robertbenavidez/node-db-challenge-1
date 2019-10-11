const express = require('express')

const Model = require('./projects-model.js')

const router = express.Router()





router.get('/', (req, res) => {
    Model.findProjects()
    .then(projects => {
        projects.map(project =>{
            if(project.completed === 0) {
                project.completed = false;
                return project
            } else {
                project.completed = true;
                return project
            }
        })
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
})

//Add a Project

router.post('/', (req, res) => {
    const newProject = req.body;
    Model.addProject(newProject)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({message: "Unable to add project"})
        });
});






module.exports = router;