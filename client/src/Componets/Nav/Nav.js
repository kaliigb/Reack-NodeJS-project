import React from 'react';
import Styles from './Nav.module.css';
import Link from '../Link/Link';

function Nav() {
  if(window.location.pathname ==='/Product' || window.location.pathname ==='/about'){
    
  return (
    <nav className={Styles.nav}>
      <div>
        {/* <Link linkText="login" link="/Login" /> */}
        {/* <Link linkText="signup" link="/" /> */}
        <Link linkText="product_list" link="/Product" />
        <Link linkText="About" link="/about" />
      </div>
    </nav>
  );
}
}

export default Nav;
