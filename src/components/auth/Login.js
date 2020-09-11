import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'

import alertaContext from '../../context/alertas/alertaContext'
import authContext from '../../context/autenticacion/authContext'

const Login = props => {
    const alertasContext = useContext(alertaContext)
    const {
        mostrarAlertaFunc,
        alerta
    } = alertasContext

    const authsContext = useContext(authContext)
    const {
        mensaje,
        autenticado,
        inicioSesionFunc
    } = authsContext
    
    const [usuario, setUsuario] = useState({
        email:'',
        password: ''
    })
    const { email, password } = usuario 


    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }
        if(mensaje){
            mostrarAlertaFunc(mensaje.msg, mensaje.categoria)
        }
    //eslint-disable-next-line
    }, [mensaje, autenticado, props.history])



    const handleChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(email.trim() === '' || password.trim() === ''){
            mostrarAlertaFunc('Todos los campos son necesarios','alerta-error')
            return
        }

        inicioSesionFunc({email, password})

    }

    return ( 
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>):null}
            <div className="contenedor-form sombra-dark" >
                <h1>Iniciar sesión</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu email"
                            onChange = {handleChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="tu password"
                            onChange = {handleChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <button 
                            className="btn btn-primary btn-block"
                            type="submit"
                        >Iniciar Sesión
                        </button>
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener Cuenta</Link>
            </div>
        </div>
     );
}
 
export default Login;