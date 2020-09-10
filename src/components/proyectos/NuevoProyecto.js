import React, { Fragment, useState, useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {
    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario } = proyectosContext

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
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
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
        </Fragment>
    );
}

export default NuevoProyecto;