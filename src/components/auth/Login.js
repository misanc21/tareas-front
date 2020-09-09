import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => { 
    
    const [usuario, setUsuario] = useState({
        email:'',
        password: ''
    })
    const { email, password } = usuario 


    const handleChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()


    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark" >
                <h1>Iniciar sesión</h1>

                <form
                    onsubmit={handleSubmit}
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