import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

function Mitigacion({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}){
    let totals;
    const {handleSubmit, register, getValues} = useForm();

    const totalAmount = () => {
        totals = getValues('definicion') +
                 getValues('tipo') +
                 getValues('gycei') +
                 getValues('fuentes') +
                 getValues('metodologia') +
                 getValues('estimaciones') +
                 getValues('principios') +
                 getValues('factores') +
                 getValues('datos') +
                 getValues('actividades') +
                 getValues('dictamen');
        if(totals){
            return (<div className="row">
                        <div className="col-md-12 text-right">
                            <h4>Total: {totals}</h4>
                        </div>
                    </div>);
        }
    }

    return(
        <div className="tab-pane" id="mitigacion">
            <div className="panel-body">
                <h6>
                    Mitigación
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="definicion" className="control-label">¿Se cuenta con una definición del límite geográfico en la que se lleve a cabo el proyecto y/o actividad?</label>
                            <select className="form-control" {...register('definicion', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="tipo" className="control-label">¿Se identifica el tipo sector y subsector productivo?</label>
                            <select className="form-control" {...register('tipo', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="gycei" className="control-label">¿Se han identificado todos  los GyCEI que deben reportarse (REGLAMENTO de la Ley General de Cambio Climático en Materia del Registro Nacional de Emisiones. Art. 5)?</label>
                            <select className="form-control" {...register('gycei', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fuentes" className="control-label">¿Se han identificado fuentes de emisión (fijas o móviles) en su totalidad?</label>
                            <select className="form-control" {...register('fuentes', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="metodologia" className="control-label">¿Se utiliza metodología del IPCC para calcular las emisiones?</label>
                            <select className="form-control" {...register('metodologia', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="estimaciones" className="control-label">¿Abarcan todas las fuentes de emisión para evitar contar con estimaciones? </label>
                            <select className="form-control" {...register('estimaciones', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="5">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="principios" className="control-label">¿Se siguen principios de transparencia, exhaustividad, coherencia, comparabilidad y exactitud?</label>
                            <select className="form-control" {...register('principios', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="5">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="factores" className="control-label">¿Se utilizan factores de emisión  por defecto para todas las categorías de emisión, o se han realizado estudios para obtener los factores de emisión?</label>
                            <select className="form-control" {...register('factores', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="8">Por defecto</option>
                                <option value="10">Factores internacionales</option>
                                <option value="5">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="datos" className="control-label">¿Se identifica los datos de actividad con un nivel de desagregación por fuente, planta, equipo o unidad?</label>
                            <select className="form-control" {...register('datos', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="actividades" className="control-label">¿Se realizaron actividades de control y/o  aseguramiento de calidad para garantizar la confiabilidad de los datos de actividad?</label>
                            <select className="form-control" {...register('actividades', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="dictamen" className="control-label">¿Se ha presentado un Dictamen de Verificación ante SEMARNAT ?</label>
                            <select className="form-control" {...register('dictamen', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    {totalAmount()}
                </form>
            </div>
        </div>
    );


}
export default Mitigacion;
