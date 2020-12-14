import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (<div>
        <FamiliaMembro nome="Maria" sobreNome={props.sobreNome}></FamiliaMembro>
        <FamiliaMembro nome="Edite" sobreNome="Silva"></FamiliaMembro>
        <FamiliaMembro  nome="ana"  {...props} ></FamiliaMembro>

    </div>)

}