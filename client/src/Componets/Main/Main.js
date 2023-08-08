import React, { useRef, useState } from "react";
import Styles from "./Main.module.css";
import Product from "../Product_list/Product";
import About from '../About/About';
 import Signup from '../Form/Signup';
import Login from '../Form/Login';



function Main() {
  let component
  switch (window.location.pathname){
    case '/':
      component = <Signup/>
    break;
    case'/Login':
    component = <Login/>
    break;
    case'/Product':
    component = <Product/>
    break;
    case'/about':
    component = <About/>
    break;

    
  }
  
    return <div className={Styles.container}>{component}</div>;
}

export default Main;
