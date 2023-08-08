import React from "react";
import Button from "../Button/Button";

function Table({ products, handleDelete, handleUpdate }) {
  return (
    <table>
      <thead>
        {/* Table header with column titles */}
        <tr>
          <th>Catalog Number</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Loop through the 'products' array and render a table row for each product */}
        {products.map((product, index) => (
          <tr key={product.catalogNumber + "_" + index}>
            {/* Display product information in each column */}
            <td>{product.catalogNumber}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            {/* Render two buttons in the last column */}
            <td>
              {/* 'handleDelete' function is called with the product's catalog number when 'Delete' button is clicked */}
              <Button
                onClick={() => handleDelete(product.catalogNumber)}
                text="Delete"
              />
              {/* 'handleUpdate' function is called with the product's catalog number when 'Update' button is clicked */}
              <Button
                onClick={() => handleUpdate(product.catalogNumber)}
                text="Update"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
