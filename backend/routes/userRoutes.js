const express = require ('express')
const route = express.Router()
const { registerUser } = require('../controllers/userController')

router.post('/', registerUser)

module.exports = router