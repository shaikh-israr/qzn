const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/AdminController')

router.post('/signup', AdminController.register)
router.post('/login', AdminController.login)

module.exports = router