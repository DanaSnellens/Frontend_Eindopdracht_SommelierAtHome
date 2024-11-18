import React from 'react';
import './Button.css';
function Button({ type, children, clickHandler, disabled, variant }) {
    return (
        <button type={type} disabled={disabled || false } onClick={clickHandler} className={variant === 'primary' ? 'button button-primary' : 'button button-invisible'}>
            {children}
        </button>
    );
}

export default Button;