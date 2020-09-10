import React , { useContext, useState }from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'
import tareasContext from '../../context/tareas/tareasContext'
const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext)
    const {
        proyectoActual
    } = proyectosContext

    const tareaContext = useContext(tareasContext)
    const {
        addTareaFunc,
        validaTareaFunc,
        getTareasFunc,
        errorTarea
    } = tareaContext

    
    

    const [tarea, setTarea] = useState({
        nombre:'',
        proyectoId:'',
        estado: false
    })
    const {nombre} = tarea

    const handleChange = e =>{
        setTarea({
            ...tarea,
            proyectoId: proyecto.id,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault() 

        if(nombre.trim() === ''){
            validaTareaFunc()
            return
        }

        addTareaFunc(tarea)
        
        setTarea({
            nombre:''
        })
        
        getTareasFunc(proyecto.id)
    }
    


    if(!proyectoActual) return null
    const [proyecto] = proyectoActual
    return ( 
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de tarea"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </div>
                <div className="contenedor-input">
                    <button
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                    >
                        Agregar tarea
                    </button>
                </div>
            </form>
            {
                errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null
            }
        </div>
    );
}
 
export default FormTarea;