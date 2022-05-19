import React from "react";

function Product({span, image, imageTitle, bagName, price}) {
    return (
        <article>
            <span>{span}</span>
            <img src={image} alt={imageTitle}/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>

    )

}

export default Product