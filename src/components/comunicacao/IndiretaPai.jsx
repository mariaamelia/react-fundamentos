import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    //Passando  propriedades do filho para o pai  -  nome idade nerd
    let [nome, setNome] = useState("?")
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)

    function fornecerInformações(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)
    }
    return (
        <div>
            <span>{nome}</span>
            <span><strong>{idade}</strong></span>
            <span>{nerd?"Verdadeiro" :"Falso"}</span>
            <IndiretaFilho quandoClicar={fornecerInformações}></IndiretaFilho>
        </div>
    )
}