import React from 'react';
import '../Stylesheets/Button.css';

function Button({ text, isClick, handleClick }){
    return(
        <button
        className={isClick ? "click-button" : "restart-button"}
        onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default Button;