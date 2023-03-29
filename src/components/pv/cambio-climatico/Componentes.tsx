import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import Mitigacion from "./Mitigacion";
import Adaptacion from "./Adaptacion";

function Componentes({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any
}) {

    const {handleSubmit, register, getValues} = useForm();

    const showAdaptacion = () => (
        (getValues('tieneAdaptacion') || store.tieneAdaptacion) ? <Adaptacion onSubmit={onSubmit} store={store} /> : null
    )

    return(
        <div className="tab-pane" id="componentes">
            <div className="panel-body">
                <h6>
                    Mitigación
                </h6>
                <hr className="red"/>
                    <div className="row">
                        <Mitigacion onSubmit={onSubmit} store={store} />
                    </div>
                    <h6>
                        Adaptación
                    </h6>
                    <hr className="red"/>
                    <div className="row">
                        <form onChange={handleSubmit(onSubmit)}>
                            <div className="col-md-12 form-group">
                                <label htmlFor="tieneAdaptacion" className="control-label">¿El objetivo del Pp se vincula con alguna(s) problemática(s) relacionada(s) con el clima?</label>
                                <select className="form-control" {...register('tieneAdaptacion', {valueAsNumber: true})} defaultValue={store.tieneAdaptacion}>
                                    <option value="">Seleccione una opción</option>
                                    <option value="1">Sí</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                        </form>
                        { showAdaptacion() }
                    </div>
            </div>
        </div>
    );

}

export default Componentes;
