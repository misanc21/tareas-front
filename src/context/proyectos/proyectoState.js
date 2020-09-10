import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS
} from '../../types'


const ProyectoState = props => {
    const initialState = {
        formulario: false,
        proyectos: []
    }

    const proyectosApi =[
        {nombre:'tienda virtual', id:1},
        {nombre:'tfutbol', id:2},
        {nombre:'trisc', id:3},
    ]

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener proyectos

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectosApi
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                mostrarFormulario,
                obtenerProyectos,
                formulario: state.formulario,
                proyectos: state.proyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
