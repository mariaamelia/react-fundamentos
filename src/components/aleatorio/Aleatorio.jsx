import React from 'react'


export default (props) => {
    const { max, min } = props
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    return (
    <div>
        <h2>Valor Aleatorio</h2>
        <p><span><strong>Valor Minimo: </strong>{min}</span></p>
        <p><span><strong>Valor Máximo: </strong>{max}</span></p>
        <p><strong>Valor Escolhido : </strong>{result}</p>

    </div>)
}