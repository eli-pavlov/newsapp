const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get('/all', userController.all);
router.get('/protected', userController.protected);
router.post('/add', userController.add);
router.post('/delete', userController.delete);

module.exports = router
