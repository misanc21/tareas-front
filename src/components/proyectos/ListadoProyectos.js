import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Proyecto from './Proyecto'

import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext



    useEffect(() => {
        obtenerProyectos()
    //eslint-disable-next-line
    }, [])


    
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>
    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map( p => {
                return (
                    <CSSTransition
                        key={p.id}
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