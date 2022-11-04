import React from "react";

import { memotecaExport } from "../../../config";

const PostPhraseMemoteca = (props) => {

    const dataToSend = {
        conteudo: props.conteudo,
        autoria: props.autoria,
        modelo: 'modelo1'
    };

    const postMemoteca = () => {

        memotecaExport.post('', dataToSend)
        .then((res) => {
            alert('Exportado com sucesso!');
        }).catch((err) => {
            alert('Erro ao exportar!');
            console.log(err);
        });
    };

    return(
        <button 
            className="btn btn-dark m-2" 
            style={{width: '9rem', fontSize: '1.2rem'}}
            onClick={() => postMemoteca()}
        >
            Exportar para Memoteca
        </button>
    );
};

export default PostPhraseMemoteca;
