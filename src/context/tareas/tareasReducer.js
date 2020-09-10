import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    STATUS_TAREA
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            const tar = state.tareas.filter(t => t.proyectoId === action.payload)
            return{
                ...state,
                tareasProyecto: tar
            }
        case AGREGAR_TAREA : 
            return {
                ...state,
                tareas: [
                    ...state.tareas,
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
            const nuevas =  state.tareas.filter(t => t.id !== action.payload)
            return {
                ...state,
                tareas : nuevas
            }
        case STATUS_TAREA:
            console.log(state.tareas)
            const nvatareas = state.tareas.map(t => t.id === action.payload.id ? action.payload : t)
            console.log(nvatareas)
            return {
                tareas: nvatareas,
                ...state,
            }
        default:
            return state;
    }
}