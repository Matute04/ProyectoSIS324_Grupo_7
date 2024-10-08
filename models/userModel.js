const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

const createUser = (username, password, callback) => {
  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], function(err) {
    callback(err, this.lastID);
  });
};

const getUserByUsername = (username, callback) => {
  db.get(`SELECT * FROM users WHERE username = ?`, [username], callback);
};

module.exports = { createUser, getUserByUsername };
