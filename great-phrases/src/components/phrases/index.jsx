import React, {useEffect, useState} from 'react';

import './phrasesStyle.css'

import http from '../../config'

import db from '../../db/db.js'

import RequestPhraseBtn from './requestPhraseBtn';
import ShowBoxPhrase from './showBoxPhrase';

const Phrases = (props) => {

    const [frase, setFrase] = useState([]);

    function retornaFrases(){

        const randomNumId = Math.floor(Math.random() * db.length);

        const pensador = db.filter(v => v.id == randomNumId)

        const pesquisa = pensador.map(v => v.nome).toString();

        http.get(`/?term=${pesquisa}&max=20`)
        .then((res) => {
            const pensamentos = res.data.frases;
            const randomNumPhrase = Math.floor(Math.random() * pensamentos.length);
            setFrase(pensamentos.filter((v, i) => i === randomNumPhrase))
        }).catch((err) => {
            console.log('Erro:', err);
        });
    };
    
    useEffect(() => {
        retornaFrases();
    }, []);

    return (
        <div className='d-flex align-items-center container-div vh-100'>
            <div className='row justify-content-center w-100 m-auto'>
                <section className='col-12 d-flex justify-content-center'>
                    <ShowBoxPhrase 
                        frase={frase ? frase.map(v => v.texto) : ''}
                        autor={frase ? frase.map(v => v.autor) : ''}
                    />
                </section>
                <section className='col-auto'>
                    <RequestPhraseBtn 
                    funcao={retornaFrases}
                    />
                </section>
            </div>
        </div>
    );
};

export default Phrases;
