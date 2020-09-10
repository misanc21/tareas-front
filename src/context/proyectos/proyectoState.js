import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid'

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
} from '../../types'


const ProyectoState = props => {
    const initialState = {
        formulario: false,
        proyectos: [],
        errorFormulario: false
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

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4()
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //valida formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
