import React from 'react'
import './syles/Skills.css'

const Skills = () => {
    return (
        <div class='container__skills'>
            <h2 class='skills__title'>Habilidades</h2>
            <div className='container__skills2'>
                <div class='card1'>
                    <img class='card' src="/html5.png" alt="HTML5" />
                    <div className='skills__description'>
                        <p><span>HTML: </span>Lenguaje de marcado que se utiliza para crear la estructura y el contenido de las páginas web</p>
                    </div>
                </div>
                <div class='card1'>
                    <img class='card' src="/css3.png" alt="CSS3" />
                    <div className='skills__description'>
                        <p><span>CSS: </span> Lenguaje de estilos que se utiliza para dar formato y diseño a las páginas web, controlando la apariencia visual.</p>
                    </div>
                </div>
                <div class='card1'>
                    <img class='card' src="/react.png" alt="React" />
                    <div className='skills__description'>
                        <p><span>React: </span> Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables en aplicaciones web.</p>
                    </div>
                </div>
                <div class='card1'>
                    <img class='card' src="/JavaScript.png" alt="JavaScript" />
                    <div className='skills__description'>
                        <p><span>JavaScript: </span>Lenguaje de programación que se utiliza para hacer que las páginas web sean interactivas y dinámicas, permitiendo realizar acciones en el navegador del usuario.</p>
                    </div>
                </div>
                <div class='card1'>
                    <img class='card' src="/nodejs.png" alt="Node.js" />
                    <div className='skills__description'>
                        <p><span>Node.js: </span>Entorno de ejecución de JavaScript del lado del servidor que permite ejecutar código JavaScript, facilitando la creación de aplicaciones web escalables y rápidas.</p>
                    </div>
                </div>

                <div class='card1'>
                    <img class='card' src="/unir.png" alt="Git" />
                    <div className='skills__description'>
                        <p><span>Git: </span>Sistema de control de versiones ampliamente utilizado en el desarrollo de software. Permite realizar un seguimiento de los cambios en el código.</p>
                    </div>
                </div>
                <div class='card1'>
                    <img class='card' src="/base-de-datos.png" alt="sql" />
                    <div className='skills__description'>
                        <p><span>SQL: </span>Lenguaje de consulta estructurado utilizado manipular bases de datos. Permite realizar operaciones como consultar, insertar, actualizar y eliminar datos.</p>
                    </div>
                </div>
                <div class='card1'>
                    <img class='card' src="/152.png" alt="python" />
                    <div className='skills__description'>
                        <p><span>SQL: </span>Lenguaje de consulta estructurado utilizado para manipular bases de datos. Permite realizar operaciones como consultar, insertar, actualizar y eliminar datos.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Skills
