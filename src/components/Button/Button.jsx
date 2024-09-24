import React from "react";
import "./Button.css"

// children = text displayed on button
const Button = ({children, onClick}) =>  {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;