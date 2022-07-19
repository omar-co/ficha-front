import  React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Actividades, Estrategias, Objetivos} from "../data/aportacion/Objetivos";
import { Etapas } from "../data/aportacion/Etapas";
import TabsMenu from "./TabsMenu";

import {Marcadores} from "../data/shared";
import { useHistory } from "react-router-dom";
import Select from 'react-select';

function Aportacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    if (!store.objetivos) {
        store.objetivos = [];
    }
    if (!store.estrategias) {
        store.estrategias = [];
    }
    if (!store.actividades) {
        store.actividades = [];
    }
    if (!store.etapa1) {
        store.etapa1 = [];
    }

    const [objetivo, setObjetivo] = React.useState(store.objetivos);
    const [estrategias, setEstrategias] = React.useState(store.estrategias);
    const [actividades, setActividades] = React.useState(store.actividades);
    const [etapa, setEtapa] = React.useState(store.etapa1);
    const {handleSubmit, register} = useForm();

    let history = useHistory();


    function handleClick() {
        history.push("/otros");
        window.scrollTo(0,0);
    }

    function goBack() {
        history.push("/identificacion");
        window.scrollTo(0,0);
    }

    const addObjetivosToStore = (item: any) => {
        setObjetivo(item.map((obj) =>
            obj.id
        ))
    }

    const addEstrategiasToStore = (item: any) => {
        setEstrategias(item.map((obj) =>
            obj.id
        ))
    }

    const addActividadesToStore = (item: any) => {
        setActividades(item.map((obj) =>
            obj.id
        ))
    }

    const addEtapasToStore = (item: any) => {
        setEtapa(item.map((obj) =>
            obj.id
        ))
    }


    const objetivos = () => (
        <Select
            isMulti
            className="reactSelect"
            name="objetivosMultipleSelect"
            placeholder="Objetivo prioritario"
            defaultValue={Objetivos.filter(item => store.objetivos.includes(item.id))}
            onChange={addObjetivosToStore}
            options={Objetivos}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            ref={e => register('objetivosMultipleSelect')}
        />
    );



    const strategies = () => (
        <Select
            isMulti
            className="reactSelect"
            name="estrategiasMultipleSelect"
            placeholder="Estrategia prioritaria"
            onChange={addEstrategiasToStore}
            defaultValue={Estrategias.filter(item => store.estrategias.includes(item.id))}
            options={Estrategias.filter(item => (
                // @ts-ignore
                objetivo && objetivo.includes(item.objetivo_id)
            ))}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            ref={e => register('estrategiasMultipleSelect')}
        />
    );

    const actions = () => (
        <Select
            isMulti
            className="reactSelect"
            name="actividadesMultipleSelection"
            placeholder="Actividad puntual"
            onChange={addActividadesToStore}
            defaultValue={Actividades.filter(item => store.actividades.includes(item.id))}
            options={Actividades.filter(item => (
                // @ts-ignore
                estrategias && estrategias.includes(item.estrategia_id)
            ))}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            ref={e => register('actividadesMultipleSelection')}
        />
    );


    const updateForm = () => {
        store.objetivos = objetivo;
        store.estrategias = estrategias;
        store.actividades = actividades;
        store.etapa1 = etapa;
        store.porcentajeAtcc =  Marcadores[store.marcador] * 100;
        return handleSubmit(onSubmit);
    }
    return(
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'pecc'}/>
            </div>
            <div className="col-md-9">
                <div key='1' className="tab-pane" id="aportacion">
                    <div key='2' className="panel-body">
                        <form onChange={updateForm()}>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="titulo" className="control-label">VINCULACIÓN CON EL PROGRAMA ESPECIAL DE CAMBIO CLIMÁTICO</label>
                                    <hr className="red"/>
                                </div>
                            </div>
                            <div key='3' className="form-group">
                                <label className='control-label' htmlFor="objetivoPrioritario">Objetivo prioritario:</label>
                                {objetivos()}
                            </div>
                            <div key='4' className="form-group">
                                <label htmlFor="estrategiaPrioritaria" className="control-label">Estrategia prioritaria:</label>
                                {strategies()}
                            </div>
                            <div key='5' className="form-group">
                                <label htmlFor="actividadPuntual" className="control-label">Actividad puntual:</label>
                                {actions()}
                            </div>
                            <div key='10' className="form-group">
                                <label htmlFor="actividadComprometida" className="control-label">Actividades o proyectos comprometidos para la atención del Programa
                                    Especial de Cambio Climático:</label>
                                <textarea className="form-control" {...register('actividadComprometida')} defaultValue={store.actividadComprometida}/>
                            </div>
                            <div key='11' className="row">
                                <div key='12' className="form-group col-md-6">
                                    <label htmlFor="indicador" className="control-label">Indicador o parámetro propuesto para el monitoreo y reporte
                                        de los avances en torno a la actividad o proyecto:</label>
                                    <textarea className="form-control" {...register('indicador')} defaultValue={store.indicador}/>
                                </div>
                                <div key='13' className="form-group col-md-6">
                                    <br/>
                                    <label htmlFor="periodo" className="control-label">Periodo de implementación de la actividad o proyecto:</label>
                                    <textarea className="form-control" {...register('periodo')} defaultValue={store.periodo}/>
                                </div>
                            </div>
                            <div key='15' className="row">
                                <div key='16' className="form-group col-md-12">
                                    <label htmlFor="etapa1" className="control-label">Etapa de la política:</label>
                                    <Select
                                        isMulti
                                        className="reactSelect"
                                        name="etapasMultipleSelection"
                                        placeholder="Etapa de la política"
                                        onChange={addEtapasToStore}
                                        defaultValue={Etapas.filter(item => store.etapa1.includes(item.id))}
                                        options={Etapas}
                                        getOptionLabel={(option) => option.name}
                                        getOptionValue={(option) => option.id}
                                        ref={e => register('etapasMultipleSelection')}
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <br/>
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
export default Aportacion;
