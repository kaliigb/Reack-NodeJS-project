import React, { useState, useEffect } from 'react';
import Styles from './product.module.css';
import Button from '../Button/Button';
import Table from '../Table/Table';

import Input from '../Input/input';
import { validateFormValues } from '../Validation/Validation'; // Import the validation function

export default function Product() {
  const [products, setProducts] = useState([]);
  const [formValues, setFormValues] = useState({
    catalogNumber: '',
    name: '',
    price: '',
    quantity: ''
  });
  const [error, setError] = useState(null); // State to hold error messages

  useEffect(() => {
    fetchProductList();
  }, []);

  function fetchProductList() {
    fetch('http://localhost:3001/Product')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Failed to fetch product list:', error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateFormValues(formValues); // Perform input validation

    if (validationError) {
      setError(validationError); // If validation fails, set the error message
      return; // Stop the form submission
    }

    // If validation passes, clear any previous error message
    setError(null);

    fetch('http://localhost:3001/Product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product added:', data);
        fetchProductList(); // Refresh the product list
      })
      .catch(error => {
        console.error('Product addition error:', error);
      });
  }

  function handleDelete(catalogNumber) {
    fetch(`http://localhost:3001/Product/${catalogNumber}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product deleted:', data);
        fetchProductList(); // Refresh the product list
      })
      .catch(error => {
        console.error('Product deletion error:', error);
      });
  }

  function handleUpdate(catalogNumber) {
    fetch(`http://localhost:3001/Product/${catalogNumber}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product updated:', data);
        fetchProductList(); // Refresh the product list
      })
      .catch(error => {
        console.error('Product update error:', error);
      });
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div className={Styles.productContainer}>
      <h1>List of Products</h1>
      {error && <p className={Styles.error}>{error}</p>} {/* Display the error message if exists */}
      <Table products={products} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      <form onSubmit={handleSubmit}>
        <Input name="catalogNumber" type="text" placeholder="Catalog Number" value={formValues.catalogNumber} onChange={handleChange} />
        <Input name="name" type="text" placeholder="Name" value={formValues.name} onChange={handleChange} />
        <Input name="price" type="text" placeholder="Price" value={formValues.price} onChange={handleChange} />
        <Input name="quantity" type="text" placeholder="Quantity" value={formValues.quantity} onChange={handleChange} />

        <div>
          <Button onClick={handleSubmit} text="Add" />
        </div>
      </form>
    </div>
  );
}
