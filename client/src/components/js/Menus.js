import React from "react";

import '../css/Menus.css'

const Menus = ({ menus }) => {
    var chamaTela = (id) => {
        alert(id)
    }

    return (
        menus.map((menu, index) => (
            <li><a id={menu.id} onClick={() => this.chamaTela(menu.id)}>{menu.name}</a></li>
        ))
    )
}

export default Menus 