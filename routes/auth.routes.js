const {Router} = require('express');
const {check} = require('express-validator');
const {login} = require('../contollers/auth.controllers.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');

const router = Router();
router.post("/login", [
    check('email',"Email is required - que lo ponga xd").isEmail(),
    check('password',"password require - escruba la contra mi rey").not().isEmpty(),
    validateDocuments
], login)

module.exports = router;