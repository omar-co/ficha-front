import React from "react";


import FiltroModal from "./FiltroModal";
import TabsMenu from "./TabsMenu";
import {useForm} from "react-hook-form";
import axios from "axios";
import {authHeader} from "../helpers/AuthHeader";


function Cuantificacion({store}: {
    store: any;
    setStore: any
}) {

    const { getValues, register } = useForm();

    const deletePp = () => {
        let id = getValues('delete');
        if (window.confirm("Quieres borrar el presupuesto?")) {
            axios.delete(process.env.REACT_APP_API_URL + '/pp/delete/' + id, {headers: authHeader()}).then(
                () => true
            )
        }
    }

    return (
        <>
            <div className="row">
                {store.alert &&  <div className="alert alert-success text-center" role="alert">Cuantificación guardada</div>}
            </div>
            <div className="row">
                <div className="col-md-3">
                    <TabsMenu tag={'cuantificacion'}/>
                </div>
                <div className="col-md-9">
                    <div className="tab-pane" id="cuantificacion">
                        <div className="panel-body">
                            <div className="row">
                                <label className="control-label">Cuantificación del presupuesto</label>
                                <hr className="red"/>
                            </div>
                            <div className="row">
                                <div className="pull-right col-md-1">
                                    <button type="button" className="btn btn-sm btn-primary" onClick={deletePp}>Eliminar Pp</button>
                                </div>
                                <div className="pull-right">
                                    <input type="text" className="form-control" {...register('delete')} placeholder="Eliminar Pp"/>
                                </div>
                            </div>
                            <div className="row">
                                <FiltroModal store={store}/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    ); 

}

export default Cuantificacion;
