const express = require("express");

const { ItemController, AuthController } = require("./controllers");

const {
  LoginValidation,
  SigninValidation,
  checkAuth,
} = require("./middleware/Users");

const router = express.Router();

router.post("/login", LoginValidation, checkAuth, AuthController.login);
router.post("/signin", SigninValidation, AuthController.signin);

router.get("/dashboard", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
