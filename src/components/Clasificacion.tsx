import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import TabsMenu from "./TabsMenu";

function Clasificacion({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any
}) {
    if (store) {
        store.p1 = 0;
        store.p2 = 0;
        store.p3 = 0;
        store.p4 = 0;
        store.gasto = 0;
    }

    const {handleSubmit, register, getValues} = useForm();

    const segundaPregunta = () => (
        getValues('p1') === 1 ? <div className="row">
            <br/>
            <div className="col-md-12">
                <div className="from-group">
                    <label htmlFor="p2">
                        P2. ¿Tiene el programa presupuestario un impacto ambiental claro o participa
                        directamente en la producción de bienes o servicios ambientales? ¿Es su objetivo
                        prioritario proteger la biodiversidad, mejorar la calidad del aire o mejorar la calidad
                        del agua?
                    </label>
                    <select id="p2" className="form-control" {...register('p2', {valueAsNumber: true})}>
                        <option selected>Seleccione una Opción</option>
                        <option value="3">Si</option>
                        <option value="0">No</option>
                    </select>
                </div>
            </div>
        </div> : null
    )

    const tercerPregunta = () => (
        getValues('p2') === 0 ? <div className="row">
            <br/>
            <div className="col-md-12">
                <div className="from-group">
                    <label htmlFor="p3">P3. ¿Tiene el programa presuuestario un impacto indirecto
                        favorable? ¿Es
                        su objetivo secundario (indirecto) proteger la biodiversidad, mejorar la calidad
                        del
                        aire o mejorar la calidad del agua?</label>
                    <select id="p3" className="form-control" {...register('p3', {valueAsNumber: true})}>
                        <option selected>Seleccione una Opción</option>
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                </div>
            </div>
        </div> : null
    )

    const radioButtons = () => (
        getValues('p3') === 1 ? <div className="row">
            <br/>

            <div className="col-md-12">
                <div className="from-group">
                    <label htmlFor="p4">
                        Por favor seleccione el tipo de gasto
                    </label>
                    <select id="p4" className="form-control" {...register('gasto', {valueAsNumber:true})}>
                        <option selected>Seleccione una Opción</option>
                        <option value="1">Gasto
                            favorable pero
                            contradictorio</option>
                        <option value="2">Gasto
                            favorable</option>
                    </select>
                </div>
            </div>
        </div> : null
    )

    const cuartaPregunta = () => (
        getValues('p3') === 0 ? <div className="row">
            <br/>
            <div className="col-md-12">
                <div className="from-group">
                    <label htmlFor="p4">
                        P4. ¿Tiene el programa presupuestario algún efecto significativo sobre el
                        medio
                        ambiente?
                    </label>
                    <select id="p4" className="form-control" {...register('p4', {valueAsNumber:true})}>
                        <option selected>Seleccione una Opción</option>
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                </div>
            </div>
        </div> : null
    )

    const quintaPregunta = () => (
        getValues('p4') === 1 ? <div className="row">
            <br/>
            <div className="col-md-12">
                <div className="from-group">
                    <label htmlFor="p5">
                        P5. ¿Tiene el programa presupuestario algún impacto ambiental negativo o
                        promueve
                        comportamientos perjudiciales para el medio ambiente?
                    </label>
                    <select id="p5" className="form-control" {...register('p5', {valueAsNumber:true})}>
                        <option selected>Seleccione una Opción</option>
                        <option value="-1">Si</option>
                    </select>
                </div>
            </div>
        </div> : null
    )

    const mensajeFinalFavorable = () => (
        (getValues('p1') === 1 && getValues('p2') === 3) ? <div className="row">
            <br/>
            <div className="col-md-12">
                 <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">¡Atención!</h4>
                    <p>El programa presupuestario tiene un impacto ambiental favorable.</p>
                </div>
            </div>
        </div> : null
    )

    const mensajeFinalNeutro = () => (
        (getValues('gasto') === 1 || getValues('gasto') === 2) ? <div className="row">
            <br/>
            <div className="col-md-12">
                 <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">¡Atención!</h4>
                    <p>El programa presupuestario no tiene un impacto ambiental directo.</p>
                </div>
            </div>
        </div> : null
    )

    const mensajeFinalNegativo = () => (
        (getValues('p5') === -1 ) ? <div className="row">
            <br/>
            <div className="col-md-12">
                 <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">¡Atención!</h4>
                    <p>El programa presupuestario no tiene un impacto directo favorable.</p>
                </div>
            </div>
        </div> : null
    )

    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'clasificacion'}/>
            </div>
            <div className="col-md-9">
                <div className="tab-pane" id="vinculacion">
                    <h4>Clasificación de los Pp a los objetivos y metas ambientales: Agua, Biodiversidad y Calidad
                        del
                        Aire.</h4>
                    <hr className="red"/>
                    <form onChange={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="from-group">
                                    <label htmlFor="p1">P1. ¿Hay información suficiente para poder determinar el
                                        impacto
                                        ambiental del programa presupuestario?</label>
                                    <select id="p1" className="form-control"
                                            {...register('p1', {valueAsNumber: true})}>
                                        <option selected>Seleccione una Opción</option>
                                        <option value="1">Si</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                {segundaPregunta()}
                                {tercerPregunta()}
                                {radioButtons()}
                                {cuartaPregunta()}
                                {quintaPregunta()}
                                {mensajeFinalFavorable()}
                                {mensajeFinalNegativo()}
                                {mensajeFinalNeutro()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 center">
                                <br/>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Clasificacion;
