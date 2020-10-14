const express = require('express')
const patchController = require('../controllers/patchController')
const { verifyToken } = require('../controllers/patchController')

const router = express.Router()

// Route to patch json objects.
router.patch('/patch-object', verifyToken, patchController.patch_json_patch)
router.get('/verify-token', patchController.verifyToken())

module.exports = router