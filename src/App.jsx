
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import Fragmento from './components/Fragmento'
import Aleatorio from './components/aleatorio/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/familia/Familia'
import Familia2 from './components/Familia2/Familia'
import FamiliaMembro2 from './components/Familia2/FamiliaMembro'
import Alunos from './components/repeticao/ListaAlunos'
import ParOuImpar from './components/condicional/index'
import Usuario from './components/condicional/Usuario'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from  './components/Formulario/Input'
import Contador from './components/contador/Contador'
import Megasena from './components/megasena/Megasena'

import './index.css'
import './App.css'

export default _ =>

    <div id="App" className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Megasena" color="#FFE600 ">
                <Megasena  qtd={8}/>
            </Card>
            <Card titulo="#12 - Contador" color="#59323C">
                <Contador numeroInicial={10}/>
            </Card>
            <Card titulo="#11 - Componente Controlado" color="#59323C">
                <Input />
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#75EB00">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#9 - Comunicação Direta" color="#542733">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#8 - Condicional" color="#4343b3">
                <ParOuImpar numero={2}></ParOuImpar>
                <ParOuImpar numero={3}></ParOuImpar>
                <Usuario usuario={{ nome: 'amelia' }}></Usuario>
                <Usuario usuario={{}}></Usuario>
            </Card>

            <Card titulo="#7-Lista de Repetição" color="#4343b3">
                <Alunos></Alunos>
            </Card>

            <Card titulo="#6- Componente com filhos - automatico" color="#d81850">
                <Familia2 sobreNome="Nascimento">
                    <FamiliaMembro2 nome="Maria"></FamiliaMembro2>
                    <FamiliaMembro2 nome="Edite"></FamiliaMembro2>
                    <FamiliaMembro2 nome="ana" ></FamiliaMembro2>
                </Familia2>
            </Card>
            <Card titulo="#5- Componente com filhos" color="#97db98">
                <Familia sobreNome="Santos" />
            </Card>

            <Card titulo="#4 - Desafio Aleatorio" color="#3785b8">
                <Aleatorio max={10} min={2} />
            </Card>
            <Card titulo="#3 - Fragmento" color="#b32750">
                <Fragmento />
            </Card>
            <Card titulo="#2 - Nome e Sobrenome" color="#008798">
                <ComParametro nome="Maria" ultimoNome="Santos"></ComParametro>
            </Card>
            <Card titulo=" #1 - Primeiro" color="#83AA30">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
