import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    STATUS_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasProyecto: action.payload
            }
        case AGREGAR_TAREA : 
            return {
                ...state,
                tareasProyecto: [
                    ...state.tareasProyecto,
                    action.payload
                ],
                errorTarea: false
            }
        case VALIDAR_TAREA :
            return{
                ...state,
                errorTarea:true
            }
        case ELIMINAR_TAREA :
            const nuevas =  state.tareasProyecto.filter(t => t._id !== action.payload)
            return {
                ...state,
                tareasProyecto : nuevas
            }
        case STATUS_TAREA:
        case ACTUALIZAR_TAREA:
            const nvatareas = state.tareasProyecto.map(t => t._id === action.payload.id ? action.payload : t)
            console.log(nvatareas)
            return {
                ...state,
                tareasProyecto: nvatareas,
                tareaSeleccionada: null,
            }
        case TAREA_ACTUAL: 
            return {
                ...state,
                tareaSeleccionada: action.payload
            }
        default:
            return state;
    }
}