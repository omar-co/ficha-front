import React from "react";
import {useHistory} from "react-router-dom";
import Componentes from "./Componentes";
import {SubmitHandler} from "react-hook-form";
import TabsMenu from "./TabsMenu";

function Validacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {
    let history = useHistory();

    const handleClick = () => {
        history.push("/cuantificacion");
    };

    const error = () => (
        <div className="alert alert-danger">
            Su Pp no contribuye a la Política Nacional de Cambio Climático. Gracias
        </div>
    )

    const exitoso = () => (
        <div>
            <Componentes onSubmit={onSubmit} />

            <div className="form-group right">
                <button className='btn btn-primary pull-right' onClick={handleClick} >Siguiente</button>
            </div>
        </div>

    );

    const mensaje = () => (
        store.validacionOds ? exitoso() : error()
    );

    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'componentes'}/>
            </div>
            <div className="col-md-9">
                {mensaje()}
            </div>
        </div>
    )
}

export default Validacion;
