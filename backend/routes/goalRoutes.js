// set up the routes for the apis
const express = require('express');
const router = express.Router();
const { getGoals, 
        setGoal, 
        updateGoal, 
        deleteGoal } = require('../controllers/getController');

// create an api endpoint to get all the goals

// endpoint for both the GET and POST methods
router.route('/').get(getGoals).post(setGoal);
router.route('./:id').delete(deleteGoal).put(updateGoal);


module.exports = router;