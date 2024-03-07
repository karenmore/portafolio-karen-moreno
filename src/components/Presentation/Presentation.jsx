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
                    <li className="icon__contac"><box-icon name='linkedin-square' type='logo' ></box-icon></li>
                    <li className="icon__contac"><box-icon name='whatsapp-square' type='logo' ></box-icon></li>
                </ul>
            </div>
        </div>
    )
}

export default Presentation