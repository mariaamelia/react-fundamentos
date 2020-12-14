import  React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{
    return (
        <div>
            <DiretaFilho nome="Junior " idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Marcelo " idade={17} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Ana " idade={12} nerd={true}></DiretaFilho>

        </div>
    )
}