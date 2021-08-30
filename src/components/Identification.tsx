import React, {useEffect, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TabsMenu from "./TabsMenu";
import ObjetivosDesarrolloSustentable from "./ObjetivosDesarrolloSustentable";
import {authHeader} from "../helpers/AuthHeader";
import  Select from "react-select";
import {Niveles} from "../data/identification/Niveles";

function Identification({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any;
}) {

    if (!store.niveles) {
        store.niveles = [];
    }

    const initial: any[] = [];
    const {handleSubmit, register, getValues, setValue} = useForm({mode: "onBlur"});
    const [ramo, setRamo] = useState(initial);
    const [modalidad, setModalidad] = useState(initial);
    const [pp, setPp] = useState(initial);
    const [actividad, setActividad] = useState(initial);
    const [unidad, setUnidad] = useState(initial);
    const [objetivo, setObjetivo] = useState(initial);
    const [objetivoPrograma, setObjetivoPrograma] = useState(initial);
    const [niveles, setNiveles] = useState(store.niveles);

    let history = useHistory();

    function handleClick() {
        history.push("/pecc");
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

    const addNivelesToStore = (item: any) => {
        setNiveles(item.map((obj) =>
            obj.id_nivel
        ));
    }



    const getPp = () => {
        if(getValues('ramo') && getValues('modalidad')){
            axios.get(process.env.REACT_APP_API_URL + '/programa-presupuestal/' + getValues('ramo') + '/' + getValues('modalidad')).then(
                (response) => {
                    setPp(response.data)
                    if (store.programa) {
                        setValue('programa', store.programa);
                        getActividadesUnidadesAndObjetivoPrograma();
                    }
                }
            )
        }
    }

    const getModalidadesAndNiveles = () => {
        if(getValues('ramo')){
            const modalidadApi = process.env.REACT_APP_API_URL + '/modalidad/' + getValues('ramo');
            const getModalidad = axios.get(modalidadApi);
            axios.all([getModalidad]).then(
                axios.spread((...allData) => {
                    const allModalidadData = allData[0].data;

                    setModalidad(allModalidadData);

                    if (store.modalidad) {
                        setValue('modalidad', store.modalidad);
                        getPp();
                    }
                    if (store.nivel){
                        getObjetivos();
                    }

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
            axios.post(process.env.REACT_APP_API_URL + '/objetivo-mir/' + getValues('ramo') + '/', niveles).then(
                (response) => {
                    setObjetivo(response.data)
                    if (store.objetivoMir) {
                        setValue('objetivoMir', store.objetivoMir);
                    }
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
            const ramoApi = process.env.REACT_APP_API_URL + '/ramo';
            axios.get(ramoApi, {headers: authHeader()}).then(
                (response) => {
                    setRamo(response.data);
                    if (store.ramo) {
                        setValue('ramo', store.ramo);
                        getModalidadesAndNiveles();
                    }
                }
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.ramo, setRamo]);

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

    const updateForm = () => {
       store.niveles = niveles;
       return handleSubmit(onSubmit);
    }


    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'identificacion'}/>
            </div>
            <div className="col-md-9">
                <div className="tab-pane" id="identificacion">
                    <div className="panel-body">
                        <form onChange={updateForm()}>
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
                                <input className="form-control" {...register('nombrePrograma')} value={programName()} readOnly defaultValue={store.nombrePrograma}/>
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
                                    <Select
                                        isMulti
                                        className="reactSelect"
                                        name="nivelesMultipleSelect"
                                        placeholder="Nivel"
                                        defaultValue={Niveles.filter(item => store.niveles.includes(item.id_nivel))}
                                        onChange={addNivelesToStore}
                                        options={Niveles}
                                        getOptionLabel={(option) => option.desc_nivel}
                                        getOptionValue={(option) => option.id_nivel}
                                        ref={e => register('nivelesMultipleSelect')}
                                    />
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
                                <input className="form-control" {...register('componentes')} defaultValue={store.componentes}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="actividades" className="control-label">Actividad(es) actual(es) con posible
                                    incidencia:</label>
                                <textarea className="form-control" {...register('actividades')} defaultValue={store.actividades}/>
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
