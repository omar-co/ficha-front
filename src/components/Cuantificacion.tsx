import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import CurrencyInput from 'react-currency-input-field';
import {Marcadores} from "../data/shared";

function Cuantificacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, setValue} = useForm();
    const [pp, setPp] = useState<string | undefined>(' ');
    const [rawPp, setRawPp] = useState<string | undefined>(' ');

    const formatAndRawPpValue = (pp: string | undefined): void => {
        setRawPp(pp === undefined ? 'undefined' : pp || ' ');
        setPp(pp);
        if (typeof rawPp === "string") {
            store.rawPp = parseInt(rawPp);
        }
        setValue('atcc', (store.rawPp * Marcadores[store.marcador]));
    };

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
                </form>
            </div>
        </div>
    );

}

export default Cuantificacion;
