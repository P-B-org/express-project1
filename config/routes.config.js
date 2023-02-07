const router = require('express').Router();
const authController = require ("../controllers/auth.controller");

/* Main route*/ 
router.get("/", (req, res, next) => res.send("Welcome to AppSign"))
/*Auth */
router.get("/signup", authController.signup);
router.post("signup", authController.doSignup);


module.exports = router;