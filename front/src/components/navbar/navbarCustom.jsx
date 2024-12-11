import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavbarCustom = () => {
  return (
    
    <nav className="navBar">
        <div className="titleNav">
            <img src="./public/img/icons/iconPokebola.png" alt="" className="icon_poke" />
            <h1 className="title_nav_h1">POKEDEX</h1>
        </div>
        <div className="container_search">
            <div className="container_item-search container_item-search--change">
                <i className="fa-solid fa-bars" id="icon_menu"></i>
            </div>
            
            <div className="container_item-search container_item-search--no_ver">
                <Link to={"/quiz"} className="item_search">
                    <i className="fa-regular fa-circle-question"></i>
                </Link>
            </div>
            <img src="./public/img/icons/iconPokebola.png" alt="" className="icon_poke" /> 
        </div>
    </nav>
  )
}

export default NavbarCustom