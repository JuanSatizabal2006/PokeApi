import React from 'react'
import '../assets/css/customCard.css'

const CustomCard = ({}) => {


  return (
    <div className='containerCard'>
        <h2 className="cardName" id="cardName">charizard</h2>
        <div className="container_poke_img">
            <img className="imagen enlace_big" id="${pokeData.id}" src="./public/img/Charizard.png" alt="fondo_poke" />
            <img className="poke_img_fondo img_fondo_${categoria_color}" />
        </div>
        <div className="carta_info" id="carta_info">
            <div className="carta_info_numero">
                <p>#1</p>
            </div>
            <div className="carta_info_categoria"> 
                Agua
            </div>
        </div>    
        <div className="carta_estadisticas estadistica_borde_${categoria_color}">
            {
                /*
            <p className="hp">HP:${pokeData.stats[0].base_stat}</p>
            <p className="att">ATT:${pokeData.stats[1].base_stat}</p>
            <p className="def">DEF:${pokeData.stats[2].base_stat}</p>
                */
            }

            <p className="hp">HP:99999</p>
            <p className="att">ATT:$999999</p>
            <p className="def">DEF:$999999</p>
        </div>
    </div>
  )
}

export default CustomCard