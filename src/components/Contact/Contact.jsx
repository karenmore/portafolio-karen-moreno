import React from 'react'
import './syles/Contact.css'

const Contact = () => {
    return (
        <div className='container__register1'>
            <h2 className='register__name'>Contacto</h2>
            <div className='container__register'>
                <form className='register__formulario'>
                    <label className='register__label'>
                        <input type="text" placeholder='Nombre' />
                    </label>
                    <label className='register__label'>
                        <input type="text" placeholder='Empresa' />
                    </label>
                    <label className='register__label'>
                        <input type="email" placeholder='Email' />
                    </label>

                        <textarea className='texarea'
                        placeholder='Comentario'
                        ></textarea>

                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact