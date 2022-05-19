import React from "react";

function Tile({img, title, head, text1, text2}) {
    if (img) {
        return (
            <section>
                <img src={img} alt={title}/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>{head}</h2><br/>
                <p>{text1}</p><br/>
                <p>{text2}</p>
            </section>)
    }
}

export default Tile;