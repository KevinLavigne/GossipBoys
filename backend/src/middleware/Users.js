const Joi = require("joi");
const jwt = require("jsonwebtoken");

// joi pour structurer et valider les données

const signinValidation = (req, res, next) => {
  const { error } = Joi.object({
    pseudo: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    }),

    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const loginValidation = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    }),

    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const checkAuth = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(req.cookies.user_token, process.env.PRIVATETOKEN, (err) => {
      if (err) {
        console.warn(err);
        res.status(401).send("You don t have the correct rights");
      } else next();
    });
  } else {
    res.status(401).send("You don t have the correct rights");
  }
};

module.exports = {
  signinValidation,
  loginValidation,
  checkAuth,
};
