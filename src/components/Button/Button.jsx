import React from 'react';
import './Button.css';

const Button = (props) => {
  const { children, className, disabled, ...rest } = props;

  return (
    <button
      className={`button ${className} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;
