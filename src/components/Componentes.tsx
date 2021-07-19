import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

function Componentes({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register,} = useForm();

    return(
        <div className="tab-pane" id="componentes">
            <div className="panel-body">
                <h6>
                    Mitigación
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="programas" className="control-label">¿Los programas del PP contabilizan las emisiones de actividades institucionales ?</label>
                            <select className="form-control" {...register('programas')}>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <h6>
                        Adaptación
                    </h6>
                    <hr className="red"/>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="objetivo" className="control-label">¿El objetivo del PP se vincula con alguna(s) problemática(s) relacionada(s) con el clima?</label>
                            <select className="form-control" {...register('objetivo')}>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Componentes;
