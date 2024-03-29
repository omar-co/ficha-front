import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import TabsMenu from "./TabsMenu";
import BotonSiguiente from "./BotonSiguiente";
import { useHistory } from "react-router-dom";
import NavigationService from "../services/NavigationService";

function Pregunta({onSubmit, store}: {
    store: any
    onSubmit: SubmitHandler<any>;
}) {

    let history = useHistory();
    const {handleSubmit, register} = useForm();

    function goBack(e) {
        e.preventDefault();
        NavigationService.prev('pregunta');
        history.push(NavigationService.prevValue);
        window.scrollTo(0,0);
    }


    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'pregunta'}/>
            </div>
            <div className="col-md-9">
                <div>
                    <form onChange={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-12">
                                <label className="control-label">Vinculación entre el Programa presupuestario (Pp) y la Política Nacional de Cambio Climático (PNCC)</label>
                                <hr className="red"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="directamente" className="control-label">
                                    ¿Cómo considera que es la contribución de las acciones sustantivas y de apoyo del Pp
                                    a la PNCC (PECC, NDC, etc.) de acuerdo con los objetivos seleccionados en las etapas previas?
                                </label>
                                <select className="form-control" {...register('directamente', {valueAsNumber: true})} defaultValue={store.directamente}>
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Explícitamente/Directamente</option>
                                    <option value="0">Implícitamente/Indirectamente</option>
                                </select>
                                <br/>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-secondary" onClick={goBack}>Regresar</button>
                                </div>
                                <div className="form-group right col-md-6">
                                    <BotonSiguiente store={store}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Pregunta;
