const db = require('../Router/productConnection');

// Function to fetch all products from the database
async function getAllProducts() {
  try {
    const sql = "SELECT * FROM products";
    const [rows] = await db.promise().query(sql);
    // console.log("First character of the name:", rows); // Printing the first character of the name
    return rows;
  } catch (error) {
    throw error;
  }
}

// Function to add a new product to the database
async function addProduct(catalogNumber, name, price, quantity) {
  try {
    const sql = 'INSERT INTO products (catalogNumber, name, price, quantity) VALUES (?, ?, ?, ?)';
    const values = [catalogNumber, name, price, quantity];
    await db.promise().query(sql, values);
  } catch (error) {
    throw error;
  }
}

// Function to update a product in the database
async function updateProduct(catalogNumber, name, price, quantity) {
  try {
    const sql = 'UPDATE products SET name = ?, price = ?, quantity = ? WHERE catalogNumber = ?';
    const values = [name, price, quantity, catalogNumber];
    await db.promise().query(sql, values);
  } catch (error) {
    throw error;
  }
}

// Function to delete a product from the database
async function deleteProduct(catalogNumber) {
  try {
    const sql = 'DELETE FROM products WHERE catalogNumber = ?';
    await db.promise().query(sql, catalogNumber);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
