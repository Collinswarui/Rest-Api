// set up the routes for the apis
const express = require('express');
const router = express.Router();
const { getGoals, 
        setGoal, 
        updateGoal, 
        deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

// create an api endpoint to get all the goals

// endpoint for both the GET and POST methods
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal);


module.exports = router;