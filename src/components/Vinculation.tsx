import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Acciones, Componentes, Ejes} from "../data/vinculation/Ods";

import { useHistory } from "react-router-dom";
import TabsMenu from "./TabsMenu";
import Select from 'react-select';

function Vinculation({onSubmit, store} : {
    onSubmit: SubmitHandler<any>;
    store: any
}) {

    let initial = {value: null, label: ""};
    let history = useHistory();
    const { handleSubmit, register } = useForm();
    const [selectedOption, setSelectedOption] = useState(initial);

    function handleClick() {
        history.push("/otros");
    }

    function goBack() {
        history.push("/pecc");
    }

    const filteredOptions = Acciones.filter(
        (option) => option.link === selectedOption.value
    );

    const addEjesToStore = (item: any) => {
        setSelectedOption(item);
        store.eje = item.value;
    }

    const addAccionesToStore = (item: any) => {
        store.accionPutual = item.value;
    }


    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'ndc'}/>
            </div>
            <div className="col-md-9">
                <div key={2} className="tab-pane" id="vinculacion">
                    <div key={3} className="panel-body">
                        <h4>
                            Vinculación con metas de la Contribución Determinada a Nivel Nacional y la Ley General de Cambio Climático
                        </h4>
                        <hr className="red"/>
                        <h5>Adaptación</h5>
                        <form onChange={handleSubmit(onSubmit)}>
                            <div key={1} className="form-group">
                                <label className='control-label' htmlFor="eje">Eje:</label>
                                <Select options={Ejes}
                                        onChange={val => addEjesToStore(val)}/>
                            </div>
                            <div key={2} className="form-group">
                                <label className='control-label' htmlFor="accionPutual">Acción Puntual:</label>
                                <Select options={filteredOptions} onChange={val => addAccionesToStore(val)}/>
                            </div>
                            <hr/>
                            <h5>Mitigación</h5>
                            <br/>
                            <div key={3} className="form-group">
                                <label className='control-label' htmlFor="componenteMitigacion">Componente de Mitigación:</label>
                                <select className='form-control' {...register('componenteMitigacion', {valueAsNumber: true})}>
                                    <option value="0">Seleccione una opción</option>
                                    {Componentes.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
                                </select>
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
