import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

function Vinculation({onSubmit} : {
    onSubmit: SubmitHandler<any>;
}) {

    const { handleSubmit, register } = useForm();

    return (
        <div className="tab-pane" id="vinculacion">
            <div className="panel-body">
                <h6>
                    Vinculación con metas de la Contribución Determinada a Nivel Nacional y la Ley General de Cambio Climático
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className='control-label' htmlFor="sectores">I. Sectores:</label>
                        <select className='form-control' {...register('sectores')}>
                            <option value="0">Selecciona</option>
                            <option value="1">Demo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='control-label' htmlFor="categoria">I. Categorías:</label>
                        <select className='form-control' {...register('categoria')}>
                            <option value="0">Selecciona</option>
                            <option value="1">Demo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='control-label' htmlFor="ejes">II. Ejes:</label>
                        <select className='form-control' {...register('ejes')}>
                            <option value="0">Selecciona</option>
                            <option value="1">Demo</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Vinculation
