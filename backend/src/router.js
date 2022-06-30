const express = require("express");

const {
  ItemController,
  AuthController,
  mailerController,
  TopicsController,
} = require("./controllers");

const {
  loginValidation,
  signinValidation,
  checkAuth,
} = require("./middleware/Users");

const router = express.Router();

router.post("/login", loginValidation, checkAuth, AuthController.login);
router.post("/signin", signinValidation, AuthController.signin);

router.get("/dashboard", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/sendEmail", mailerController.sendMail);

router.get("/topics", TopicsController.browse);
router.get("/topics/:id", TopicsController.read);

module.exports = router;
