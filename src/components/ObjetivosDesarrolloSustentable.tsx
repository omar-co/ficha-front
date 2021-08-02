import React, {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import BotonSiguiente from "./BotonSiguiente";
import TabsMenu from "./TabsMenu";

function ObjetivosDesarrolloSustentable({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any
}){


    let initial: any[] = [];

    const [ods, setOds] = useState(initial);

    const {handleSubmit} = useForm();

    useEffect(() => {
        if(store.ramo && store.modalidad && store.programa){
            axios.get(process.env.REACT_APP_API_URL + '/ods/' +  store.ramo + '/' + store.modalidad + '/' + store.programa).then(
                (response) => {
                    setOds(response.data)
                }
            )
        }
    }, [store.ramo, store.modalidad, store.programa]);

    const showOds = () => (
        ods.map((obj) =>
            <input className="form-control" value={obj.id_ods + ' - ' + obj.desc_ods} disabled/>
        )
    );

    return(
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'ods'}/>
            </div>
            <div className="col-md-9">
                <div className="tab-pane" id="ods">
                    <div className="panel-body">
                        <h6>
                            Vinculación con los indicadores de la Agenda 2030 para el Desarrollo Sostenible de la ONU
                        </h6>
                        <hr className="red"/>
                        <form onChange={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="ods" className="control-label">Objetivo de Desarrollo Sustentable</label>
                                        {showOds()}
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="form-group right">
                                        <BotonSiguiente store={store}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default ObjetivosDesarrolloSustentable
