const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  findOne(email) {
    return this.connection
      .query(`SELECT * FROM ${this.table} WHERE email = ?`, [email])
      .then((user) => user[0][0]);
  }

  insert({ id, email, hashedpassword, pseudo }) {
    return this.connection.query(
      `INSERT INTO ${this.table} (id, email, hashedpassword,pseudo) VALUES (?, ?, ?, ? )`,
      [id, email, hashedpassword, pseudo]
    );
  }
}
module.exports = UsersManager;
