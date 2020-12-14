import React, { useState } from 'react'


export default props => {
    const [valor, setValor] = useState("Inicial")
    const quandoMudar = (e) => setValor(e.target.value)

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <span> Componente Controlado: </span> <input value={valor} onChange={quandoMudar} /><br/>
           <span> Componente N Controlado: </span> <input value={undefined}  />
        </div>)

}