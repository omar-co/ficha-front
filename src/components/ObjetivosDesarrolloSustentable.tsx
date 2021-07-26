import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Ods} from "../data/indicadores/Ods";

function ObjetivosDesarrolloSustentable({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}){

    const {handleSubmit, register} = useForm();

    return(
        <div className="tab-pane" id="ods">
            <div className="panel-body">
                <h6>
                    Vinculación con los indicadores de la Agenda 2030 para el Desarrollo Sostenible de la ONU
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <label className="control-label">Mitigación:</label>
                    <hr/>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className='control-label' htmlFor="odsMitigacion">Objetivo de Desarrollo Sostenible_1:</label>
                            <select className='form-control' {...register("odsMitigacion", {valueAsNumber: true})}>
                                {Ods.map(({id, name}) => <option value={id}>{name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className='control-label' htmlFor="odsMitigacion2">Objetivo de Desarrollo Sostenible_2:</label>
                            <select className='form-control' {...register("odsMitigacion2", {valueAsNumber: true})}>
                                {Ods.map(({id, name}) => <option value={id}>{name}</option>)}
                            </select>
                        </div>
                    </div>
                    <label className="control-label">Adaptación:</label>
                    <hr/>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className='control-label' htmlFor="odsAdaptacion">Objetivo de Desarrollo Sostenible_1:</label>
                            <select className='form-control' {...register("odsAdaptacion", {valueAsNumber: true})}>
                                {Ods.map(({id, name}) => <option value={id}>{name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className='control-label' htmlFor="odsAdaptacion2">Objetivo de Desarrollo Sostenible_2:</label>
                            <select className='form-control' {...register("odsAdaptacion2", {valueAsNumber: true})}>
                                {Ods.map(({id, name}) => <option value={id}>{name}</option>)}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default ObjetivosDesarrolloSustentable
