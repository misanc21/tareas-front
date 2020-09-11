import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProyectoState from './context/proyectos/proyectoState'
import TareasState from './context/tareas/tareasState'
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

import tokenAuth from './config/tokenAuth'

//revisar si tenemos un token
const token = localStorage.getItem('token')
if(token){
  tokenAuth(token)
}

function App() {
  return (
    <ProyectoState>
      <TareasState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <Route exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
