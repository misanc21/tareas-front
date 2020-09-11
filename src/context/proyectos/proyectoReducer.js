import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            return{ 
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [
                    ...state.proyectos,
                    action.payload
                ],
                formulario: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorFormulario: true
            }
        case PROYECTO_ACTUAL:
            const pa = state.proyectos.filter(p => p._id === action.payload)
            return{
                ...state,
                proyectoActual: pa
            }
        case ELIMINAR_PROYECTO:
            const ps = state.proyectos.filter(p=> p._id !== action.payload)
            return{
                ...state,
                proyectos: ps,
                proyectoActual: null
            }
        case PROYECTO_ERROR :
            return{
                ...state,
                mensaje: action.payload
            }
        default: 
        return state
    }
}