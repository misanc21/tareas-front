import React, {useReducer} from 'react';

import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

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
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const registrarUsuarioFunc = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos)
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
            usuarioAutenticadoFunc()
        } catch (error) {
            console.log(error.response)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    const usuarioAutenticadoFunc = async () => {
        const token = localStorage.getItem('token')
        if(token){
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth')
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    return (
        <AuthContext.Provider
            value = {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuarioFunc,
            }}
        >
            {props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthState;