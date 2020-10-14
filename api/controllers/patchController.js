const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator')
const jsonpatch = require('fast-json-patch')
require('dotenv').config()

// Verify token
exports.verifyToken = (req, res, next) => {
    const { token } = req.headers
    // Return forbidden status if the token is not available
    if (!token) {
        return res.status(403).json({ authorized: false, error: 'Token is required.' })
    }
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) { return res.status(401).send({ authorized: false, error: 'Verification failed or token has expired.' }) }
        // No error so save decoded token into req.user and go to next process.
        req.user = decoded
        next()
    })
}

// Apply json patch to json object and return patched object.
exports.patch_json_patch = [
    // Validate input fields. Trim spaces around username
    body('jsonObject', 'JSON object must not be empty.').isLength({ min: 1 }),
    body('jsonPatchObject', 'JSON patch object must not be empty.').isLength({ min: 1 }),

    // Process the request after validating.
    (req, res, next) => {
        // Save errors from validating, if any.
        const errors = validationResult(req)

        // Check if there were errors from the form.
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // Save object-to-patch and patch-object from the request.
        const jsonObject = JSON.parse(req.body.jsonObject)
        const jsonPatchObject = JSON.parse(req.body.jsonPatchObject)

        // Save patch in new variable.
        const patchedObject = jsonpatch.applyPatch(jsonObject, jsonPatchObject).newDocument
        // res.json({user: req.user.username, patchedObject: patchedObject})
        res.json({ patchedObject })
    },
]
