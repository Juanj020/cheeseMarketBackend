const {Router} = require('express');
const {getUsers, postUsers, putUsers, deleteUsers, patchUsers} = require("../contollers/usuario.controllers.js")
const router = new Router()

router.get("/", getUsers);
router.post("/", postUsers);
router.put("/", putUsers);
router.delete("/", deleteUsers);
router.patch("/", patchUsers );

module.exports = router;