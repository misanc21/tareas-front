import React from 'react';

import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    const proyectos = [
        {nombre:'tienda virtual'},
        {nombre:'trisc'},
        {nombre:'tfutbol'}
    ]

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map( (p,i) => {
                return <Proyecto 
                    key={i}
                    proyecto={p}
                />
            })}
        </ul>
    );
}
 
export default ListadoProyectos;