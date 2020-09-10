import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'

const Proyecto = ( {proyecto} ) => {
    const proyectosContext = useContext(proyectoContext)
    const {
        stProyectoActual
    } = proyectosContext

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => stProyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;