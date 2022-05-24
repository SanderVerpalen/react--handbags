import React from "react";

function Tile({img, title, head, text}) {
    text = Array.isArray(text) ? text : [text];
    return (
        <section>
            <h2>{head}</h2>
            {
                text.map((text) => <p>{text}</p>
                )}
            <img src={img} alt={title}/>
        </section>)
}

export default Tile;