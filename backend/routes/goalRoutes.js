// set up the routes for the apis
const express = require('express');
const router = express.Router();
const { getGoals } = require('../controllers/getController');

// create an api endpoint to get all the goals
router.get('/', getGoals);

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set goal'})
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}`})
});

router.get('/:id', (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}`})
});


module.exports = router;