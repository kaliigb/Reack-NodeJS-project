import React from 'react';
import Styles from "./Button.module.css";

function Button({ onClick, text }) {
  return (
    <div className={Styles.container}>
      <button onClick={onClick}>{text}</button> 
    </div>
    
  );
}

export default Button;
