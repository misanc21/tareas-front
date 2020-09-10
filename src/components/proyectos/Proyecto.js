import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'
import tareasContext from '../../context/tareas/tareasContext'

const Proyecto = ( {proyecto} ) => {
    const proyectosContext = useContext(proyectoContext)
    const {
        stProyectoActual
    } = proyectosContext

    const tareaContext = useContext(tareasContext)
    const {
        getTareasFunc
    } = tareaContext

    const seleccionarProyecto = id => {
        stProyectoActual(id)
        getTareasFunc(id)
    }

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;