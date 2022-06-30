const argon2 = require("argon2");

// pour le hashage des passwords

const jwt = require("jsonwebtoken");

// pour créer des tokens d'authentification

const models = require("../models");

require("dotenv").config();

// Pour les variables d'environnement

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// paramètres de hashage de argon2

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (password, hashedPassword) => {
  return argon2.verify(hashedPassword, password);
};

class AuthController {
  static signin = async (req, res) => {
    const { email, password, pseudo } = req.body;

    try {
      const hash = await hashPassword(password);

      await models.users.insert({
        email,
        hashedpassword: hash,
        pseudo,
      });

      res.status(201).json("user created successfully ");
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  };

  static login = async (req, res) => {
    try {
      const userExist = await models.users.findOne(req.body.email);
      if (!userExist) {
        return res.status(400).send({ error: "Email or Password is wrong" });
      }

      const validPass = await verifyPassword(
        req.body.password,
        userExist.hashedpassword
      );
      if (!validPass) {
        return res.status(400).send("Email or Password is wrong");
      }

      const user = await models.users.find(userExist.id);

      const token = jwt.sign(
        {
          email: userExist.email,
          pseudo: userExist,
        },
        process.env.PRIVATETOKEN
      );

      return res
        .status(201)
        .cookie("user_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })
        .json({
          ...user,
          email: userExist.email,
          id: userExist.id,
          pseudo: userExist.pseudo,
        });
    } catch (err) {
      console.error(err);
      return res.status(401).send(err);
    }
  };
}

module.exports = AuthController;
