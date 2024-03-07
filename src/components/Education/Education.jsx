import React from 'react'
import './syles/Education.css'

const Education = () => {
  return (
    <div>
      
    <section className="curriculum">
        <div className="contenido-seccion">
            <div>
            <h2 className='title'>Educacion y experiencia Laboral</h2>
            </div>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Educación</h3>
                    <div className="item izq">
                        <h4>Desarrollo Web Full-Stack</h4>
                        <span className="casa">Academlo</span>
                        <span className="fecha">2023 - 2024</span>
                        <p>Durante 5 meses, realicé estudios y prácticas en Academlo, abarcando un módulo enfocado en Fundamentos de Programación, otro dedicado al Desarrollo Front-End, y uno más centrado en el Desarrollo Back-End.</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>Ing en Sistemas</h4>
                        <span className="casa">UNEFA</span>
                        <span className="fecha">2006 - 2012</span>
                        <p>Proceso académico de cinco años culminado con la obtención del título de Ingeniera en Sistemas</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>Cursos Realizados</h4>
                        <span className="casa">Udemy</span>
                        <span className="fecha">2019 - 2024</span>
                        <p>Curso de Git. Curso de Fundamentos de concoles de google. Programacion Orientada a Objetos 'Java'. Curso de Seguridad de Apis. Manejo del Tiempo.</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                </div>

                <div className="col derecha">
                    <h3>Experiencia Laboral</h3>
                    <div className="item der">
                        <h4>Desarrolladora Web Full Stack</h4>
                        <span className="fecha">2023 - 2024</span>
                        <p>Proyectos realizados los cuales esta en al sesion del Proyectos de este portafolio realizado por mi. Donde use, consumo de API, renderizado de informacion usando la biblioteca React, construccion de diagramas para la creacion de base de datos, creacion de API para estos mismo proyectos</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Ing De Soporte De Software</h4>
                        <span className="casa">Farmatodo</span>
                        <span className="fecha">2020 - 2024</span>
                        <p>Hoy en dia le doy Soporte al e-commerce de esta misma empresa, en la que he tenido la oportunidad de aprender de muchas tecnologías y herramientas que se usan en la actualizada ‘Tecnología de punta’</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Ing de Soporte de Aplicaciones</h4>
                        <span className="casa">Farmatodo</span>
                        <span className="fecha">2017 - 2020</span>
                        <p>Soporte de aplicaciones a una empresa del sector Retail, dando soporte al punto de venta.</p>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Education
