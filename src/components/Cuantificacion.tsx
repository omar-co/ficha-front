import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

function Cuantificacion({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register,} = useForm();

    return(
        <div className="tab-pane" id="cuantificacion">
            <div className="panel-body">
                <h6>
                    Cuantificación Presupuestal
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label className='control-label' htmlFor="pp">Total del Pp:</label>
                            <input className="form-control" {...register('pp')}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label className='control-label' htmlFor="atcc">ATCC:</label>
                            <input className="form-control" {...register('atcc')} readOnly/>
                        </div>
                        <div className="form-group col-md-3">
                            <label className='control-label' htmlFor="porcentajePp">%Pp:</label>
                            <input className="form-control" {...register('porcentajePp')} readOnly/>
                        </div>
                        <div className="form-group col-md-3">
                            <label className='control-label' htmlFor="porcentajeAtcc">%ATCC:</label>
                            <input className="form-control" {...register('porcentajeAtcc')} readOnly/>
                        </div>
                    </div>
                    <label htmlFor="mitigacion" className="control-label">Mitigacion</label>
                    <hr className="red"/>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="grupoFuncional">Grupo funcional:</label>
                            <select className="form-control" {...register('grupoFuncional')}>
                                <option value="1">Demo</option>
                                <option value="2">Select</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="funcion">Función:</label>
                            <select className="form-control" {...register('funcion')}>
                                <option value="1">Demo</option>
                                <option value="2">Select</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="subfuncion">Subfunción:</label>
                            <select className="form-control" {...register('subfuncion')}>
                                <option value="1">Demo</option>
                                <option value="2">Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="tipoGasto">Tipo de Gasto & Nombre de la Partida:</label>
                            <input className="form-control" {...register('tipoGasto')} readOnly/>
                        </div>
                        <br/>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="monto">Monto al ATCC:</label>
                            <input className="form-control" {...register('monto')} readOnly/>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="porcentajeAtcc2">%ATCC:</label>
                            <input className="form-control" {...register('porcentajeAtcc2')} readOnly/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="observaciones" className="control-label">Observaciones:s</label>
                            <textarea className="form-control" {...register('observaciones')} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Cuantificacion;
