import React, {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";


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
            <div className="col-md-12">
                <div className="tab-pane" id="ods">
                    <div className="panel-body">
                        <h6>
                            Vinculación con la Agenda 2030 y los Objetivos de Desarrollo Sostenible ODS
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default ObjetivosDesarrolloSustentable
