import Slider from 'react-slick'
import { useEffect, useState } from 'react'
import './syles/projects.css'

const Projects = () => {

  const data = `{
        "imagenes": [
          {
            "nombre": "Galleta De La Fortuna",
            "url": "https://galleta-fortuna-op0u.onrender.com",
            "imagen": "/galleta.png",
            "description": "Aplcacion Web para ver frases de forma aleatorias",
            "tecnologias": "React, Css",
            "id": 1,
            "repositorio": "https://github.com/karenmore/react.git"
          },
          {
            "nombre": "Proyecto del Clima",
            "url": "https://climate-project.onrender.com",
            "imagen": "/clima.png",
            "description": "Aplicacion Web para obtener informacion del clima de tu ubicacion o de otras ciudades, usando el consumo de API",
            "tecnologias": "React, Css, Api",
            "id": 2,
            "repositorio": "https://github.com/karenmore/weather.git"
          },
          {
            "nombre": "Rick And Morty",
            "url": "https://rick-and-morty-9muz.onrender.com",
            "imagen": "/RickAndMorty.png",
            "description": "App Web con informacion de los personajes de la serie Rick And Morty, usando el consumo de API",
            "tecnologias": "React, Css, Api",
            "id": 3,
            "repositorio": "https://github.com/karenmore/rick-and-morty.git"
          }
          ,
          {
            "nombre": "Pokemon",
            "url": "https://pokemon-cec6.onrender.com",
            "imagen": "/pokemon.png",
            "description": "App Web con informacion detalleda de Pokeon, usando el consumo de API",
            "tecnologias": "React, Css, Api",
            "id": 4,
            "repositorio": "https://github.com/karenmore/pokemon.git"
          }
          ,
          {
            "nombre": "Reserva de hotel",
            "url": "https://app-hotels.onrender.com",
            "imagen": "/app.png",
            "description": "App Web para hacer reserva de habitaciones en hoteles, La base de datos y la API que estoy consumiendo la construí durante el bootcamp",
            "tecnologias": "React, Css, Api",
            "id": 5,
            "repositorio": "https://github.com/karenmore/app.git"
          }
        ]
      }`



  //console.log(imagenes.imagenes)
  const imagenes = JSON.parse(data);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageness, setImagenes] = useState([]);
  const [imgSelected, setImgSelected] = useState(0);

  useEffect(() => {
    const imagesData = JSON.parse(data);
    setImagenes(imagesData.imagenes);
    setImagesLoaded(true);
  }, []);

  const nextSlide = () => {
    setImgSelected((prevImg) => (prevImg === imagenes.imagenes.length - 1 ? 0 : prevImg + 1));
  };

  const prevSlide = () => {
    setImgSelected((prevImg) => (prevImg === 0 ? imagenes.imagenes.length - 1 : prevImg - 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setImgSelected((prevImg) => (prevImg === imagenes.imagenes.length - 1 ? 0 : prevImg + 1));
    }, 7000); // Cambia el tiempo en milisegundos según tus necesidades

    return () => clearInterval(interval);
  }, [imagenes.imagenes.length]);

  if (!imagesLoaded) {
    return <div>Cargando imágenes...</div>;
  }

  return (
    <>

        <div className='title'>
        <h2 className='proyecto__title'>Proyectos</h2>
      </div>
      <div className='container1'>
        <div className='back'>
          <button className='back' onClick={prevSlide}>&lt;</button>
        </div>
        <div className='slider'>
          <div className='slider-wrapper' style={{ transform: `translateX(-${imgSelected * 100}%)` }}>
            {imagenes.imagenes.map((imagen) => (
              <div key={imagen.id} className='slider-item'>
                <img className='img' src={imagen.imagen} alt={imagen.nombre} />
                <h3 className='name'>{imagen.nombre}</h3>
                <div className='descip'>
                  <p>{imagen.description}</p>
                </div>
                <p className='tecnolog'><span>Tecnologías:</span> {imagen.tecnologias}</p>
                <div className='link_repo'>
                  <div className='logo_git'>
                    <a href={imagen.repositorio} target="_blank"><box-icon name='github' type='logo'></box-icon></a>
                  </div>
                  <div className='proyecto'>
                    <a href={imagen.url} target='_blank' rel='noreferrer'>Ver proyecto</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='netx'>
          <button className='netx' onClick={nextSlide}>&gt;</button>
        </div>
      </div>

    </>
  );
};

export default Projects;