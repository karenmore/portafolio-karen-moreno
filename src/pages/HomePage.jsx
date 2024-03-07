import React from 'react'
import Presentation from '../components/Presentation/Presentation'
import Perfil from '../components/Presentation/Perfil'
import './syles/HomePage.css'

const HomePage = () => {
  return (
    <div className='container'>
      <Presentation  className='presentation'/>
      <Perfil className='perfil' />
    </div>
  )
}

export default HomePage
