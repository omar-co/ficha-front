import React, {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import CurrencyInput from 'react-currency-input-field';
import {Marcadores} from "../data/shared";
import axios from "axios";
import Demo from "./Demo";

function Cuantificacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, setValue, getValues} = useForm();
    const [pp, setPp] = useState<string | undefined>(' ');
    const [rawPp, setRawPp] = useState<string | undefined>(' ');
    const [data, setData] = useState(  {data: []} );

    const formatAndRawPpValue = (pp: string | undefined): void => {
        setRawPp(pp === undefined ? 'undefined' : pp || ' ');
        setPp(pp);
        if (typeof rawPp === "string") {
            store.rawPp = parseInt(rawPp);
        }
        setValue('atcc', (store.rawPp * Marcadores[store.marcador]));
    };

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/capitulo').then(
            res => setData(res.data)
        );
    }, []);

    const capitulos = () => (
        data.data && getValues('capitulo') ? data.data.filter(({capitulo}) =>
            capitulo === getValues('capitulo')).map(concepto => (
                <option value={concepto}>{concepto}</option>
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
                    <label htmlFor="partida" className="control-label">Partida especifica</label>
                    <hr className="red"/>

                    <Demo />

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="capitulo" className="control-label">Capitulo</label>
                            <select className="form-control" {...register('capitulo')}>
                                <option value="">Seleccione una opcion</option>
                                <option value="1000">1000</option>
                                <option value="2000">2000</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                                <option value="5000">5000</option>
                                <option value="6000">6000</option>
                                <option value="7000">7000</option>
                                <option value="8000">8000</option>
                                <option value="9000">9000</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="concepto" className="control-label">Concepto</label>
                            <select className="form-control" {...register('concepto')}>
                                {capitulos()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="partidaGenerica" className="control-label">Partida Generica</label>
                            <select className="form-control">
                                {/*{partidaEspecifica()}*/}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="partidaEspecifica" className="control-label">Partida Especifica</label>
                            <select className="form-control">
                                <option value="1">1</option>
                                <option value="1">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="descripcion" className="control-label">Descripcion</label>
                            <input className="form-control" {...register('nombrePrograma')} readOnly/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Cuantificacion;
