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
    const [nivel, setNivel] = useState(initial);
    const [objetivo, setObjetivo] = useState(initial);
    const [objetivoPrograma, setObjetivoPrograma] = useState(initial);

    let history = useHistory();

    function handleClick() {
        history.push("/areas");
    }

    const programName = () => {
        if (getValues('programa')) {
            return pp.find(({id_pp}) =>
                id_pp === getValues('programa')
            ).desc_pp
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

        const getGasto = axios.get(gastoApi)
        const getEntidad = axios.get(entidadApi)
        const getFuente = axios.get(fuenteApi)
        const getRamo = axios.get(ramoApi)
        axios.all([getGasto, getEntidad, getFuente, getRamo]).then(
            axios.spread((...allData) => {
                const allGastoData = allData[0].data;
                const allEntidadData = allData[1].data;
                const allFuenteData = allData[2].data;
                const allRamoData = allData[3].data;

                setGasto(allGastoData);
                setEntidad(allEntidadData);
                setFuente(allFuenteData);
                setRamo(allRamoData);
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

    const getModalidadesAndNiveles = () => {
        if(getValues('ramo')){
            const modalidadApi = process.env.REACT_APP_API_URL + '/modalidad/' + getValues('ramo');
            const nivelesApi =process.env.REACT_APP_API_URL + '/nivel-objetivo/' + getValues('ramo');
            const getModalidad = axios.get(modalidadApi);
            const getNiveles = axios.get(nivelesApi);
            axios.all([getModalidad, getNiveles]).then(
                axios.spread((...allData) => {
                    const allModalidadData = allData[0].data;
                    const allNivelesData = allData[1].data;

                    setModalidad(allModalidadData);
                    setNivel(allNivelesData);
                })
            )

        }
    }

    const getActividadesUnidadesAndObjetivoPrograma = () => {
        if(getValues('ramo') && getValues('modalidad') && getValues('programa')){
            const actividadApi = process.env.REACT_APP_API_URL + '/actividad/' + getValues('ramo') + '/' + getValues('modalidad') + '/'+ getValues('programa');
            const unidadApi = process.env.REACT_APP_API_URL + '/unidad-responsable/' + getValues('ramo') + '/' + getValues('modalidad') + '/'+ getValues('programa');
            const objetivoProgramaApi = process.env.REACT_APP_API_URL + '/objetivo-programa/' + getValues('ramo') + '/' + getValues('modalidad') + '/'+ getValues('programa');
            const getActividad = axios.get(actividadApi)
            const getUnidad = axios.get(unidadApi)
            const getObjetivoPrograma = axios.get(objetivoProgramaApi)
            axios.all([getActividad, getUnidad, getObjetivoPrograma]).then(
                axios.spread((...allData) => {
                    const allActividadData = allData[0].data;
                    const allUnidadData = allData[1].data;
                    const allObjetivoProgramaData = allData[2].data;

                    setActividad(allActividadData);
                    setUnidad(allUnidadData);
                    setObjetivoPrograma(allObjetivoProgramaData);                })
            )
        }
    }

    const getObjetivos = () => {
        if(getValues('ramo') && getValues('nivel')){
            axios.get(process.env.REACT_APP_API_URL + '/objetivo-mir/' + getValues('ramo') + '/' + getValues('nivel')).then(
                (response) => {
                    setObjetivo(response.data)
                }
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
            <option value={obj.id_modalidad}>{obj.id_modalidad} - {obj.desc_modalidad}</option>
        )
    );

    useEffect(() => {
        fetchData();
    }, []);

    const programasPresupuestales = () => (
        pp.map((obj) =>
            <option value={obj.id_pp}>{obj.id_pp} - {obj.desc_pp}</option>
        )
    );

    const actividades = () => (
        actividad.map((obj) =>
            <div className="row">
                <div className="col-md-12">
                    <input className="form-control" value={obj.id_ai + ' - ' + obj.desc_ai} readOnly/>
                </div>
            </div>
           )
    );

    const unidades = () => (
        unidad.map((obj) =>
            <div className="row">
                <div className="col-md-12">
                    <input className="form-control" value={obj.id_ur + ' - ' + obj.desc_ur} readOnly/>
                </div>
            </div>
        )
    );

   const niveles = () => (
       nivel.map((obj) =>
           <option value={obj.id_nivel}>{obj.desc_nivel}</option>
       )
   );

   const objetivos = () => (
       objetivo.map((obj) =>
           <option value={obj.id_objetivo}>{obj.desc_objetivo}</option>
       )
   );

   const objetivosPrograma = () => (
       objetivoPrograma.map((obj) =>
           <div className="row">
               <div className="col-md-12">
                   <input className="form-control" value={obj.objetivo_progr_pres} readOnly/>
               </div>
           </div>
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
                            })} onClick={getModalidadesAndNiveles}>
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
                            <select className="form-control" {...register('programa', {valueAsNumber: true})} onClick={getActividadesUnidadesAndObjetivoPrograma}>
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
                        {actividades()}
                    </div>
                    <div className="form-group">
                        <label htmlFor="unidadResponsable" className="control-label">Unidad Responsable:</label>
                        {unidades()}
                    </div>
                    <div className="form-group">
                        <label htmlFor="objetivo" className="control-label">Objetivo del Programa (Propósito):</label>
                        {objetivosPrograma()}
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
                                <option value="">Seleccione una opción</option>
                                {Finalidad.map((index) => <option value={index.id}>{index.name}</option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="funcion">Función:</label>
                            <select className="form-control" {...register('funcion', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                {funciones()}
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label className='control-label' htmlFor="subfuncion">Subfunción:</label>
                            <select className="form-control" {...register('subfuncion')}>
                                <option value="">Seleccione una opción</option>
                                {subfunctions()}
                            </select>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="tipoGasto" className="control-label">Tipo de gasto:</label>
                            <select className="form-control" {...register('tipoGasto')}>
                                <option value="">Seleccione una opción</option>
                                {spendingType()}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="fuenteFinanciamiento" className="control-label">Fuente de
                                Financiamiento:</label>
                            <select className='form-control' {...register('fuenteFinanciamiento')}>
                                <option value="">Seleccione una opción</option>
                                {sources()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="entidadFederativa" className="control-label">Entidad Federativa:</label>
                            <select className='form-control' {...register('entidadFederativa')}>
                                <option value="">Seleccione una opción</option>
                                {entity()}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="claveCartera" className="control-label">Clave de Cartera:</label>
                            <input className='form-control' {...register('claveCartera')}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <label className="control-label">Objetivos MIR</label>
                        </div>
                    </div>
                    <hr className="red"/>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="nivel" className="control-label">Nivel</label>
                            <select className="form-control" {...register('nivel')} onClick={getObjetivos} >
                                <option value="">Seleccione una opción...</option>
                                {niveles()}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="objetivoMir" className="control-label">Objetivo MIR:</label>
                            <select className="form-control" {...register('objetivoMir')}>
                                <option value="">Seleccione una opción...</option>
                                {objetivos()}
                            </select>
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
