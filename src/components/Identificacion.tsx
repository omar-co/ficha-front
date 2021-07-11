import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Ramos} from "../data/identification/Ramos";
import {Modalidad} from "../data/identification/Modalidad";
import {ProgramasPresupestales} from "../data/identification/ProgramasPresupestales";

function Identificacion({
                            onSubmit
                        }: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register} = useForm();

    return (
        <div className="tab-pane active" id="identificacion">
            <div className="panel-body">
                <form role="form" onChange={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className='control-label' htmlFor="ramo">Ramo:</label>
                        <select className='form-control' {...register("ramo")}>
                            {Ramos.map(({value, label}, index) => <option value={value}>{label}</option>)}
                        </select>
                    </div>
                    <div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="modalidad" className="control-label">Modalidad:</label>
                            <select className="form-control" {...register('modalidad')}>
                                {Modalidad.map((index) => <option value={index}>{index}</option>)}
                            </select>
                            <div className="form-group">
                                <label htmlFor="modalidad" className="control-label">
                                    ID_Programa presupuestario:
                                </label>
                                <select className="form-control" {...register('programa')}>
                                    {ProgramasPresupestales.map((index) => <option value={index}>{index}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );

}

export default Identificacion
