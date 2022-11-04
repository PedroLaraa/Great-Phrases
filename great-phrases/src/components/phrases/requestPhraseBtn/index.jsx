import React from "react";

const RequestPhraseBtn = (props) => {

    return(
        <button 
            className="btn btn-dark m-2" 
            style={{width: '9rem', fontSize: '1.2rem'}}
            onClick={() => props.funcao()}
        >
            Outra frase...
        </button>
    );
};

export default RequestPhraseBtn;
