const jwt = require('jsonwebtoken')
const  bcrypt = require('bcryptjs')
const asyncHandler =  require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/users 
// @access Public
const registerUser = async(req, res)  => {
    res.json({message: 'Register User'})
}

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = async(req, res)  => {
    res.json({message: 'Login User'})
}

// @desc Get user 
// @route GET /api/users/me
// @access Public
const getMe = async(req, res) => {
    res.json({ message: 'User data'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}