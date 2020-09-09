import React, {Fragment} from 'react';

import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre:'elegir plataforma', estado:true},
        {nombre:'elegir colores', estado:false},
        {nombre:'elegir plataformas de pago', estado:false},
        {nombre:'elegir hosting', estado:true}
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: tienda virtual</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ? 
                    (<li className="tarea">No hay tareas</li>)
                    :
                    tareasProyecto.map((t,i) =>(
                        <Tarea
                            key= {i}
                            tarea = {t}
                        />
                        )
                    )
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
}
 
export default ListadoTareas;