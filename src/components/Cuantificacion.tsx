import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import CurrencyInput from 'react-currency-input-field';
import {Finalidad, Funcion, Subfuncion} from "../data/cuantificacion/Presupuestos";
import {Marcadores} from "../data/shared";

function Cuantificacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, getValues, setValue} = useForm();
    const [pp, setPp] = useState<string | undefined>(' ');
    const [rawPp, setRawPp] = useState<string | undefined>(' ');


    const funciones = () => (
        getValues('grupoFuncional') ? Funcion.filter(({finalidad_id}) =>
            finalidad_id === getValues('grupoFuncional')).map(obj => (
                <option value={obj.id}>{obj.name}</option>
            )
        ) : null
    );

    const formatAndRawPpValue = (pp: string | undefined): void => {
        setRawPp(pp === undefined ? 'undefined' : pp || ' ');
        setPp(pp);
        if (typeof rawPp === "string") {
            store.rawPp = parseInt(rawPp);
        }
        setValue('atcc', (store.rawPp * Marcadores[store.marcador]));
    };

    const subfunctions = () => (
        getValues('funcion') ? Subfuncion.filter(({funcion_id}) =>
            funcion_id === getValues('funcion')).map(obj => (
                <option value={obj.id}>{obj.name}</option>
            )
        ) : null
    );

    return (
        <div className="tab-pane" id="cuantificacion">
            <div className="panel-body">
                <h6>
                    Presupuesto anual
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="pp">Total del Pp:</label>
                            <CurrencyInput className="form-control" onValueChange={formatAndRawPpValue} intlConfig={{
                                locale: 'en-US',
                                currency: 'MXN'
                            }} {...register('pp', {value: pp})}/>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="atcc">Hacia el ATCC:</label>
                            <input className="form-control" {...register('atcc')} readOnly/>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="porcentajeAtcc">%ATCC:</label>
                            <input className="form-control" value={store.porcentajeAtcc} readOnly/>
                        </div>
                    </div>
                    <label htmlFor="mitigacion" className="control-label">
                        Partida presupuestaria al ATCC_1 (Mitigación)
                    </label>
                    <hr className="red"/>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="grupoFuncional">Grupo funcional:</label>
                            <select className='form-control' {...register('grupoFuncional', {valueAsNumber: true})}>
                                <option>Seleccione una opción</option>
                                {Finalidad.map((index) => <option value={index.id}>{index.name}</option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="funcion">Función:</label>
                            <select className="form-control" {...register('funcion', {valueAsNumber: true})}>
                                <option>Seleccione una opción</option>
                                {funciones()}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="subfuncion">Subfunción:</label>
                            <select className="form-control" {...register('subfuncion')}>
                                <option>Seleccione una opción</option>
                                {subfunctions()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="tipoGasto">Tipo de Gasto & Nombre de la
                                Partida:</label>
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
                    <label htmlFor="adaptacion" className="control-label">
                        Partida presupuestaria al ATCC_2 (Adaptación)
                    </label>
                    <hr className="red"/>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="grupoFuncionalAdaptacion">Grupo funcional:</label>
                            <select
                                className='form-control' {...register('grupoFuncionalAdaptacion', {valueAsNumber: true})}>
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
                            <label className='control-label' htmlFor="tipoGastoAdaptacion">Tipo de Gasto & Nombre de la
                                Partida:</label>
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
