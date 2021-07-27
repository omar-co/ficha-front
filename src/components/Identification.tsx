import React, {useEffect, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Finalidad, Funcion, Subfuncion} from "../data/cuantificacion/Presupuestos";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Identification({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const initial: any[] = [];
    const {handleSubmit, register, getValues} = useForm({mode: "onBlur"});
    const [gasto, setGasto] = useState(initial);
    const [entidad, setEntidad] = useState(initial);
    const [fuente, setFuente] = useState(initial);
    const [ramo, setRamo] = useState(initial);
    const [modalidad, setModalidad] = useState(initial);
    const [pp, setPp] = useState(initial);
    const [actividad, setActividad] = useState(initial);
    const [unidad, setUnidad] = useState(initial);

    let history = useHistory();

    function handleClick() {
        history.push("/areas");
    }

    const programName = () => {
        if (getValues('programa')) {
            return pp.find(({id}) =>
                id === getValues('programa')
            ).name
        }

        return '';
    };



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

    const fetchData = () => {
        const gastoApi = process.env.REACT_APP_API_URL + '/tipo-gasto';
        const entidadApi = process.env.REACT_APP_API_URL + '/entidad-federativa';
        const fuenteApi = process.env.REACT_APP_API_URL + '/fuente-financiamiento';
        const ramoApi = process.env.REACT_APP_API_URL + '/ramo';
        const modalidadApi = process.env.REACT_APP_API_URL + '/modalidad';

        const getGasto = axios.get(gastoApi)
        const getEntidad = axios.get(entidadApi)
        const getFuente = axios.get(fuenteApi)
        const getRamo = axios.get(ramoApi)
        const getModalidad = axios.get(modalidadApi)
        axios.all([getGasto, getEntidad, getFuente, getRamo, getModalidad]).then(
            axios.spread((...allData) => {
                const allGastoData = allData[0].data;
                const allEntidadData = allData[1].data;
                const allFuenteData = allData[2].data;
                const allRamoData = allData[3].data;
                const allModalidadData = allData[4].data;

                setGasto(allGastoData);
                setEntidad(allEntidadData);
                setFuente(allFuenteData);
                setRamo(allRamoData);
                setModalidad(allModalidadData);
            })
        )
    }

    const getPp = () => {
        if(getValues('ramo') && getValues('modalidad')){
            axios.get(process.env.REACT_APP_API_URL + '/programa-presupuestal/' + getValues('ramo') + '/' + getValues('modalidad')).then(
                (response) => {
                    setPp(response.data)
                }
            )
        }
    }

    const getActividades = () => {
        if(getValues('ramo')){
            const actividadApi = process.env.REACT_APP_API_URL + '/actividad/' + getValues('ramo');
            const unidadApi = process.env.REACT_APP_API_URL + '/unidad-responsable/' + getValues('ramo')

            const getActividad = axios.get(actividadApi)
            const getUnidad = axios(unidadApi)
            axios.all([getActividad, getUnidad]).then(
               axios.spread((...allData) => {
                   const allActividadData = allData[0].data;
                   const allUnidadData = allData[1].data;

                   setActividad(allActividadData);
                   setUnidad(allUnidadData);
               })
            )
        }
    }

    const spendingType = () => (
        gasto.map((obj) =>
            <option value={obj.id}>{obj.nombre}</option>
        )
    );

    const entity = () => (
        entidad.map((obj) =>
            <option value={obj.id}>{obj.nombre}</option>
        )
    );

    const sources = () => (
        fuente.map((obj) =>
            <option value={obj.id}>{obj.nombre}</option>
        )
    );

    const ramos = () => (
        ramo.map((obj) =>
            <option value={obj.id}>{obj.id} - {obj.name}</option>
        )
    )

    const modalidades = () => (
        modalidad.map((obj) =>
            <option value={obj.id}>{obj.letter} - {obj.description}</option>
        )
    );

    useEffect(() => {
        fetchData();
    }, []);

    const programasPresupuestales = () => (
        pp.map((obj) =>
            <option value={obj.id}>{obj.clave} - {obj.name}</option>
        )
    );

    const actividades = () => (
        actividad.map((obj) =>
            <option value={obj.id}>{obj.clave} - {obj.name}</option>
        )
    );

    const unidades = () => (
        unidad.map((obj) =>
            <option value={obj.id}>{obj.clave} - {obj.name}</option>
        )
    );

    return (
        <div className="tab-pane" id="identificacion">
            <div className="panel-body">
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className='control-label' htmlFor="ramo">Ramo:</label>
                            <select className='form-control' {...register("ramo", {
                                valueAsNumber: true,
                                required: true
                            })} onClick={getActividades}>
                                <option value="">Seleccione una opción:</option>
                                {ramos()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="modalidad" className="control-label">Modalidad:</label>
                            <select className="form-control" {...register('modalidad', {required: true})}  onClick={getPp} >
                                <option value="">Selecciona una Opcion</option>
                                {modalidades()}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="modalidad" className="control-label">
                                ID_Programa presupuestario:
                            </label>
                            <select className="form-control" {...register('programa', {valueAsNumber: true})}>
                                <option value="">Selecciona una Opcion</option>
                                {programasPresupuestales()}
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
                            {actividades()}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="unidadResponsable" className="control-label">Unidad Responsable:</label>
                        <select className="form-control" {...register('unidadResponsable')} >
                            <option value="">Selecciona una Opcion</option>
                            {unidades()}
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
                    <hr/>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="tipoGasto" className="control-label">Tipo de gasto:</label>
                            <select className="form-control" {...register('tipoGasto')}>
                                <option>Seleccione una opción</option>
                                {spendingType()}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="fuenteFinanciamiento" className="control-label">Fuente de
                                Financiamiento:</label>
                            <select className='form-control' {...register('fuenteFinanciamiento')}>
                                <option>Seleccione una opción</option>
                                {sources()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="entidadFederativa" className="control-label">Entidad Federativa:</label>
                            <select className='form-control' {...register('entidadFederativa')}>
                                <option>Seleccione una opción</option>
                                {entity()}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="claveCartera" className="control-label">Clave de Cartera:</label>
                            <input className='form-control' {...register('claveCartera')}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group right">
                            <button className='btn btn-primary pull-right' onClick={handleClick} >Siguiente</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Identification
