import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Tarea from './Tarea'

import proyectoContext from '../../context/proyectos/proyectoContext'
import tareasContext from '../../context/tareas/tareasContext'

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext)
    const {
        proyectoActual,
        stEliminaProyecto
    } = proyectosContext

    const tareaContext = useContext(tareasContext)
    const {
        tareasProyecto
    } = tareaContext

    if (!proyectoActual) return <h2>Selecciona un proyecto</h2>

    const [proyecto] = proyectoActual

    const handleEliminarProyecto = () => {
        stEliminaProyecto(proyecto._id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyecto.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ?
                    (<li className="tarea">No hay tareas</li>)
                    :
                    <TransitionGroup>
                        {
                            tareasProyecto.map(t => (
                                <CSSTransition 
                                    key={t._id}
                                    timeout={500}
                                    classNames="tarea"
                                >
                                    <Tarea
                                        tarea={t}
                                    />
                                </CSSTransition>
                            )
                            )
                        }
                    </TransitionGroup>
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