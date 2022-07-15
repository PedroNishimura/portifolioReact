import React, { useState } from 'react'
import Projetos from './components/js/Projetos'

import "./App.css"
import Menus from './components/js/Menus'

const App = () => {
    const [menus, setMenus] = useState([
        {
            id: 1,
            name: 'Projetos'
        },
        {
            id: 2,
            name: 'Curriculo'
        },
        {
            id: 3,
            name: 'Certificados'
        },
        {
            id: 4,
            name: 'Sobre'
        }
    ])

    const [projetos, setProjetos] = useState([
        {
            id: 1,
            name: 'KDK-Report'
        },
        {
            id: 2,
            name: 'Coviduana'
        },
        {
            id: 3,
            name: 'Ourana'
        }
    ])

    return (
        <>
            <div className="cabecalho">
                <ul>
                    <Menus menus={menus}/>
                </ul>
            </div>

            <div className="corpo">
            </div>

            <div className="rodape">
            </div>
        </>
    )
}

export default App 