import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './syles/Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    empresa: '',
    user_email: '',
    user_message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    if(isSubmitting){
      return;
    }

    if (!formData.user_name || !formData.empresa || !formData.user_email || !formData.user_message) {
      toast.error('Por favor, complete todos los campos');
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm('service_m2ka8f6', 'template_ehy76ad', event.target, 'EQ87DH8m1j7RntxiJ')
      .then(response => {
        console.log(response);
        toast.success('Correo enviado con éxito');
        setFormData({
          user_name: '',
          empresa: '',
          user_email: '',
          user_message: ''
        });
      })
      .catch(error => {
        console.log(error);
        toast.error('Error al enviar el correo');
      })
      .finally(() =>{
        setIsSubmitting(false)
      })
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }


    return (
        <div className='container__register1'>
            <h2 className='register__name'>Contacto</h2>
            <div className='container__register'>
                <form className='register__formulario'onSubmit={sendEmail} >
                    <label className='register__label'>
                        <input type="text" 
                        name='user_name'
                        placeholder='Nombre' 
                        value={formData.user_name}
                        onChange={handleInputChange}/>
                    </label>
                    <label className='register__label'>
                        <input type="text" 
                        name='empresa'
                        placeholder='Empresa'
                        value={formData.empresa} 
                        onChange={handleInputChange}/>
                    </label>
                    <label className='register__label'>
                        <input type="email" 
                        name='user_email'
                        placeholder='Email' 
                        value={formData.user_email}
                        onChange={handleInputChange}/>
                    </label>

                        <textarea className='texarea'
                        name='user_message'
                        placeholder='Comentario'
                        value={formData.user_message}
                        onChange={handleInputChange}
                        ></textarea>

                    <button type='submit' disabled={isSubmitting}>  {isSubmitting ? 'Enviando...' : 'Enviar'}</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact