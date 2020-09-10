import React, {useReducer}from 'react';

import tareasContext from './tareasContext'
import tareasReducer from './tareasReducer'
import {
    TAREAS_PROYECTO
} from '../../types'

const TareasState = props => {
    const initialState = {
        tareas: [
            {nombre:'elegir plataforma', estado:true, proyectoId:1},
            {nombre:'elegir colores', estado:false, proyectoId:1},
            {nombre:'elegir plataformas de pago', estado:false, proyectoId:2},
            {nombre:'elegir hosting', estado:true, proyectoId:3},
            {nombre:'elegir colores', estado:false, proyectoId:3},
            {nombre:'elegir plataformas de pago', estado:false, proyectoId:1},
            {nombre:'elegir hosting', estado:true, proyectoId:2}
        ],
        tareasProyecto: null
    }
    const [state, dispatch] = useReducer(tareasReducer, initialState)


    //OBTENER TAREAS DE PROYECTO
    const getTareasFunc = id => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: id
        })
    }

    return ( 
        <tareasContext.Provider
            value={{
                getTareasFunc,
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto
            }}
        >
            {props.children}
        </tareasContext.Provider>
    );
}
 
export default TareasState;