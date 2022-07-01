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
  
  getTopicsByUserId(usersId) {
    return this.connection.query(
      `select t.id, t.title, t.date, t.reaction, t.category, t.users_id, u.email, u.id, u.pseudo from ${TopicsManager.table} as t
        inner join users as u on t.users_id = u.id 
        where t.id = ?`,
      [usersId]
    );
  }
}

module.exports = TopicsManager;
