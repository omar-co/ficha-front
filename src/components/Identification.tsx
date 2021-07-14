import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Ramos} from "../data/identification/Ramos";
import {Nombres} from "../data/identification/ProgramasPresupestales";

function Identification({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, getValues, setValue} = useForm();

    const modalities = () => (
        getValues('ramo') ? Ramos.filter(({value}) =>
            value === getValues('ramo')).map(ramo =>
            ramo.modalidad!.map(modalidad => (
            <option value={modalidad}>{modalidad}</option>))) : null
    );

    const programa = () => (
      Nombres.filter(({ramo, modalidad})=>
          (ramo === getValues('ramo') && modalidad === getValues('modalidad'))).map(({value}) => (
          <option value={value}>{value}</option>
      ))
    );

    const programName = () => {
        const ramo = Nombres.find(({ramo, modalidad, value}) => (
            (ramo === getValues('ramo') && modalidad === getValues('modalidad') && value === getValues('programa'))
        ));

        if (ramo){
            setValue('nombrePrograma', ramo.nombre);
            return ramo.nombre;
        }
        return ''
    };

    const responsible = () => {
        const ramo = Nombres.find(({ramo, modalidad, value}) => (
            (ramo === getValues('ramo') && modalidad === getValues('modalidad') && value === getValues('programa'))
        ));

        if (ramo) {
            return ramo.ur.map((value, index) => (
                <option value={value}>{value}</option>
            ))
        }
    }

    const activities = () => {
        const ramo = Nombres.find(({ramo, modalidad, value}) => (
            (ramo === getValues('ramo') && modalidad === getValues('modalidad') && value === getValues('programa'))
        ));

        if(ramo) {
            const index = ramo.actividadId;
            const value = ramo.actividadInstitucional;
            return <option value={index}>{value}</option>
        }
    }


    return (
        <div className="tab-pane active" id="identificacion">
            <div className="panel-body">
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className='control-label' htmlFor="ramo">Ramo:</label>
                        <select className='form-control' {...register("ramo", {valueAsNumber: true})}>
                            {Ramos.map(({value, label}, index) => <option value={value}>{label}</option>)}
                        </select>
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="modalidad" className="control-label">Modalidad:</label>
                            <select className="form-control" {...register('modalidad')}>
                                <option value="">Selecciona una Opcion</option>
                                {modalities()}
                            </select>
                            <div className="form-group">
                                <label htmlFor="modalidad" className="control-label">
                                    ID_Programa presupuestario:
                                </label>
                                <select className="form-control" {...register('programa', {valueAsNumber:true})}>
                                    <option value="">Selecciona una Opcion</option>
                                    {programa()}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombrePrograma" className="control-label">Nombre del programa
                            presupuestario:</label>
                        <input className="form-control" {...register('nombrePrograma')} value={programName()} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="actividadInstitucional" className="control-label">Actividad Institucional:</label>
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
                </form>


            </div>
        </div>
    );

}

export default Identification
