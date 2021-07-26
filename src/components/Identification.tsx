import React, {useEffect, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Ramos} from "../data/identification/Ramos";
import {Nombres} from "../data/identification/ProgramasPresupestales";
import {Programas} from "../data/identification/Modalidad";
import axios from "axios";
import {Finalidad, Funcion, Subfuncion} from "../data/cuantificacion/Presupuestos";

function Identification({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, getValues, formState: { errors }} = useForm({mode: "onBlur"});

    const [data, setData] = useState(  {data: []} );

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/capitulo').then(
            res => setData(res.data)
        );
    }, []);

    // const conceptoRequest = () => {
    //     getValues('capitulo') && axios.get(process.env.REACT_APP_API_URL + '/capitulo/' + getValues('capitulo')).then(
    //         res => console.log(res.data)
    //     );
    // }

    const modalities = () => (
        getValues('ramo') ? Ramos.filter(({value}) =>
            value === getValues('ramo')).map(ramo =>
            ramo.modalidad!.map(modalidad => (
                <option value={modalidad}>{modalidad}</option>))) : null
    );

    const key = () => (
        getValues('ramo') + '-' + getValues('modalidad')
    )

    const programa = () => (
            (getValues('modalidad') && getValues('ramo')) ?
                Programas.find(({id}) => id === key()) : null
        )
    ;

    const programaId = () => (
        programa() ?
            programa()!.values.map(({id}) => (
                <option value={id}>{id}</option>
            )) : null
    );

    const programName = () => {
        if (programa() && getValues('programa')) {
            const value = programa()?.values.find(({id}) => getValues('programa') === id);
            if (value) {
                return value.label;
            }
        }

        return '';
    };

    const responsible = () => {
        const ramo = Nombres.find(({ramo, modalidad, value}) => (
            (ramo === getValues('ramo') && modalidad === getValues('modalidad') && value === getValues('programa'))
        ));

        if (ramo) {
            return ramo.ur.map((value) => (
                <option value={value}>{value}</option>
            ))
        }
    }

    const activities = () => {
        const ramo = Nombres.find(({ramo, modalidad, value}) => (
            (ramo === getValues('ramo') && modalidad === getValues('modalidad') && value === getValues('programa'))
        ));

        if (ramo) {
            const index = ramo.actividadId;
            const value = ramo.actividadInstitucional;
            return <option value={index}>{value}</option>
        }
    }

    const capitulos = () => (
        data.data && getValues('capitulo') ? data.data.filter(({capitulo}) =>
            capitulo === getValues('capitulo')).map(concepto => (
            <option value={concepto}>{concepto}</option>
            )
        ) : null
    );

    const funciones = () => (
        getValues('finalidad') ? Funcion.filter(({finalidad_id}) =>
            finalidad_id === getValues('finalidad')).map(obj => (
                <option value={obj.id}>{obj.name}</option>
            )
        ) : null
    );

    const subfunctions = () => (
        getValues('funcion') ? Subfuncion.filter(({funcion_id}) =>
            funcion_id === getValues('funcion')).map(obj => (
                <option value={obj.id}>{obj.name}</option>
            )
        ) : null
    );

    return (
        <div className="tab-pane active" id="identificacion">
            <div className="panel-body">
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className='control-label' htmlFor="ramo">Ramo:</label>
                            <select className='form-control' {...register("ramo", {valueAsNumber: true, required: true})}>
                                {Ramos.map(({value, label}, index) => <option key={index} value={value}>{label}</option>)}
                            </select>
                            {errors.ramo?.type === 'required' && <span className="obligatorio">Dato Obligatorio</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="modalidad" className="control-label">Modalidad:</label>
                            <select className="form-control" {...register('modalidad', {required: true})}>
                                <option value="">Selecciona una Opcion</option>
                                {modalities()}
                            </select>
                            {errors.modalidad?.type === 'required' && <span className="obligatorio">Dato Obligatorio</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="modalidad" className="control-label">
                                ID_Programa presupuestario:
                            </label>
                            <select className="form-control" {...register('programa', {valueAsNumber: true})}>
                                <option value="">Selecciona una Opcion</option>
                                {programaId()}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombrePrograma" className="control-label">Nombre del programa
                            presupuestario:</label>
                        <input className="form-control" {...register('nombrePrograma')} value={programName()} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="actividadInstitucional" className="control-label">Actividad
                            Institucional:</label>
                        <select className="form-control" {...register('actividadInstitucional')} >
                            <option value="">Selecciona una Opcion</option>
                            {activities()}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="unidadResponsable" className="control-label">Unidad Responsable:</label>
                        <select className="form-control" {...register('unidadResponsable')} >
                            <option value="">Selecciona una Opcion</option>
                            {responsible()}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="objetivo" className="control-label">Objetivo del Programa (Propósito):</label>
                        <input className="form-control" {...register('objetivo')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="componentes" className="control-label">Bienes y productos generados con posible
                            incidencia (Componentes)_1:</label>
                        <input className="form-control" {...register('componentes')} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="actividades" className="control-label">Actividad(es) actual(es) con posible
                            incidencia_1:</label>
                        <textarea className="form-control" {...register('actividades')} />
                    </div>
                    <label htmlFor="partida" className="control-label">Partida especifica</label>
                    <hr className="red"/>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="capitulo" className="control-label">Capitulo</label>
                            <select className="form-control" {...register('capitulo')}>
                                <option value="">Seleccione una opcion</option>
                                <option value="1000">1000</option>
                                <option value="2000">2000</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                                <option value="5000">5000</option>
                                <option value="6000">6000</option>
                                <option value="7000">7000</option>
                                <option value="8000">8000</option>
                                <option value="9000">9000</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="concepto" className="control-label">Concepto</label>
                            <select className="form-control" {...register('concepto')}>
                                {capitulos()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="partidaGenerica" className="control-label">Partida Generica</label>
                            <select className="form-control">
                                {/*{partidaEspecifica()}*/}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="partidaEspecifica" className="control-label">Partida Especifica</label>
                            <select className="form-control">
                                <option value="1">1</option>
                                <option value="1">2</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="descripcion" className="control-label">Descripcion</label>
                            <input className="form-control" {...register('nombrePrograma')} readOnly/>
                        </div>
                    </div>
                    <br/>
                    <label htmlFor="mitigacion" className="control-label">
                        Partida presupuestaria al ATCC_1 (Mitigación)
                    </label>
                    <hr className="red"/>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="finalidad">Finalidad:</label>
                            <select className='form-control' {...register('finalidad', {valueAsNumber: true})}>
                                <option>Seleccione una opción</option>
                                {Finalidad.map((index) => <option value={index.id}>{index.name}</option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="funcion">Función:</label>
                            <select className="form-control" {...register('funcion', {valueAsNumber: true})}>
                                <option>Seleccione una opción</option>
                                {funciones()}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="subfuncion">Subfunción:</label>
                            <select className="form-control" {...register('subfuncion')}>
                                <option>Seleccione una opción</option>
                                {subfunctions()}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Identification
