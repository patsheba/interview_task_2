const express = require('express')
const { verifyToken } = require('../controllers/patchController')

const router = express.Router()

// Route to verify token.
router.get('/verify', verifyToken())

module.exports = router