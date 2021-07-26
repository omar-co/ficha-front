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
                        <label htmlFor="pnccMitigacion" className="control-label">Emisiones totales nacionales de gases y compuestos de efecto invernadero en CO2e:</label>
                        <select className='form-control' {...register("pnccMitigacion", {valueAsNumber: true})}>
                            <option value="">Selecciona una Opcion</option>
                            {PnccMitigacion.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <br/>
                        <label htmlFor="pnccMitigacion2" className="control-label">Emisión de bióxido de carbono por quema de combustibles fósiles:</label>
                        <select className='form-control' {...register("pnccMitigacion2", {valueAsNumber: true})}>
                            <option value="">Selecciona una Opcion</option>
                            {PnccMitigacion.map(({id, name}, index) => <option value={id}>{name}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccMitigacion3" className="control-label">Toneladas de CO2e mitigadas por el Programa Especial de Cambio Climático:</label>
                        <input className="form-control" {...register('pnccMitigacion3')}/>
                    </div>
                    <br/>
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccMitigacion4" className="control-label">Emisión de bióxido de carbono por Producto Interno Bruto:</label>
                        <input className="form-control" {...register('pnccMitigacion4')}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <br/>
                        <label htmlFor="pnccMitigacion5" className="control-label">Emisión per cápita por bióxido de carbono:</label>
                        <input className="form-control" {...register('pnccMitigacion5')}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccMitigacion6" className="control-label">Participación de fuentes renovables y alternas en la producción nacional de energía:</label>
                        <input className="form-control" {...register('pnccMitigacion6')}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccMitigacion7" className="control-label">Participación de fuentes de energía límpia para la generación de energía eléctrica:</label>
                        <input className="form-control" {...register('pnccMitigacion7')}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pnccMitigacion8" className="control-label">Participación de fuentes de energía límpia para la generación de energía eléctrica:</label>
                        <input className="form-control" {...register('pnccMitigacion8')}/>
                    </div>
                </div>
                <label className="control-label">Adaptación:</label>
                <hr/>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="pnccAdaptacion" className="control-label">Fortalecimiento de capacidades adaptativas de los municipios para responder al cambio climático:</label>
                        <select className='form-control' {...register("pnccAdaptacion", {valueAsNumber: true})}>
                            <option value="">Selecciona una Opcion</option>
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
