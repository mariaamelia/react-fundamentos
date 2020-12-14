import React from 'react'
import If, { Else } from './If'
export default props => {
    const usuario = props.usuario || {}
    console.log(usuario)
    return (
        <div>
        
            <If test={usuario && usuario.nome}>
                    Seja bem vindo <strong>{usuario.nome}</strong>!<br/>
                <Else>
                    Seja Benvindo <strong>Amigo</strong>!
                </Else>
            </If>
        </div>
    )

}