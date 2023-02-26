const router = require("express").Router();
const upload = require("../config/cloudinary.config");

const miscController = require("../controllers/misc.controller");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const followController = require("../controllers/follow.controller");
const postController = require("../controllers/post.controller");

const authMiddleware = require("../middlewares/auth.middleware");

/* Main route*/
router.get("/", authMiddleware.isNotAuthenticated, miscController.home);

/*Auth */
router.get("/signup", authMiddleware.isNotAuthenticated, authController.signup);
router.post(
  "/signup",
  authMiddleware.isNotAuthenticated,
  upload.single("image"),
  authController.doSignup
);

router.get("/login", authMiddleware.isNotAuthenticated, authController.login);
router.post(
  "/login",
  authMiddleware.isNotAuthenticated,
  authController.doLogin
);

router.get("/logout", authMiddleware.isAuthenticated, authController.doLogout);

router.get("/explore", authMiddleware.isAuthenticated, userController.explore);
router.get(
  "/timeline",
  authMiddleware.isAuthenticated,
  userController.timeline
);
router.get(
  "/notifications",
  authMiddleware.isAuthenticated,
  userController.notifications
);
router.get(
  "/settings",
  authMiddleware.isAuthenticated,
  userController.settings
);
router.get("/profile", authMiddleware.isAuthenticated, userController.profile);
router.get("/edit", authMiddleware.isAuthenticated, userController.editProfile);
router.post(
  "/edit",
  authMiddleware.isAuthenticated,
  userController.doEditProfile
);
router.get(
  "/editPassword",
  authMiddleware.isAuthenticated,
  userController.editPassword
);
router.post(
  "/editPassword",
  authMiddleware.isAuthenticated,
  userController.doEditPassword
);
router.get(
  "/profile/:id",
  authMiddleware.isAuthenticated,
  userController.peopleProfile
);

router.post(
  "/profile/:id/follow",
  authMiddleware.isAuthenticated,
  followController.follow
);

router.get("/new-post", authMiddleware.isAuthenticated, postController.newPost);
router.post(
  "/new-post",
  authMiddleware.isAuthenticated,
  upload.single("image"),
  postController.doNewPost
);
router.delete("/posts/:id/delete", postController.doDelete);
router.post(
  "/posts/:id/like",
  authMiddleware.isAuthenticated,
  postController.like
);

module.exports = router;
