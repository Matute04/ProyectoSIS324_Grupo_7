const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

const createProduct = (name, categoryId, size, color, price, stock, callback) => {
    db.run(`INSERT INTO products (name, categoryId, size, color, price, stock) VALUES (?, ?, ?, ?, ?, ?)`, [name, categoryId, size, color, price, stock], function(err){
        callback(err, this.lastID);
    });
};

const updateProduct = (id, name, categoryId, size, color, price, stock, callback) => {
    db.run(
        `UPDATE products 
         SET name = ?, categoryId = ?, size = ?, color = ?, price = ?, stock = ?
         WHERE id = ?`,
        [name, categoryId, size, color, price, stock, id],
        function(err) {
            callback(err, this.changes);
        }
    );
};

const deleteProduct = (id, callback) => {
    db.run(`DELETE FROM products WHERE id = ?`, [id], function(err) {
        callback(err, this.changes);
    });
};

const getProductById = (id, callback) => {
    db.get(`SELECT * FROM products WHERE id = ?`, [id], callback);
};

const getAllProducts = (callback) => {
    const query = 'SELECT * FROM products';
    db.all(query, [], (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

module.exports = { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct};