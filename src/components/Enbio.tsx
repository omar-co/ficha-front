import  React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { SubEjes as Estrategias, Ejes as Objetivos} from "../data/Enbio";
import { Etapas } from "../data/aportacion/Etapas";
import TabsMenu from "./TabsMenu";

import {Marcadores} from "../data/shared";
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import NavigationService from "../services/NavigationService";

function Enbio({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    if (!store.objetivos) {
        store.objetivos = [];
    }
    if (!store.estrategias) {
        store.estrategias = [];
    }
    if (!store.etapa1) {
        store.etapa1 = [];
    }

    const [objetivo, setObjetivo] = React.useState(store.objetivos);
    const [estrategias, setEstrategias] = React.useState(store.estrategias);
    const [etapa, setEtapa] = React.useState(store.etapa1);
    const {handleSubmit, register} = useForm();

    let history = useHistory();


    function handleClick(e) {
        e.preventDefault();
        NavigationService.next('enbio');
        history.push(NavigationService.nextValue);
        window.scrollTo(0,0);
    }

    function goBack(e) {
        e.preventDefault();
        NavigationService.prev('enbio');
        history.push(NavigationService.prevValue);
        window.scrollTo(0,0);
    }

    const addObjetivosToStore = (item: any) => {
        setObjetivo(item.map((obj) =>
            obj.value
        ))
    }

    const addEstrategiasToStore = (item: any) => {
        setEstrategias(item.map((obj) =>
            obj.value
        ))
    }

    const addEtapasToStore = (item: any) => {
        setEtapa(item.map((obj) =>
            obj.value
        ))
    }


    const objetivos = () => (
        <Select
            isMulti
            className="reactSelect"
            name="objetivosMultipleSelect"
            placeholder="Eje"
            defaultValue={Objetivos.filter(item => store.objetivos.includes(item.value))}
            onChange={addObjetivosToStore}
            options={Objetivos}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            ref={e => register('objetivosMultipleSelect')}
        />
    );



    const strategies = () => (
        <Select
            isMulti
            className="reactSelect"
            name="estrategiasMultipleSelect"
            placeholder="Sub-eje"
            onChange={addEstrategiasToStore}
            defaultValue={Estrategias.filter(item => store.estrategias.includes(item.value))}
            options={Estrategias.filter(item => (
                // @ts-ignore
                objetivo && objetivo.includes(item.parent)
            ))}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            ref={e => register('estrategiasMultipleSelect')}
        />
    );


    const updateForm = () => {
        store.objetivos = objetivo;
        store.estrategias = estrategias;
        store.etapa1 = etapa;
        store.porcentajeAtcc =  Marcadores[store.marcador] * 100;
        return handleSubmit(onSubmit);
    }
    return(
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'enbio'}/>
            </div>
            <div className="col-md-9">
                <div key='1' className="tab-pane" id="aportacion">
                    <div key='2' className="panel-body">
                        <form onChange={updateForm()}>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="titulo" className="control-label">VINCULACIÓN CON ENBIO</label>
                                    <hr className="red"/>
                                </div>
                            </div>
                            <div key='3' className="form-group">
                                <label className='control-label' htmlFor="objetivoPrioritario">Eje de la ENBIO:</label>
                                {objetivos()}
                            </div>
                            <div key='4' className="form-group">
                                <label htmlFor="estrategiaPrioritaria" className="control-label">Sub-eje de la ENBIO:</label>
                                {strategies()}
                            </div>
                            <div key='10' className="form-group">
                                <label htmlFor="actividadComprometida" className="control-label">Actividades o proyectos comprometidos para la atención del ENBIO:</label>
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
export default Enbio;
