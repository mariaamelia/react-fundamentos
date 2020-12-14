import React from 'react'

export default function ComParametro(props) {
    return (
        <div>
            <h1> {props.nome}</h1>
            <h1>{props.ultimoNome}</h1>
        </div>
    )
}