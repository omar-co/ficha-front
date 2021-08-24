import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import Mitigacion from "./Mitigacion";
import Adaptacion from "./Adaptacion";

function Componentes({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, getValues} = useForm();

    const showAdaptacion = () => (
        getValues('tieneAdaptacion') ? <Adaptacion onSubmit={onSubmit} /> : null
    )

    return(
        <div className="tab-pane" id="componentes">
            <div className="panel-body">
                <h6>
                    Mitigación
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <Mitigacion onSubmit={onSubmit} />
                    </div>
                    <h6>
                        Adaptación
                    </h6>
                    <hr className="red"/>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="tieneAdaptacion" className="control-label">¿El objetivo del PP se vincula con alguna(s) problemática(s) relacionada(s) con el clima?</label>
                            <select className="form-control" {...register('tieneAdaptacion', {valueAsNumber: true})}>
                                <option value="">Seleccione una opción</option>
                                <option value="1">Sí</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        { showAdaptacion() }
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Componentes;
