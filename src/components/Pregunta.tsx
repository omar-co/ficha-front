import React from "react";
import {useHistory} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

function Pregunta({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {
    const {handleSubmit, register} = useForm();
    let history = useHistory();

    const handleClick = () => {
        history.push("/identificacion");
    };


    return (
        <div>
            <form onChange={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="directamente" className="control-label">
                            ¿El objetivo del Programa presupuestario hace referencia a su contribución para la
                            adaptación y
                            mitigación de los efectos de cambio climático?
                        </label>
                        <select className="form-control" {...register('directamente', {valueAsNumber: true})}>
                            <option value="">Selecciona una opcion</option>
                            <option value="1">Explícitamente/Directamente</option>
                            <option value="0">Implícitamente/Indirectamente</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-primary pull-right' onClick={handleClick}>Siguiente</button>
                    </div>
                </div>
                <div className="row">

                </div>
            </form>
        </div>
    )
}

export default Pregunta;
