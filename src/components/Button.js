import React from "react";

function Button({description, string, bool}){
    return (
        <button
            disabled={bool}
            onClick={()=> console.log({string})}
        >{description}
        </button>
    )
}

export default Button;