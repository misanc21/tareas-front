import {
    TAREAS_PROYECTO
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            console.log(action.payload)
            const tar = state.tareas.filter(t => t.proyectoId === action.payload)
            return{
                ...state,
                tareasProyecto: tar
            }
        default:
            return state;
    }
}