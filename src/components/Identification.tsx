import React, {useEffect, useState} from "react";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TabsMenu from "./TabsMenu";
import Select from 'react-select';
import ObjetivosDesarrolloSustentable from "./ObjetivosDesarrolloSustentable";
import {authHeader} from "../helpers/AuthHeader";

function Identification({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any;
}) {

    const initial: any[] = [];
    const {handleSubmit, register, getValues} = useForm({mode: "onBlur"});
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
        history.push("/indicadores");
        window.scrollTo(0,0);
    }

    const programName = () => {
        if (getValues('programa')) {
            return pp.find(({id_pp}) =>
                id_pp === getValues('programa')
            ).desc_pp
        }

        return '';
    };

    const fetchData = () => {
        const ramoApi = process.env.REACT_APP_API_URL + '/ramo';
        axios.get(ramoApi, {headers: authHeader()}).then(
            (response) => {
                setRamo(response.data)
            }
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
                    setObjetivoPrograma(allObjetivoProgramaData);
                })
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

    const methods = useForm();

    const addActividadesToMainStore = (item: any) => {
        store.actividadMultiple = item.map((obj) => obj.id_ai);
    }

    const addUnidadesToMainStore = (item: any) => {
        store.unidadMultiple = item.map((obj) => obj.id_ur)
    }

    const actividades = () => (

        <Controller
            name={'actividadMultipleSelect'}
            control={methods.control}
            defaultValue={[]}
            render={({ field: { value, ref } }) => <Select
                onChange={val => addActividadesToMainStore(val)}
                inputRef={ref}
                value={actividad.find(c => c.value === value)}
                isMulti
                defaultValue=''
                getOptionLabel={(option) => option.desc_ai}
                getOptionValue={(option) => option.id_ai}
                options={actividad}
                className="basic-multi-select"
                classNamePrefix="select"
            />}
        />
    )

    const unidades = () => (
        <Controller
            name={'unidadMultipleSelect'}
            control={methods.control}
            defaultValue={[]}
            render={({ field: { ref }}) =>
                <Select
                    onChange={val => addUnidadesToMainStore(val)}
                    inputRef={ref}
                    isMulti
                    defaultValue=''
                    getOptionLabel={(option) => option.desc_ur}
                    getOptionValue={(option) => option.id_ur}
                    options={unidad}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />}
        />
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
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'identificacion'}/>
            </div>
            <div className="col-md-9">
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
                            <br/>
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="control-label">Objetivos MIR</label>
                                </div>
                            </div>
                            <hr className="red"/>
                            <div className="row">
                                <div className="col-md-6">
                                    <br/>
                                    <label htmlFor="nivel" className="control-label">Nivel</label>
                                    <select className="form-control" {...register('nivel')} onClick={getObjetivos} >
                                        <option value="">Seleccione una opción...</option>
                                        {niveles()}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="objetivoMir" className="control-label">Objetivos del instrumento de seguimiento:</label>
                                    <select className="form-control" {...register('objetivoMir')}>
                                        <option value="">Seleccione una opción...</option>
                                        {objetivos()}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="objetivo" className="control-label">Objetivo del Programa (Propósito):</label>
                                {objetivosPrograma()}
                            </div>
                            <div className="form-group">
                                <label htmlFor="componentes" className="control-label">Bienes y productos generados con posible
                                    incidencia (Componentes):</label>
                                <input className="form-control" {...register('componentes')} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="actividades" className="control-label">Actividad(es) actual(es) con posible
                                    incidencia:</label>
                                <textarea className="form-control" {...register('actividades')} />
                            </div>
                            <div className="row">
                                <ObjetivosDesarrolloSustentable onSubmit={onSubmit} store={store}/>
                            </div>
                            <div className="row">
                                <div className="form-group right">
                                    <button className='btn btn-primary pull-right' onClick={handleClick} >Siguiente</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Identification
