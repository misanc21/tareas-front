import React, {Fragment, useContext} from 'react';

import Tarea from './Tarea'

import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext)
    const {
        proyectoActual,
        stEliminaProyecto
    } = proyectosContext
    
    if(!proyectoActual) return <h2>Selecciona un proyecto</h2>

    const [proyecto] = proyectoActual

    const tareasProyecto = [
        {nombre:'elegir plataforma', estado:true},
        {nombre:'elegir colores', estado:false},
        {nombre:'elegir plataformas de pago', estado:false},
        {nombre:'elegir hosting', estado:true}
    ]

    const handleEliminarProyecto = () => {
        stEliminaProyecto(proyecto.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyecto.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? 
                    (<li className="tarea">No hay tareas</li>)
                    :
                    tareasProyecto.map((t,i) =>(
                        <Tarea
                            key= {i}
                            tarea = {t}
                        />
                        )
                    )
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={handleEliminarProyecto}
            >
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
}
 
export default ListadoTareas;