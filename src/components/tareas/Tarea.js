import React, { useContext } from 'react';

import tareasContext from '../../context/tareas/tareasContext'

const Tarea = ( { tarea }) => {

    const tareaContext = useContext(tareasContext)
    const {
        deleteTareaFunc,
        getTareasFunc,
        cambiaStatusTareaFunc
    } = tareaContext

    const handleDeleteTarea = () => {
        deleteTareaFunc(tarea.id)
        getTareasFunc(tarea.proyectoId)
    }

    const cambiarStatus = () => {
        tarea.estado = !tarea.estado
        cambiaStatusTareaFunc(tarea)
    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={cambiarStatus}
                        >
                        Completo
                        </button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={cambiarStatus}
                        >
                        Incompleto
                        </button>
                    )
                }
            </div>
            <div className="acciones"> 
                <button
                    className="btn btn-primario"
                    type="button"
                >
                    Editar
                </button>
                <button
                    className="btn btn-secundario"
                    type="button"
                    onClick={handleDeleteTarea}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}
 
export default Tarea;