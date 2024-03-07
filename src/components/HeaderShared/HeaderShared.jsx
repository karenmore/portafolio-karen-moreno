import React, { useEffect , useContext} from 'react'
import './syles/HeaderShared.css'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { ThemeContext } from './ThemeContext'


const HeaderShared = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      const closeMenu = () => {
        if (isOpen) {
          setIsOpen(false);
        }
      };
  
      document.querySelectorAll('.nav a').forEach((item) => {
        item.addEventListener('click', closeMenu);
      });
  
      return () => {
        document.querySelectorAll('.nav a').forEach((item) => {
          item.removeEventListener('click', closeMenu);
        });
      };
    }, [isOpen]);

  
    return (
        <div  className='contenedor-header'>
        <header>
            <div className="logo">
                <a href="#">Karen</a>
            </div> 
            <nav className={`nav ${isOpen ? '' : 'responsive'}`}>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to="/skills">Habilidades</Link></li>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <div className='fondo'>
                    <a className="icon icon_mode" onClick={toggleDarkMode}>
                                <ion-icon name={darkMode ? 'moon-sharp' : 'sunny-sharp'}></ion-icon>
                    </a>
                    <a className="icon icon_cv" href="./src/public/Kmoreno_CV.pdf" download="Kmoreno_CV.pdf"><ion-icon name="document-text-sharp"></ion-icon></a>
                    </div>
                </ul>
            </nav>
            <div className="nav-responsive" onClick={toggleMenu}>
                <a href="#" className="bnt__menu"><box-icon name='menu-alt-right'></box-icon></a>
            </div>
        </header>
    </div>
    );
  }

export default HeaderShared
