import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Ods} from "../data/indicadores/Ods";
import {PnccAdaptacion, PnccMitigacion} from "../data/indicadores/Pncc";

function Indicadores({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {
    const {handleSubmit, register } = useForm();

    return (
    <div className="tab-pane" id="indicadores">
        <div className="panel-body">
            <label className="control-label">Vinculación con los indicadores de la Agenda 2030 para el Desarrollo Sostenible de la ONU:</label>
            <hr className="red"/>
            <form onChange={handleSubmit(onSubmit)}>
                <label className="control-label">Mitigación:</label>
                <hr/>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label className='control-label' htmlFor="odsMitigacion">Objetivo de Desarrollo Sostenible_1:</label>
                        <select className='form-control' {...register("odsMitigacion", {valueAsNumber: true})}>
                            {Ods.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="indicadorMitigacion" className="control-label">Indicador:</label>
                        <select className='form-control' {...register("indicadorMitigacion", {valueAsNumber: true})}>
                            <option value="1">Si</option>
                            <option value="2">Demo</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label className='control-label' htmlFor="odsMitigacion2">Objetivo de Desarrollo Sostenible_2:</label>
                        <select className='form-control' {...register("odsMitigacion2", {valueAsNumber: true})}>
                            {Ods.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="indicadorMitigacion2" className="control-label">Indicador:</label>
                        <select className='form-control' {...register("indicadorMitigacion2", {valueAsNumber: true})}>
                            <option value="1">Si</option>
                            <option value="2">Demo</option>
                        </select>
                    </div>
                </div>
                <label className="control-label">Adaptación:</label>
                <hr/>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label className='control-label' htmlFor="odsAdaptacion">Objetivo de Desarrollo Sostenible_1:</label>
                        <select className='form-control' {...register("odsAdaptacion", {valueAsNumber: true})}>
                            {Ods.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="indicadorAdaptacion" className="control-label">Indicador:</label>
                        <select className='form-control' {...register("indicadorAdaptacion", {valueAsNumber: true})}>
                            <option value="1">Si</option>
                            <option value="2">Demo</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label className='control-label' htmlFor="odsAdaptacion2">Objetivo de Desarrollo Sostenible_2:</label>
                        <select className='form-control' {...register("odsAdaptacion2", {valueAsNumber: true})}>
                            {Ods.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="indicadorAdaptacion2" className="control-label">Indicador:</label>
                        <select className='form-control' {...register("indicadorAdaptacion2", {valueAsNumber: true})}>
                            <option value="1">Si</option>
                            <option value="2">Demo</option>
                        </select>
                    </div>
                </div>
                <label className="control-label">Vinculación con el Sistema de Indicadores de la Política Nacional de Cambio Climático:</label>
                <hr className="red"/>
                <label className="control-label">Mitigación:</label>
                <hr/>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccMitigacion" className="control-label">Indicador_1:</label>
                        <select className='form-control' {...register("pnccMitigacion", {valueAsNumber: true})}>
                            {PnccMitigacion.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccMitigacion2" className="control-label">Indicador_2:</label>
                        <select className='form-control' {...register("pnccMitigacion2", {valueAsNumber: true})}>
                            {PnccMitigacion.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                </div>
                <label className="control-label">Adaptación:</label>
                <hr/>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccAdaptacion" className="control-label">Indicador_1:</label>
                        <select className='form-control' {...register("pnccAdaptacion", {valueAsNumber: true})}>
                            {PnccAdaptacion.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccAdaptacion2" className="control-label">Indicador_2:</label>
                        <select className='form-control' {...register("pnccAdaptacion2", {valueAsNumber: true})}>
                            {PnccAdaptacion.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );


}
export default Indicadores;
