import React from 'react';
import Login from '../Form/Login';
import Signup from '../Form/Login';
import Product from '../Form/Login';
import About from '../About/About'

function Link({ linkText, link }) {
  let component = null;

  switch (Link) {
    // case '/login':
    //   component = <Login />;
    //   break;
    // case '/signup':
    //   component = <Signup />;
      // break;
    // case '/product':
    //   component = <Product />;
    //   break;
    case '/about':
      component = <About />;
      break;
    // Add more cases for other links and corresponding components if needed

    default:
      component = null;
      break;
  }

  return (
    <div>
      <a href={link}>{linkText}</a>
      {component}
    </div>
  );
}

export default Link;
