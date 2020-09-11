import React, {useContext, useEffect} from 'react';

import AuthContext from '../../context/autenticacion/authContext'

const Barra = () => {
    const authsContext = useContext(AuthContext)
    const {
        usuarioAutenticadoFunc,
        usuario,
        cerrarSesionFunc
    } = authsContext

    useEffect(() => {
        usuarioAutenticadoFunc()
    }, [])


    return ( 
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null}
            <nav className="nav-principal">
                <button 
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => cerrarSesionFunc()}
                >
                    Cerrar sesión
                </button>
            </nav>
        </header>
     );
}
 
export default Barra;