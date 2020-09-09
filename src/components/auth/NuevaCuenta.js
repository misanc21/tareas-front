import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => { 
    
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password: '',
        confirmar:''
    })
    const { nombre, email, password, confirmar } = usuario 


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
                <h1>Registra una nueva cuenta</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="tu nombre"
                            onChange = {handleChange}
                            value={nombre}
                        />
                    </div>
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
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="repite tu password"
                            onChange = {handleChange}
                            value={confirmar}
                        />
                    </div>
                    <div className="campo-form">
                        <button 
                            className="btn btn-primary btn-block"
                            type="submit"
                        >Registrar
                        </button>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Iniciar Sesión</Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;