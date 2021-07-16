import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Actividades, Estrategias, Objetivos, Valores} from "../data/aportacion/Objetivos";
import { Etapas } from "../data/aportacion/Etapas";

function Aportacion({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, getValues} = useForm();

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



    return(
        <div key='1' className="tab-pane" id="aportacion">
            <div key='2' className="panel-body">
                <h6>
                    Aportación al programa especial de cambio climático
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div key='3' className="form-group">
                        <label className='control-label' htmlFor="objetivoPrioritario">Objetivo prioritario:</label>
                        <select className='form-control' {...register('objetivoPrioritario', {valueAsNumber: true})}>
                            {Objetivos.map((index) => <option value={index.id}>{index.name}</option>)}
                        </select>
                    </div>
                    <div key='4' className="form-group">
                        <label htmlFor="estrategiaPrioritaria" className="control-label">Estrategia prioritaria:</label>
                        <select className="form-control" {...register('estrategiaPrioritaria', {valueAsNumber: true})}>
                            {strategies()}
                        </select>
                    </div>
                    <div key='5' className="form-group">
                        <label htmlFor="actividadPuntual" className="control-label">Actividad puntual:</label>
                        <select className="form-control" {...register('actividadPuntual')}>
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
                </form>
            </div>
        </div>
    );


}
export default Aportacion;
