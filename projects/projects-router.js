const express = require('express')

const Model = require('./projects-model.js')

const router = express.Router()





router.get('/', (req, res) => {
    Model.findProjects()
    .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
})







module.exports = router;