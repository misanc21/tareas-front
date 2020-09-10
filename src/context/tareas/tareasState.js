import React, {useReducer}from 'react';

import tareasContext from './tareasContext'
import tareasReducer from './tareasReducer'
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types'

const TareasState = props => {
    const initialState = {
        tareas: [
            {id:0, nombre:'elegir plataforma', estado:true, proyectoId:1},
            {id:1, nombre:'elegir colores', estado:false, proyectoId:1},
            {id:2, nombre:'elegir plataformas de pago', estado:false, proyectoId:2},
            {id:3, nombre:'elegir hosting', estado:true, proyectoId:3},
            {id:4, nombre:'elegir colores', estado:false, proyectoId:3},
            {id:5, nombre:'elegir plataformas de pago', estado:false, proyectoId:1},
            {id:6, nombre:'elegir hosting', estado:true, proyectoId:2}
        ],
        tareasProyecto: null,
        errorTarea: false
    }
    const [state, dispatch] = useReducer(tareasReducer, initialState)


    //OBTENER TAREAS DE PROYECTO
    const getTareasFunc = id => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: id
        })
    }

    //AGREGAR TAREA A PROYECTO SELECICONADO
    const addTareaFunc = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //VALIDA Y MUESTRA ERROR DE FORM TAREA
    const validaTareaFunc = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //ELIMINAR TAREA
    const deleteTareaFunc = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return ( 
        <tareasContext.Provider
            value={{
                getTareasFunc,
                addTareaFunc,
                validaTareaFunc,
                deleteTareaFunc,
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea
            }}
        >
            {props.children}
        </tareasContext.Provider>
    );
}
 
export default TareasState;