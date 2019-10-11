const express = require('express')

const RModel = require('./resources-model.js')

const router = express.Router()



//Find Resources

router.get('/', (req, res) => {
    RModel.findResources()
    .then(resource => {
        res.json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get Resources' });
      });
})

//Add a resource

router.post('/', (req, res) => {
    const newResource = req.body;
    RModel.addResource(newResource)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({message: "Unable to add project"})
        });
});


module.exports = router;