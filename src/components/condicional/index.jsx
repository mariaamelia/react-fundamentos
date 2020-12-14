
import React from 'react'
export default props => {
    const isPar = props.numero % 2 === 0
    return (
        <div>
            <div>
                <h2><span>Numero informado : {props.numero}</span></h2>
            </div>
            {isPar ? <span>Par</span> : <span>Impar</span>
            }
        </div>
    )
}