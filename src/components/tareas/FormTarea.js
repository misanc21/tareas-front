import React , { useContext, useState, useEffect }from 'react';

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
        updateTareaActualFunc,
        errorTarea,
        tareaSeleccionada
    } = tareaContext

    
    

    const [tarea, setTarea] = useState({
        nombre:'',
        proyecto:'',
        estado: false
    })
    const {nombre} = tarea

    useEffect(() => {
        if(tareaSeleccionada !== null){
            setTarea({
                ...tareaSeleccionada
            })
        }else{
            setTarea({
                nombre:'',
                proyecto:'',
                estado: false
            })
        }
    }, [tareaSeleccionada])

    const handleChange = e =>{
        setTarea({
            ...tarea,
            proyecto: proyecto._id,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault() 

        if(nombre.trim() === ''){
            validaTareaFunc()
            return
        }

        if (tareaSeleccionada === null){
            addTareaFunc(tarea)
        }else{
            updateTareaActualFunc(tarea)
        }

        
        setTarea({
            nombre:''
        })
        
        getTareasFunc(proyecto._id)
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
                        {tareaSeleccionada ? 'Editar tarea' : 'Agregar tarea'}
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