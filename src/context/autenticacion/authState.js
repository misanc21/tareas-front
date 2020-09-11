import React, {useReducer} from 'react';
import clienteAxios from '../../config/axios'

import authContext from './authContext'
import authReducer from './authReducer'

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

const AuthState = props => {
    
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)
    
    const registrarUsuarioFunc = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos)
            dispatch({
                type: REGISTRO_EXITOSO
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: REGISTRO_ERROR
            })
        }
    }

    return (
        <authContext.Provider
            value={{
                registrarUsuarioFunc,
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState