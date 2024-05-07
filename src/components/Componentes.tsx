import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import Mitigacion from "./Mitigacion";
import Adaptacion from "./Adaptacion";
import TabsMenu from "./TabsMenu";
import SweetAlert from "react-bootstrap-sweetalert";
import NavigationService from "../services/NavigationService";
import { useHistory } from "react-router-dom";

function Componentes({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any
}) {

    const {handleSubmit, register, getValues} = useForm();
    const [hideFechaCorte, setHideFechaCorte] = useState(false);
    const [calendar, setCalendar] = useState(false);

    let history = useHistory();
    function handleClick(e) {
        e.preventDefault();
        NavigationService.next('componente');
        history.push(NavigationService.nextValue);
        window.scrollTo(0,0);
    }
    const hideMessage = () => {
        setHideFechaCorte(true);
    }

    const showAdaptacion = () => (
        (getValues('tieneAdaptacion') || store.tieneAdaptacion) ? <Adaptacion onSubmit={onSubmit} store={store} /> : null
    )

    const tabs = () => {
        if (store.modules) {
            return <TabsMenu tag={'componente'} modules={store.modules}/>
        }
    }

    const fechaCorte = () => {
        return <SweetAlert
            onConfirm={hideMessage}
            title=''>
            La información precargada en este sistema, corresponde al ejercicio fiscal {calendar[0].value} con corte al {calendar[1].value}.
        </SweetAlert>
    }

    return(
        <div className="row">
            <div className="col-md-3">
                { tabs() }
            </div>
            { !hideFechaCorte && calendar && fechaCorte() }
            <div className="col-md-9">
        <div className="tab-pane" id="componentes">
            <div className="panel-body">
                <h6>
                    Mitigación
                </h6>
                <hr className="red"/>
                <div className="row">
                    <Mitigacion onSubmit={onSubmit} store={store}/>
                </div>
                <h6>
                    Adaptación
                </h6>
                <hr className="red"/>
                <div className="row">
                    <form onChange={handleSubmit(onSubmit)}>
                        <div className="col-md-12 form-group">
                            <label htmlFor="tieneAdaptacion" className="control-label">¿El objetivo del Pp se vincula
                                con alguna(s) problemática(s) relacionada(s) con el clima?</label>
                            <select className="form-control" {...register('tieneAdaptacion', {valueAsNumber: true})}
                                    defaultValue={store.tieneAdaptacion}>
                                <option value="">Seleccione una opción</option>
                                <option value="1">Sí</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </form>
                    {showAdaptacion()}
                </div>
                <div className="row">
                    <div className="form-group right">
                        <button className='btn btn-primary pull-right' onClick={handleClick}>Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );

}

export default Componentes;
