import React, { useContext } from 'react';

import tareasContext from '../../context/tareas/tareasContext'

const Tarea = ( { tarea }) => {

    const tareaContext = useContext(tareasContext)
    const {
        deleteTareaFunc,
        getTareasFunc,
        putTareaActualFunc,
        updateTareaActualFunc
    } = tareaContext

    const handleDeleteTarea = () => {
        deleteTareaFunc(tarea._id, tarea.proyecto)
        getTareasFunc(tarea.proyecto)
    }

    const cambiarStatus = () => {
        tarea.estado = !tarea.estado
        updateTareaActualFunc(tarea)
    }

    const handlePutTareaActual = () => {
        putTareaActualFunc(tarea)
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
                    onClick={handlePutTareaActual}
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