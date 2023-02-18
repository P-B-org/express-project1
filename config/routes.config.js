const router = require('express').Router();

const miscController = require ("../controllers/misc.controller");
const authController = require ("../controllers/auth.controller");
const userController = require ("../controllers/user.controller");

const authMiddleware = require ("../middlewares/auth.middleware");

/* Main route*/ 
router.get("/", authMiddleware.isNotAuthenticated, miscController.home);

/*Auth */
router.get("/signup", authMiddleware.isNotAuthenticated, authController.signup);
router.post("/signup", authMiddleware.isNotAuthenticated, authController.doSignup);

router.get("/login", authMiddleware.isNotAuthenticated, authController.login);
router.post("/login", authMiddleware.isNotAuthenticated, authController.doLogin);

router.get("/logout", authMiddleware.isAuthenticated, authController.doLogout);

router.get("/explore", authMiddleware.isAuthenticated, userController.explore);
router.get("/profile", authMiddleware.isAuthenticated, userController.profile);
router.get("/profile/:id", authMiddleware.isAuthenticated, userController.peopleProfile);
router.post("/profile/:id/follow", authMiddleware.isAuthenticated, userController.follow);

module.exports = router;