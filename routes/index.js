const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.getRegister)
router.post('/register', UserController.registerUser)

module.exports = router