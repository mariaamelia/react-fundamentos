import React, { useState } from 'react'
import Display from './Display'
import Botao from './Botao'
import MegasenaForm from './MegasenaForm' 
import  './index.css'
export default (props) => {

    const [valor, setValor] = useState(props.qtd || 6)
    const [valoresGerados, setValoresGerados] = useState([])
   
    const sorteia = () => { return Math.floor(Math.random() * 60) + 1; }

    function gera(qtd) {
        var numeros = [];
        var index = 0
        while (index < qtd) {
            var numGerado = sorteia()
            if (numeros.indexOf(numGerado) == -1) {
                numeros.push(numGerado);
                index++
            }
        }
        var numerosSorte =  numeros.sort((a, b) => { return a - b })
        setValoresGerados(numerosSorte)
    }

    const onchangeGeraValor = () =>{


        
    } 
    return (
        <div> 
            Megasena
            
            <MegasenaForm  valorRecebido={valor} onChangeValor={(e)=>{
                setValor(e)
                gera(e)
                }}></MegasenaForm>      
            <Botao geraValor={()=>{gera(valor)}} ></Botao>
            <Display valoresGerados={valoresGerados.join(" , ")}></Display>
        </div>


    )


}






