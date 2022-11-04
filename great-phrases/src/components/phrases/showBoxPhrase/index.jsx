import React from "react";

import './showBoxPhraseStyle.css'

const ShowBoxPhrase = (props) => {

    return(
        <div className="container-phrase m-2 p-4">
            <p>• {props.frase}</p>
            <p>- {props.autor}</p>
        </div>
    )
};

export default ShowBoxPhrase;
