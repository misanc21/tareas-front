import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Proyecto from './Proyecto'

import proyectoContext from '../../context/proyectos/proyectoContext'
import alertaContext from '../../context/alertas/alertaContext'

const ListadoProyectos = () => {

    const proyectosContext = useContext(proyectoContext)
    const { 
        proyectos, 
        obtenerProyectos,
        mensaje
     } = proyectosContext

    const alertasContext = useContext(alertaContext)
    const {
        alerta,
        mostrarAlertaFunc
    } = alertasContext



    useEffect(() => {

        if (mensaje){
            mostrarAlertaFunc(mensaje.msg, mensaje.categoria)
        }

        obtenerProyectos()
    //eslint-disable-next-line
    }, [mensaje])



    
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>
    return ( 
        <ul className="listado-proyectos">
            {alerta ? (<div className={`alerta ${alerta.categoria }`}>{alerta.msg}</div>) : null}
            <TransitionGroup>
            {proyectos.map( p => {
                return (
                    <CSSTransition
                        key={p._id}
                        timeout={500}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={p}
                        />
                    </CSSTransition>
                )
            })}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;