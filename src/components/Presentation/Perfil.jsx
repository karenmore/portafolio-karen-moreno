import { useEffect, useState } from 'react'
import './syles/Perfil.css'

const Perfil = () => {

    const frase = "Hola, Soy Karen Moreno";
    const [textoAnimado, setTextoAnimado] = useState("");
    const [tiempoAnterior, setTiempoAnterior] = useState(Date.now());

    useEffect(() => {
        // Función para animar la frase
        const intervalo = setInterval(() => {
            const tiempoActual = Date.now();
            // Si ha pasado un minuto desde la última vez...
            if (tiempoActual - tiempoAnterior >= 60000) {
                // Reiniciar el tiempo anterior
                setTiempoAnterior(tiempoActual);
                // Restablecer el texto animado
                setTextoAnimado("");
            }

            // Si el texto animado aún no ha alcanzado la longitud de la frase completa...
            if (textoAnimado.length < frase.length) {
                // Obtener el siguiente caracter de la frase
                const siguienteCaracter = frase[textoAnimado.length];
                // Agregar el siguiente caracter al texto animado
                setTextoAnimado(textoAnimado + siguienteCaracter);
            }
        }, 100); // Ajustar la velocidad de la animación aquí

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalo);
    }, [textoAnimado]);

    return (
                <div className='description'>
                    <div className='contenedor__texto'>
                        <h1 className='name'>¡{textoAnimado}</h1>
                        <div className='contenedor__texto__animacion'></div>
                        <div className='barra__escritura'></div>
                    </div>
                    <section className='perfil__description'>
                        <p>Ingeniera en Sistemas con siete años de experiencia en el área de soporte de aplicaciones para una empresa del sector retail. Apasionada por la tecnología y con el objetivo de hacer la transición hacia el desarrollo de software, me uní a Academlo para adquirir las habilidades necesarias y convertirme en una desarrolladora full stack. Mi trayectoria profesional me ha brindado una sólida comprensión de las necesidades del negocio y la importancia de ofrecer soluciones efectivas y eficientes. Con un enfoque orientado a resultados y una mentalidad proactiva, estoy comprometida con el aprendizaje continuo y el crecimiento profesional en el campo del desarrollo de software.</p>
                    </section>
                </div>
    )
}

export default Perfil
