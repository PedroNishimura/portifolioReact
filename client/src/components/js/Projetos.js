import React from "react";

import '../css/Projetos.css'

const Projetos = ({ projetos }) => {
    return (
        <div className="projeto-card">
            {projetos.map((project, index) => (
                <p>{project.name}</p>
            ))}
        </div>
    )
}

export default Projetos 