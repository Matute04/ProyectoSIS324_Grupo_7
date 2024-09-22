const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

const sql = `
    INSERT INTO products (name, categoryId, size, color, price, stock) VALUES
    ('Zapatillas de correr', 1, 'M', 'Rojo', 59.99, 100),
    ('Zapatillas de baloncesto', 1, 'L', 'Negro', 79.99, 50),
    ('Zapatillas de entrenamiento', 1, 'M', 'Azul', 69.99, 75),
    ('Zapatillas de fútbol', 1, 'L', 'Verde', 89.99, 30),
    ('Zapatillas de senderismo', 1, 'M', 'Gris', 79.99, 40),
    ('Zapatos de cuero', 2, 'M', 'Negro', 119.99, 20),
    ('Zapatos de vestir', 2, 'L', 'Marrón', 109.99, 15),
    ('Zapatos oxford', 2, 'M', 'Negro', 129.99, 10),
    ('Zapatos mocasines', 2, 'M', 'Marrón', 99.99, 25),
    ('Zapatos de charol', 2, 'L', 'Negro', 139.99, 5),
    ('Zapatillas deportivas', 1, 'M', 'Blanco', 49.99, 100),
    ('Zapatillas de yoga', 1, 'S', 'Rosa', 39.99, 60),
    ('Zapatillas de ciclismo', 1, 'M', 'Negro', 99.99, 30),
    ('Zapatillas de escalada', 1, 'S', 'Verde', 89.99, 20),
    ('Zapatillas de patinaje', 1, 'M', 'Azul', 79.99, 25),
    ('Zapatos de verano', 2, 'L', 'Beige', 79.99, 15),
    ('Botines', 2, 'M', 'Negro', 119.99, 10),
    ('Zapatos de campo', 2, 'L', 'Marrón', 109.99, 10),
    ('Zapatos de oficina', 2, 'M', 'Negro', 129.99, 5),
    ('Zapatos de fiesta', 2, 'L', 'Dorado', 149.99, 5),
    ('Zapatillas para caminar', 1, 'M', 'Azul', 59.99, 40),
    ('Zapatillas de crossfit', 1, 'M', 'Negro', 79.99, 20),
    ('Zapatillas de esquí', 1, 'L', 'Blanco', 139.99, 10),
    ('Zapatillas de surf', 1, 'M', 'Verde', 89.99, 30),
    ('Zapatillas de trekking', 1, 'L', 'Marrón', 99.99, 15),
    ('Zapatos de ceremonia', 2, 'M', 'Negro', 159.99, 5),
    ('Zapatos de bailar', 2, 'S', 'Rojo', 99.99, 20),
    ('Zapatos de rugby', 1, 'L', 'Rojo', 69.99, 50),
    ('Zapatillas de voleibol', 1, 'M', 'Negro', 79.99, 40),
    ('Zapatillas de boxeo', 1, 'M', 'Rosa', 49.99, 60),
    ('Zapatillas de natación', 1, 'S', 'Verde', 39.99, 80),
    ('Zapatos de lona', 2, 'M', 'Blanco', 39.99, 100),
    ('Zapatos de ballet', 2, 'S', 'Negro', 29.99, 70),
    ('Zapatos de campo', 2, 'M', 'Verde', 119.99, 10),
    ('Zapatos casuales', 2, 'L', 'Beige', 79.99, 25),
    ('Botas de lluvia', 2, 'M', 'Negro', 89.99, 15),
    ('Zapatillas de fútbol sala', 1, 'M', 'Rojo', 59.99, 50),
    ('Zapatillas de tenis', 1, 'L', 'Azul', 69.99, 30),
    ('Zapatillas de ciclismo de montaña', 1, 'M', 'Gris', 79.99, 25),
    ('Botas de montaña', 1, 'L', 'Marrón', 139.99, 10),
    ('Zapatillas de correr para niños', 1, 'S', 'Azul', 29.99, 50),
    ('Zapatillas de ballet para niñas', 2, 'S', 'Rosa', 19.99, 60),
    ('Zapatillas de fiesta para niñas', 2, 'S', 'Dorado', 39.99, 15),
    ('Zapatillas de verano para niños', 2, 'M', 'Beige', 49.99, 20);
  `;

db.serialize(() => {
    db.run(sql);
});

db.close();