const express = require('express');
const productRouter = express.Router();
const productController = require('../Controller.js/Product');

// Fetch all products
productRouter.get('/', async (req, res) => {
  try {
    // Call the getAllProducts function from the productController to fetch all products
    const products = await productController.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch product list:', error);
    res.status(500).json({ error: 'Failed to fetch product list' });
  }
});

// Add a new product
productRouter.post('/', async (req, res) => {
  const { catalogNumber, name, price, quantity } = req.body;
  try {
    // Call the addProduct function from the productController to add a new product
    await productController.addProduct(catalogNumber, name, price, quantity);
    res.json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Failed to add product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Update a product
productRouter.put('/:catalogNumber', async (req, res) => {
  const catalogNumber = req.params.catalogNumber;
  const { name, price, quantity } = req.body;
  try {
    // Call the updateProduct function from the productController to update the product
    await productController.updateProduct(catalogNumber, name, price, quantity);
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Failed to update product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
productRouter.delete('/:catalogNumber', async (req, res) => {
  const catalogNumber = req.params.catalogNumber;
  try {
    // Call the deleteProduct function from the productController to delete the product
    await productController.deleteProduct(catalogNumber);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Failed to delete product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = productRouter;
