const AbstractManager = require("./AbstractManager");

class TopicsManager extends AbstractManager {
  static table = "topics";

  insert(topics) {
    return this.connection.query(
      `insert into ${TopicsManager.table} (title) values (?)`,
      [topics.title]
    );
  }

  update(topics) {
    return this.connection.query(
      `update ${TopicsManager.table} set title = ? where id = ?`,
      [topics.title, topics.id]
    );
  }
}

module.exports = TopicsManager;
