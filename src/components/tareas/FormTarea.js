import React , { useContext }from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'
const FormTarea = () => {
    const proyectosContext = useContext(proyectoContext)
    const {
        proyectoActual
    } = proyectosContext

    if(!proyectoActual) return null
    
    const [proyecto] = proyectoActual

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de tarea"
                        name="nombre"
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
        </div>
    );
}
 
export default FormTarea;