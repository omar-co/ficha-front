import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import CurrencyInput from 'react-currency-input-field';
import {Finalidad, Funcion} from "../data/cuantificacion/Presupuestos";

function Cuantificacion({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, getValues} = useForm();
    const [rawValue, setRawValue] = useState<string | undefined>(' ');


    const funciones = () => (
        getValues('grupoFuncional') ? Funcion.filter(({finalidad_id}) =>
            finalidad_id === getValues('grupoFuncional')).map(obj => (
                <option value={obj.id}>{obj.name}</option>
            )
        ): null
    );


    const validateValue = (value: string | undefined): void => {
        const rawValue = value === undefined ? 'undefined' : value;
        setRawValue(rawValue || ' ');
    }

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
                            <CurrencyInput className="form-control" onValueChange={validateValue}  intlConfig={{ locale: 'en-US', currency: 'MXN' }} {...register('pp', {value: rawValue, valueAsNumber: true})}/>
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
                            <select className='form-control' {...register('grupoFuncional', {valueAsNumber: true})}>
                                {Finalidad.map((index) => <option value={index.id}>{index.name}</option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="funcion">Función:</label>
                            <select className="form-control" {...register('funcion', {valueAsNumber: true})}>
                                {funciones()}
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
                            <label htmlFor="observaciones" className="control-label">Observaciones:</label>
                            <textarea className="form-control" {...register('observaciones')} />
                        </div>
                    </div>
                    <label htmlFor="adaptacion" className="control-label">Adaptacion</label>
                    <hr className="red"/>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="grupoFuncionalAdaptacion">Grupo funcional:</label>
                            <select className='form-control' {...register('grupoFuncionalAdaptacion', {valueAsNumber: true})}>
                                {Finalidad.map((index) => <option value={index.id}>{index.name}</option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="funcionAdaptacion">Función:</label>
                            <select className="form-control" {...register('funcionAdaptacion', {valueAsNumber: true})}>
                                {funciones()}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="subfuncionAdaptacion">Subfunción:</label>
                            <select className="form-control" {...register('subfuncionAdaptacion')}>
                                <option value="1">Demo</option>
                                <option value="2">Select</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="tipoGastoAdaptacion">Tipo de Gasto & Nombre de la Partida:</label>
                            <input className="form-control" {...register('tipoGastoAdaptacion')} readOnly/>
                        </div>
                        <br/>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="montoAdaptacion">Monto al ATCC:</label>
                            <input className="form-control" {...register('montoAdaptacion')} readOnly/>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="porcentajeAtcc2Adaptacion">%ATCC:</label>
                            <input className="form-control" {...register('porcentajeAtcc2Adaptacion')} readOnly/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="observacionesAdaptacion" className="control-label">Observaciones:</label>
                            <textarea className="form-control" {...register('observacionesAdaptacion')} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Cuantificacion;
