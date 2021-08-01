import React from "react";
import {useHistory} from "react-router-dom";
import Componentes from "./Componentes";
import {SubmitHandler} from "react-hook-form";

function Validacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {
    let history = useHistory();

    const handleClick = () => {
        history.push("/objetivo");
    };

    const error = () => (
        <div className="alert alert-danger">
            Su Pp no contribuye a la Política Nacional de Cambio Climático. Gracias
        </div>
    )

    const exitoso = () => (
        <div>
            <div className="alert alert-success">
                ¿Las acciones sustantivas y de apoyo establecidas en la AI actividad Institucional o en el Pp Programa presupuestal contribuyen a alguna acción relacionada con cambio climático?
            </div>
            <Componentes onSubmit={onSubmit} />

            <div className="form-group right">
                <button className='btn btn-primary pull-right' onClick={handleClick}>Siguiente</button>
            </div>
        </div>

    );

    const mensaje = () => (
        store.validacionOds ? exitoso() : error()
    );

    return (
        <div>
            {mensaje()}
        </div>
    )
}

export default Validacion;
