import React, { useEffect, useState } from 'react'
import '../assets/css/home.css'
import CustomCard from '../components/customCard'

const ListCustom = () => {

  const [linkApi, setLinkApi] = useState("https://pokeapi.co/api/v2/pokemon")

  useEffect(()=>{

    const fetchApi  = async () =>{

      const result = await fetch(linkApi);
      console.log(result);
      const data = await result.json()
      console.log(data);
      
    }

    fetchApi()
  },[linkApi])

  return (
    <main className='allContainer'>
      
      {[1,2,3,4,5,6,7,8].map((value, index)=> (
        <CustomCard  key={index} />
      ))}

    </main>
  )
}

export default ListCustom