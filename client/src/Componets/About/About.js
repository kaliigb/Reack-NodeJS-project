import React from 'react';
import Styles from './About.module.css';

function About() {
  return (
    <div className={Styles.container}>
      <h1>About</h1>
      <article>
        <p>Our project talks about a website where the user can interact with product data.</p>
        <p>The user can update, delete, and add products to the database table.</p>
        <p>The website includes a list that displays all the product items from the database.</p>
      </article>
    </div>
  );
}

export default About;

