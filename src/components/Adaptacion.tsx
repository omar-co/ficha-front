import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

function Adaptacion({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}){

    const {handleSubmit, register, getValues} = useForm();
    let totals;

    const totalAmount = () => {
        totals = getValues('fieldOne') +
                 getValues('fieldTwo') +
                 getValues('fieldThree') +
                 getValues('fieldFour') +
                 getValues('fieldFive') +
                 getValues('fieldSix') +
                 getValues('fieldSeven') +
                 getValues('fieldEight') +
                 getValues('fieldNine');
        if(totals){
            return(
                <div className="row">
                    <div className="col-md-12 text-right">
                        <h4>Total: {totals}</h4>
                    </div>
                </div>
            );
        }
    }

    return(
        <div className="tab-pane" id="adaptacion">
            <div className="panel-body">
                <h6>
                    Adaptación
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldOne" className="control-label">
                                ¿El PP y/o alguno de sus componentes se sustentan en resultados oficiales de algún análisis de condiciones económicas, sociales, ambientales y climáticas actuales?
                            </label>
                            <select className="form-control" {...register('fieldOne', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="20">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldTwo" className="control-label">
                                ¿El PP y/o alguno de sus componentes establece metas claras y realistas para atender el objetivo propuesto relacionado con la problemática climática identificada?
                            </label>
                            <select className="form-control" {...register('fieldTwo', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldThree" className="control-label">
                                ¿El PP y/o alguno de sus componentes se enfoca en municipios considerados como vulnerables y/o presenta datos desagregados sobre género, grupos de edad, justicia intergeneracional, comunidades indígenas o atiende para describir su población objetivo?
                            </label>
                            <select className="form-control" {...register('fieldThree', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldFour" className="control-label">
                                ¿El PP y/o alguno de sus componentes establece la realización de sus objetivos a través de un trabajo en conjunto y coordinado (durante todas las fases) entre los diferentes actores involucrados (gente de la comunidad, autoridades, instituciones) promoviendo la inclusión de hombres, mujeres, niños, adultos mayores, afrodescendientes, indígenas?
                            </label>
                            <select className="form-control" {...register('fieldFour', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldFive" className="control-label">
                                ¿El PP  y/o alguno de sus componentes incluye acciones de capacitación local (en aspectos técnicos, financieros, y/u organizativos) relacionados a la adaptación al cambio climático, que considere las necesidades de la población para el atendimiento a la problemática relacionada al clima identificada?
                            </label>
                            <select className="form-control" {...register('fieldFive', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldSix" className="control-label">
                                ¿El PP y/o alguno de sus componentes indica en sus Lineamientos, Términos de Referencia, Reglas de Operación, Bases y/o Convocatorias, que la distribución de recursos en especie o económicos a las personas beneficiarias será guardando principios de no discriminación, inclusión, equidad, y transparencia?
                            </label>
                            <select className="form-control" {...register('fieldSix', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldSeven" className="control-label">
                                ¿El PP y/o alguno de sus componentes presenta estrategias (institucionales, sociales y económicas) para el mantenimiento en el tiempo de las actividades vinculadas con el atendimiento de la problemática relacionada con el clima identificada, aún después de agotados los recursos de tiempo y financiamiento?
                            </label>
                            <select className="form-control" {...register('fieldSeven', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldEight" className="control-label">
                                ¿El PP y/o alguno de sus componentes presenta un análisis de las áreas de oportunidad o limitaciones en cuestiones técnicas, institucionales, financieras o políticas, vinculadas con el atendimiento de la problemática relacionada al clima identificada?
                            </label>
                            <select className="form-control" {...register('fieldEight', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldNine" className="control-label">
                                ¿El PP y/o alguno de sus componentes cuenta con indicadores que permiten dar seguimiento a los avances y a los resultados que deriven de éste, a través de la Matriz de Indicadores para Resultados (MIR) y que permitan ver los cambios en las condiciones de vulnerabilidad?
                            </label>
                            <select className="form-control" {...register('fieldNine', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
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
export default Adaptacion;
