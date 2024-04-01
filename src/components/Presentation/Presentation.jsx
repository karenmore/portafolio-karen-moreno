import React from 'react'
import './syles/Presentation.css'

const Presentation = () => {
    return (
        <div className='presentation__container'>
            <div className="marco">
            <article className='continer'>
                <img className='perfil' src="/img.png" alt="" />
            </article>
            </div>
            <div>
                <p className='new'>Desarrolladora Web Full Stack</p>
                <ul className="contacto">
                <a href='https://www.linkedin.com/in/karen-moreno-morales' target="_blank"><li className="icon__contac"><box-icon name='linkedin-square' type='logo' ></box-icon></li></a>
                <a href="https://wa.me/584141636906" target="_blank"><li className="icon__contac"><box-icon name='whatsapp-square' type='logo' ></box-icon></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Presentation