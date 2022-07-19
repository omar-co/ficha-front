import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Acciones, Componentes, Ejes} from "../data/vinculation/Ods";
import { useHistory } from "react-router-dom";
import TabsMenu from "./TabsMenu";
import Select from 'react-select';
import NavigationService from "../services/NavigationService";

function Vinculation({onSubmit, store} : {
    onSubmit: SubmitHandler<any>;
    store: any
}) {

    if (!store.eje) {
        store.eje = [];
    }
    if (!store.accionPutual) {
        store.accionPutual = [];
    }
    if(!store.componenteMitigacion){
        store.componenteMitigacion = [];
    }

    let history = useHistory();
    const { handleSubmit, register } = useForm();
    const [selectedOption, setSelectedOption] = useState(store.eje);
    const [accionPutual, setAccionPutual] = React.useState(store.accionPutual);
    const [componente, setComponente] = React.useState(store.componenteMitigacion);

    function handleClick(e) {
        e.preventDefault();
        NavigationService.next('ndc');
        history.push(NavigationService.nextValue);
        window.scrollTo(0,0);
    }

    function goBack(e) {
        e.preventDefault();
        NavigationService.prev('ndc');
        history.push(NavigationService.prevValue);
        window.scrollTo(0,0);
    }

    const addEjesToStore = (item: any) => {
        setSelectedOption(item.map((obj) =>
            obj.value
        ));
    }

    const addAccionPuntualToStore = (item: any) => {
        setAccionPutual(item.map((obj) =>
            obj.value
        ));
    }

    const addComponentesToStore = (item: any) => {
        setComponente(item.map((obj) =>
            obj.id
        ));
    }

    const ejes = () => (
        <Select
            isMulti
            className="reactSelect"
            name="ejesMultipleSelect"
            placeholder="Eje"
            defaultValue={Ejes.filter(item => store.eje.includes(item.value))}
            onChange={addEjesToStore}
            options={Ejes}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            ref={() => register('ejesMultipleSelect')}
        />
    );

    const accionesPuntuales = () => (
        <Select
            isMulti
            className="reactSelect"
            name="accionesPuntualesMultipleSelect"
            placeholder="Acciones Puntuales"
            onChange={addAccionPuntualToStore}
            defaultValue={Acciones.filter(item => store.accionPutual.includes(item.value))}
            options={Acciones.filter(item => (
                // @ts-ignore
                selectedOption && selectedOption.includes(item.link)
            ))}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.value}
            ref={() => register('accionesPuntualesMultipleSelect')}
        />
    );

    const componentes = () => (
        <Select
            isMulti
            className="reactSelect"
            name="componentesMultipleSelect"
            placeholder="Componente Mitigacion"
            defaultValue={Componentes.filter(item => store.componenteMitigacion.includes(item.id))}
            onChange={addComponentesToStore}
            options={Componentes}
            getOptionLabel={(option) => option.nombre}
            getOptionValue={(option) => option.id}
            ref={() => register('componentesMultipleSelect')}
        />
    );

    const updateForm = () => {
        store.eje = selectedOption;
        store.accionPutual = accionPutual;
        store.componenteMitigacion = componente;
        return handleSubmit(onSubmit);
    }


    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'ndc'}/>
            </div>
            <div className="col-md-9">
                <div key={2} className="tab-pane" id="vinculacion">
                    <div key={3} className="panel-body">
                        <h4>Vinculación con los componentes de la Contribución Determinada a Nivel Nacional</h4>
                        <hr className="red"/>
                        <h5>Adaptación</h5>
                        <form onChange={updateForm()}>
                            <div key={1} className="form-group">
                                <label className='control-label' htmlFor="eje">Eje:</label>
                                {ejes()}
                            </div>
                            {store.eje !== 10 && <div key={2} className="form-group">
                                <label className='control-label' htmlFor="accionPutual">Acción Puntual:</label>
                                {accionesPuntuales()}
                            </div>}
                            <hr/>
                            <h5>Mitigación</h5>
                            <br/>
                            <div key={3} className="form-group">
                                <label className='control-label' htmlFor="componenteMitigacion">Sector:</label>
                                {componentes()}
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

export default Vinculation
