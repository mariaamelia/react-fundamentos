import React from 'react'
import Alunos from "../../data/alunos"

export default props => {
    const listagem = Alunos.map((aluno) => {
        return (
            <li key={aluno.id}> {aluno.nome} : {aluno.nota}</li>
        )
    })


return (
    <div >
        <ul style={{ listStyle:"none"}}>
            {listagem}
        </ul>
    </div>
)

}