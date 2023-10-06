let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// model
let userSchema = require('../models/user')


// Creater
router.route('/CreatePage').post((req, res, next) => {
    userSchema.create(req.body)
        .then(user => res.json({ msg: 'Added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
})

//read user
router.route('/').get((req, res, next) => {
    userSchema.find()
        .then(data => res.json(data))
        .catch(err => res.status(404).json({ error: 'Not found' }));
})


//get single user
router.route('/EditPage/:id').get((req, res) => {
    userSchema.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(404).json({ error: 'Not found' }));
})


//Update
router.route('/update/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id,req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update the Database' }));
})

//delete
router.route('/delete/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id)
    .then(book => res.json({ mgs: 'deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a user' }));
})

module.exports = router;