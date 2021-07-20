import  React, {useState}  from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Actividades, Estrategias, Objetivos, Valores} from "../data/aportacion/Objetivos";
import { Etapas } from "../data/aportacion/Etapas";
import CurrencyInput from 'react-currency-input-field';
import {Marcadores} from "../data/shared";

function Aportacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, getValues} = useForm();
    const [rawValue, setRawValue] = useState<string | undefined>(' ');
    const [rawValue1, setRawValue1] = useState<string | undefined>(' ');
    const [rawValue2, setRawValue2] = useState<string | undefined>(' ');

    const strategies = () => (
        getValues('objetivoPrioritario') ? Estrategias.filter(({objetivo_id}) =>
            objetivo_id === getValues('objetivoPrioritario')).map(strategy => (
                <option value={strategy.id}>{strategy.name}</option>)) : null
    );

    const actions = () => (
       getValues('estrategiaPrioritaria') ? Actividades.filter(({estrategia_id}) =>
            estrategia_id === getValues('estrategiaPrioritaria')).map(actions => (
                <option value={actions.id}>{actions.name}</ option>
       )): null
    );


    const values = () => {
        const value = Valores.filter(({accion_id}) => (
            accion_id === getValues('actividadPuntual')
        ));

        if(value){
            return value;
        }
    }

    const validateValue = (value: string | undefined): void => {
        const rawValue = value === undefined ? 'undefined' : value;
        setRawValue(rawValue || ' ');
    }

    const validateValue1 = (value1: string | undefined): void => {
        const rawValue1 = value1 === undefined ? 'undefined' : value1;
        setRawValue1(rawValue1 || ' ');
    }

    const validateValue2 = (value2: string | undefined): void => {
        const rawValue2 = value2 === undefined ? 'undefined' : value2;
        setRawValue2(rawValue2 || ' ');
    }

    const updateForm = () => {
        store.porcentajeAtcc =  Marcadores[store.marcador] * 100;
        return handleSubmit(onSubmit);
    }
    return(
        <div key='1' className="tab-pane" id="aportacion">
            <div key='2' className="panel-body">
                <h6>
                    Aportación al programa especial de cambio climático
                </h6>
                <hr className="red"/>
                <form onChange={updateForm()}>
                    <div key='3' className="form-group">
                        <label className='control-label' htmlFor="objetivoPrioritario">Objetivo prioritario:</label>
                        <select className='form-control' {...register('objetivoPrioritario', {valueAsNumber: true})}>
                            <option value="0">Seleccione una opción</option>
                            {Objetivos.map((index) => <option value={index.id}>{index.name}</option>)}
                        </select>
                    </div>
                    <div key='4' className="form-group">
                        <label htmlFor="estrategiaPrioritaria" className="control-label">Estrategia prioritaria:</label>
                        <select className="form-control" {...register('estrategiaPrioritaria', {valueAsNumber: true})}>
                            <option value="0">Seleccione una opción</option>
                            {strategies()}
                        </select>
                    </div>
                    <div key='5' className="form-group">
                        <label htmlFor="actividadPuntual" className="control-label">Actividad puntual:</label>
                        <select className="form-control" {...register('actividadPuntual')}>
                            <option value="0">Seleccione una opción</option>
                            {actions()}
                        </select>
                    </div>
                    <div key='6' className="row">
                        <div key='7' className="form-group col-md-4">
                            <br/>
                            <label htmlFor="tipoAccion" className="control-label">Tipo de Acción puntual:</label>
                            <input className="form-control" {...register('tipoAccion')} value={values()!.map(({accion}) => accion)} readOnly/>
                        </div>
                        <div key='8' className="form-group col-md-4">
                            <label htmlFor="instCoordinadas" className="control-label">Instituciones coordinadas:</label>
                            <input className="form-control" {...register('instCoordinadas')} value={(values()!.map(({instituciones}) => instituciones))} readOnly/>
                        </div>
                        <div key='9' className="form-group col-md-4">
                            <label htmlFor="encargado" className="control-label">Encargado del seguimiento:</label>
                            <input className="form-control" {...register('encargado')} value={values()!.map(({encargado}) => encargado)}  readOnly/>
                        </div>
                    </div>
                    <div key='10' className="form-group">
                        <label htmlFor="actividadComprometida" className="control-label">Actividad o proyecto comprometido para la atención del Programa
                            Especial de Cambio Climático:</label>
                        <textarea className="form-control" {...register('actividadComprometida')} />
                    </div>
                    <div key='11' className="row">
                        <div key='12' className="form-group col-md-6">
                            <label htmlFor="indicador" className="control-label">Indicador o parámetro propuesto para el monitoreo y reporte
                                de los avances en torno a la actividad o proyecto:</label>
                            <textarea className="form-control" {...register('indicador')} />
                        </div>
                        <div key='13' className="form-group col-md-6">
                            <br/>
                            <label htmlFor="periodo" className="control-label">Periodo de implementación de la actividad o proyecto:</label>
                            <textarea className="form-control" {...register('periodo')} />
                        </div>
                    </div>
                    <div key='14' className="form-group">
                        <label htmlFor="tipoIncidencia" className="control-label">Tipo de incidencia:</label>
                        <select className="form-control" {...register('tipoIncidencia')}>
                            <option value="1">Directa</option>
                            <option value="2">Indirecta</option>
                        </select>
                    </div>
                    <div key='15' className="row">
                        <div key='16' className="form-group col-md-6">
                            <label htmlFor="etapa1" className="control-label">Etapa de la política_1:</label>
                            <select className="form-control" {...register('etapa1')}>
                                {Etapas.map((index) => <option value={index.id}>{index.name}</option>)}
                            </select>
                        </div>
                        <div key='17' className="form-group col-md-6">
                            <label htmlFor="etapa2" className="control-label">Etapa de la política_2:</label>
                            <select className="form-control" {...register('etapa2')}>
                                {Etapas.map((index) => <option value={index.id}>{index.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <br/>
                    <label className="control-label">Vinculación con otros instrumentos relevantes
                        para financiamiento climático internacional con los Marcadores de Río (OCDE1) y la UNDRR (en caso de aplicar)</label>
                    <hr className="red"/>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="diversidadBiologica" className="control-label">Convenio sobre la Diversidad Biológica:</label>
                            <select className="form-control" {...register('diversidadBiologica')}>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="diversidadBiologica" className="control-label">Convenio sobre la Diversidad Biológica:</label>
                            <select className="form-control" {...register('diversidadBiologica')}>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="recursosConvenio" className="control-label">Recursos internacionales recibidos para este ejercicio presupuestario en el marco de este Convenio:</label>
                            <CurrencyInput className="form-control" onValueChange={validateValue}  intlConfig={{ locale: 'en-US', currency: 'MXN' }} {...register('recursosConvenio', {value: rawValue, valueAsNumber: true})}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="recursosConvencion" className="control-label">Recursos internacionales recibidos para este ejercicio presupuestario en el marco de esta Convención:</label>
                            <CurrencyInput className="form-control" onValueChange={validateValue1}  intlConfig={{ locale: 'en-US', currency: 'MXN' }} {...register('recursosConvencion', {value: rawValue1, valueAsNumber: true})}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="plataforma" className="control-label">Plataforma para la Reducción del Riesgo de Desastres:</label>
                            <select className="form-control" {...register('plataforma')}>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="recursosInternacionales" className="control-label">Recursos internacionales recibidos para este ejercicio presupuestario en el marco de esta Plataforma:</label>
                            <CurrencyInput className="form-control" onValueChange={validateValue2}  intlConfig={{ locale: 'en-US', currency: 'MXN' }} {...register('recursosInternacionales', {value: rawValue2, valueAsNumber: true})}/>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group col-md-6">
                            <label htmlFor="marcador" className="control-label">Marcador Río:</label>
                            <select className="form-control" {...register('marcador', {valueAsNumber: true})}>
                                <option value="2">Los objetivos atienden explícitamente cambio climático.</option>
                                <option value="1">Los objetivos no atienden explícitamente cambio climático, pero tiene impacto indirecto positivo.</option>
                                <option value="0">Sin relevancia.</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="observaciones" className="control-label">Observaciones:</label>
                            <textarea className="form-control" {...register('observaciones')}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );


}
export default Aportacion;
