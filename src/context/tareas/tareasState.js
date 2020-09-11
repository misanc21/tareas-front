import React, {useReducer}from 'react';
import clienteAxios from '../../config/axios'

import tareasContext from './tareasContext'
import tareasReducer from './tareasReducer'
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types'

const TareasState = props => {
    const initialState = {
        tareasProyecto: [],
        errorTarea: false,
        tareaSeleccionada: null
    }
    const [state, dispatch] = useReducer(tareasReducer, initialState)


    //OBTENER TAREAS DE PROYECTO
    const getTareasFunc = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}})
            console.log(resultado.data)
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    //AGREGAR TAREA A PROYECTO SELECICONADO
    const addTareaFunc = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea)
            console.log(resultado)
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error)
        }
    }

    //VALIDA Y MUESTRA ERROR DE FORM TAREA
    const validaTareaFunc = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //ELIMINAR TAREA
    const deleteTareaFunc = async (id,proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params:{ proyecto}})
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    //EXTRAE UNA TAREA PARA EDICION
    const putTareaActualFunc = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //ACTUALIZAR TAREA
    const updateTareaActualFunc = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
            console.log(resultado)
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <tareasContext.Provider
            value={{
                getTareasFunc,
                addTareaFunc,
                validaTareaFunc,
                deleteTareaFunc,
                putTareaActualFunc,
                updateTareaActualFunc,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada
            }}
        >
            {props.children}
        </tareasContext.Provider>
    );
}
 
export default TareasState;