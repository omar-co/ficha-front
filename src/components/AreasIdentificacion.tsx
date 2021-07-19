import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

function AreasIdentificacion({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register,} = useForm();

    return(
        <div className="tab-pane" id="areasIdentificacion">
            <div className="panel-body">
                <h6>
                    Identificación de áreas de mejora en actividades actuales
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="actividades" className="control-label">Actividad(es) modificada(s) que tendría(n) incidencia:</label>
                            <textarea className="form-control" {...register('actividades')} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="justificacion" className="control-label">Justificación ¿Cómo los cambios a la(s) actividad(es) del Pp garantizan la incidencia en el Cambio Climático?</label>
                            <textarea className="form-control" {...register('justificacion')} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AreasIdentificacion;
