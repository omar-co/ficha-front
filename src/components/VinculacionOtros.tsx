import React, {useState} from "react";
import CurrencyInput from "react-currency-input-field";
import {SubmitHandler, useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import TabsMenu from "./TabsMenu";
import NavigationService from "../services/NavigationService";

function VinculacionOtros({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any;
    }
){
    let history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        NavigationService.next('otros');
        history.push(NavigationService.nextValue);
        window.scrollTo(0,0);
    }

    function goBack(e) {
        e.preventDefault();
        NavigationService.prev('otros');
        history.push(NavigationService.prevValue);
        window.scrollTo(0,0);
    }


    const {register, handleSubmit} = useForm();
    const [rawValue, setRawValue] = useState<string | undefined>(' ');
    const [rawValue1, setRawValue1] = useState<string | undefined>(' ');
    const [rawValue2, setRawValue2] = useState<string | undefined>(' ');

    const validateValue = (value: string | undefined): void => {
        const val = value === undefined ? 'undefined' : value;
        setRawValue(val || ' ');
        store.recursosConvenio = rawValue;
    }

    const validateValue1 = (value1: string | undefined): void => {
        const val = value1 === undefined ? 'undefined' : value1;
        setRawValue1(val || ' ');
        store.recursosConvencion = rawValue1;
    }

    const validateValue2 = (value2: string | undefined): void => {
        const val = value2 === undefined ? 'undefined' : value2;
        setRawValue2(val || ' ');
        store.recursosInternacionales = rawValue2;
    }

    return(
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'otros'}/>
            </div>
            <div className="col-md-9">
                <div className="tab-pane" id="otros">
                    <div className="panel-body">
                        <form onChange={handleSubmit(onSubmit)}>
                            <label className="control-label">Vinculación con otros instrumentos relevantes
                                para financiamiento climático internacional con los Marcadores de Río (OCDE1) y la UNDRR (en caso de aplicar)</label>
                            <hr className="red"/>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="diversidadBiologica" className="control-label">Convenio sobre la Diversidad Biológica:</label>
                                    <select className="form-control" {...register('diversidadBiologica')} defaultValue={store.diversidadBiologica}>
                                        <option value="">Selecciona una opción:</option>
                                        <option value="1">Sí</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="diversidadBiologica" className="control-label">Convenio internacional de lucha contra la desertificación:</label>
                                    <select className="form-control" {...register('desertificacion')} defaultValue={store.desertificacion}>
                                        <option value="">Selecciona una opción:</option>
                                        <option value="1">Sí</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="recursosConvenio" className="control-label">Recursos internacionales recibidos para este ejercicio presupuestario en el marco de este Convenio:</label>
                                    <CurrencyInput className="form-control" onValueChange={validateValue}  intlConfig={{ locale: 'en-US', currency: 'MXN' }} defaultValue={store.recursosConvenio}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="recursosConvencion" className="control-label">Recursos internacionales recibidos para este ejercicio presupuestario en el marco de esta Convención:</label>
                                    <CurrencyInput className="form-control" onValueChange={validateValue1}  intlConfig={{ locale: 'en-US', currency: 'MXN' }} defaultValue={store.recursosConvencion}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="plataforma" className="control-label">Plataforma para la Reducción del Riesgo de Desastres:</label>
                                    <select className="form-control" {...register('plataforma')}  defaultValue={store.plataforma}>
                                        <option value="">Selecciona una opción:</option>
                                        <option value="1">Sí</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="recursosInternacionales" className="control-label">Recursos internacionales recibidos para este ejercicio presupuestario en el marco de esta Plataforma:</label>
                                    <CurrencyInput className="form-control" onValueChange={validateValue2}  intlConfig={{ locale: 'en-US', currency: 'MXN' }} defaultValue={store.recursosInternacionales}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="observaciones" className="control-label">Observaciones:</label>
                                    <textarea className="form-control" {...register('observaciones')}  defaultValue={store.observaciones}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-secondary" onClick={goBack}>Regresar</button>
                                </div>
                                <div className="form-group right col-md-6">
                                    <button className='btn btn-primary pull-right' onClick={handleClick} >Siguiente</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default VinculacionOtros
