import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import TabsMenu from "./TabsMenu";
import NavigationService from "../../../services/NavigationService";

function AreasIdentificacion({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any;
}) {

    const {handleSubmit, register,} = useForm();

    let history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        NavigationService.next('areas');
        history.push(NavigationService.nextValue);
        window.scrollTo(0,0);
    }


    return(
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'componentes'}/>
            </div>
            <div className="col-md-9">
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

export default AreasIdentificacion;
