import React from 'react'
import '../assets/css/navbar.css'

const NavbarCustom = () => {
  return (
    
    <div className="navBar">
        <div className="titleNav">
            <img src="./public/img/icons/iconPokebola.png" alt="" className="icon_poke" />
            <h1 className="title_nav_h1">POKEDEX</h1>
        </div>
        <div className="container_search">
            <div className="container_item-search container_item-search--change">
                <i className="fa-solid fa-bars" id="icon_menu"></i>
                
            </div>
            
            <div className="container_item-search container_item-search--no_ver">
                <a href="pages/quiz.html" className="item_search"><i className="fa-regular fa-circle-question"></i></a>
            </div>

            <i className="fa-solid fa-filter" id="button_filters"></i>
            <img src="./public/img/icons/iconPokebola.png" alt="" className="icon_poke" /> 
        </div>
    </div>
  )
}

export default NavbarCustom