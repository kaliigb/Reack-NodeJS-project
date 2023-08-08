import React from 'react';
import Nav from '../Nav/Nav';
import Styles from './Header.module.css'; // Import the CSS file

function Header(props) {
  return (
    <div className={Styles.header}>
      <h1>First Page</h1>
     <Nav/>
    </div>
  );
}

export default Header;
