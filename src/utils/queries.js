export const createCategoriesTable = `
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  description VARCHAR NOT NULL,
  keywords VARCHAR DEFAULT ''
  )
  `;

export const insertCategory = `
INSERT INTO categories(name, description, keywords)
VALUES ('Batata', 'Categoria boa demaais', 'Grande vegetal subterraneo'),
      ('Feijao', 'Categoria media', 'Grande leguminosa'),
      ('Arroz', 'Bom para comer', 'Grande arroz'),
      ('Legal', 'Chato as vezes', '')
`;

export const createProductsTable = `
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  price_box REAL NOT NULL,
  box_unit_size  INT NOT NULL,
  price_unit REAL NOT NULL,
  weight REAL NOT NULL,
  discount_per_volume REAL NOT NULL, 
  stock INT,
  description VARCHAR NOT NULL,
  keywords VARCHAR
  )
  `;

export const insertProduct = `
INSERT INTO products(category_id, name, price_box, box_unit_size, price_unit, weight, discount_per_volume, stock, description, keywords)
VALUES (1, 'gasolina', 65.7, 10, 6.5, 0.97, 10, 100, 'Produto inflamavel', 'gasolina, combustivel, carro'),
      (2, 'alcool', 47.1, 10, 5.1, 0.81, 10, 40, 'Produto inflamavel', 'alcool, combustivel, carro')
`;

export const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL
  )
  `;

export const insertUser =`
INSERT INTO users(name, email, password)
VALUES ('felipe', 'felipereisspirandelli@gmail.com', 'felipeelindo')
`;

export const dropCategoriesTable = 'DROP TABLE categories';
export const dropProductsTable = 'DROP TABLE products';
export const dropUsersTable = 'DROP TABLE users';
  