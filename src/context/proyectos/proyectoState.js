import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios'

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types'


const ProyectoState = props => {
    const initialState = {
        formulario: false,
        proyectos: [],
        errorFormulario: false,
        proyectoActual : null,
        mensaje: null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener proyectos
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos')
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg:'hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    //Agregar nuevo proyecto
    const agregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto)
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg:'hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    //valida formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //selecciona el proyecto actual
    const stProyectoActual = id => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: id
        })
    }

    //ELIMINA PROYECTO
    const stEliminaProyecto = async id => {
        try {
            await clienteAxios.delete(`/api/proyectos/${id}`)
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: id
            })
        } catch (error) {
            const alerta = {
                msg:'hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <proyectoContext.Provider
            value={{
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                stProyectoActual,
                stEliminaProyecto,
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario,
                proyectoActual: state.proyectoActual,
                mensaje: state.mensaje
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
