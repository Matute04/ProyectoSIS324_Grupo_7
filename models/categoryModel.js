const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

const createCategory = (name, callback) => {
  db.run(`INSERT INTO categories (name) VALUES (?)`, [name], function(err) {
    callback(err, this.lastID);
  });
};

const getCategoryById = (id, callback) => {
  db.get(`SELECT * FROM categories WHERE id = ?`, [id], callback);
};

const getAllCategories = (callback) => {
  const query = 'SELECT * FROM categories';
  db.all(query, [], (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

module.exports = { createCategory, getCategoryById, getAllCategories };