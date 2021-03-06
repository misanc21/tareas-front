import React, { Fragment, useState, useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {
    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { 
        formulario,
        errorFormulario,
        mostrarFormulario,
        agregarProyecto,
        mostrarError,
    } = proyectosContext



    const [proyecto, setProyecto] = useState({
        nombre: ''
    })
    const { nombre } = proyecto



    const handleChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitProyecto = e => {
        e.preventDefault()

        if(nombre.trim() === ''){
            mostrarError()
            return
        }

        agregarProyecto(proyecto)
        setProyecto({
            nombre:''
        })
    }

    const handleOnClick = () => {
        mostrarFormulario()
    }



    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={handleOnClick}
            >
                Nuevo proyecto
            </button>
            {
                formulario ?
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={handleSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="nombre del proyecto"
                            name="nombre"
                            onChange={handleChangeProyecto}
                            value={nombre}
                        />
                        <button
                            type="submit"
                            className="btn btn-primario btn-block"
                        >
                            agregar proyecto
                    </button>
                    </form>
                    :
                    null
            }
            {
                errorFormulario ? 
                <p className="mensaje error">El nombre es obligatorio</p>
                : null
            }
        </Fragment>
    );
}

export default NuevoProyecto;