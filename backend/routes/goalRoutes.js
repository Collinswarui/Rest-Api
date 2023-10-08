// set up the routes for the apis
const express = require('express');
const router = express.Router();
const { getGoals, 
        setGoal, 
        updateGoal, 
        deleteGoal } = require('../controllers/getController');

// create an api endpoint to get all the goals
router.get('/', getGoals);

router.post('/', setGoal);

router.put('/:id', updateGoal);

router.get('/:id', deleteGoal);


module.exports = router;