import React from 'react'
import './Button.css'

const Button = ({label, styleName, className}) => {
  return (
    <button className={`${styleName} ${className}`}>
      {label}
    </button>
  );
}

export default Button