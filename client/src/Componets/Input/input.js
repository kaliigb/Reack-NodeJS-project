import React from 'react';

function Input({name,type,placeholder,value,onChange}) {
  return (
   <input name={name}
   type={type}
   value={value}
   placeholder={placeholder}
   onChange={onChange}/>
  );
}

export default Input;
