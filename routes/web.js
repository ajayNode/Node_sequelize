const express = require('express')
const UserController = require('../controllers/userController')
const router = express.Router()

router.post('/create', UserController.create)
router.post('/edit', UserController.edit)
router.post('/update', UserController.update)
router.post('/delete', UserController.delete)


module.exports = router