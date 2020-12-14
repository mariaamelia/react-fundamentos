import React from 'react'

export default (props) => {

    return (<div>
        <label htmlFor="Infome a qtd de numeros a gerar">Infome a qtd de numeros a gerar</label>
        <input type="number" value={props.valorRecebido} min={1} max={60}
        onChange={(e) =>{ props.onChangeValor(e.target.value)}}></input>
    </div>)

}