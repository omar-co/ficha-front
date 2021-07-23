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
                 getValues('fieldNine') +
                 getValues('fieldTen') +
                 getValues('fieldEleven') +
                 getValues('fieldTwelve') +
                 getValues('fieldThirteen') +
                 getValues('fieldFourteen') +
                 getValues('fieldFifteen') +
                 getValues('fieldSixteen');
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
                            <label htmlFor="fieldOne" className="control-label">¿La propuesta menciona explícitamente la alineación con la política internacional, nacional y subnacional de desarrollo y cambio climático?</label>
                            <select className="form-control" {...register('fieldOne', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="3">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldTwo" className="control-label">La propuesta presenta una descripción de las condiciones climáticas, económicas y sociales actuales, que serán punto de partida y referencia para monitorear, medir y evaluar los resultados que espera alcanzar.</label>
                            <select className="form-control" {...register('fieldTwo', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldThree" className="control-label">¿El Pp promueve la colaboración entre diferentes dependencias (públicas, privadas, OSC) para atender el cumplimiento de los objetivos con distintos enfoques)?</label>
                            <select className="form-control" {...register('fieldThree', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="5">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldFour" className="control-label">¿Menciona las actividades o regulaciones institucionales que apoyarán a atender la problemática identificada e identifica las limitaciones institucionales y/o políticas para el desarrollo del Pp e indica claramente cómo serán abordadas?</label>
                            <select className="form-control" {...register('fieldFour', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="5">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldFive" className="control-label">La propuesta presenta un análisis de las áreas de oportunidad o limitaciones en cuestiones económicas, sociales, culturales relacionadas con la medida</label>
                            <select className="form-control" {...register('fieldFive', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldSix" className="control-label">La propuesta presenta un análisis de las áreas de oportunidad o limitaciones en cuestiones técnicas, institucionales, o políticas relacionadas con la ejecución de la medida</label>
                            <select className="form-control" {...register('fieldSix', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldSeven" className="control-label">¿El Pp establece metas claras y realistas para atender el objetivo propuesto?</label>
                            <select className="form-control" {...register('fieldSeven', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="3">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldEight" className="control-label">¿El programa presupuestario indica claramente en sus Lineamientos, Términos de Referencia, Reglas de Operación, Bases y/o Convocatorias, que la asignación de recursos en especie o económicos a las personas beneficiarias será guardando principios de no discriminación, inclusión, equidad, y transparencia?</label>
                            <select className="form-control" {...register('fieldEight', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldNine" className="control-label">¿Dentro de la propuesta se cuenta con un plan de capacitación local (en aspectos técnicos, financieros, y/u organizativos) que considere las necesidades de la población para el atendimiento a la problemática identificada?</label>
                            <select className="form-control" {...register('fieldNine', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="5">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldTen" className="control-label">¿El programa presupuestario incluye actividades de fortalecimiento de capacidades a nivel institucional en aspectos técnicos, financieros, y/u organizativos?</label>
                            <select className="form-control" {...register('fieldTen', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="3">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldEleven" className="control-label">¿El programa presupuestario busca reducir las brechas de género y/o incluye actividades específicas para su integración, considerando lo establecido en la Ley General para la Igualdad entre Mujeres y Hombres?</label>
                            <select className="form-control" {...register('fieldEleven', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="5">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldTwelve" className="control-label">¿La propuesta presenta datos desagregados sobre género, grupos de edad, justicia intergeneracional, comunidades indígenas para describir su población objetivo?</label>
                            <select className="form-control" {...register('fieldTwelve', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldThirteen" className="control-label">¿El programa presupuestario establece la realización de los objetivos de éste a través de un trabajo en conjunto y coordinado (durante todas las fases) entre los diferentes actores involucrados (gente de la comunidad, autoridades, instituciones) promoviendo la inclusión de hombres, mujeres, niños, adultos mayores, afrodescendientes, indígenas?</label>
                            <select className="form-control" {...register('fieldThirteen', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="10">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldFourteen" className="control-label">¿El programa presupuestario establece indicadores que permiten dar seguimiento a los avances y a los resultados que deriven de éste, a través de la Matriz de Indicadores para Resultados (MIR) y/o el Índice de Seguimiento al Desempeño (ISeD)?</label>
                            <select className="form-control" {...register('fieldFourteen', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="5">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldFifteen" className="control-label">¿Presenta estrategias (institucionales, sociales y económicas) para el mantenimiento en el tiempo de las actividades relacionadas con la implementación del proyecto, aún después de agotados los recursos tiempo y financiamiento?</label>
                            <select className="form-control" {...register('fieldFifteen', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="3">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fieldSixteen" className="control-label">¿Identifica o estima beneficios adicionales ambientales o en la población, así como los vinculados con mitigación al implementar la medida, diferentes a los mencionados en las metas?</label>
                            <select className="form-control" {...register('fieldSixteen', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="3">Si</option>
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
