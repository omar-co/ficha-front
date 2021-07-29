import React, {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ObjetivosDesarrolloSustentable({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any
}){

    let history = useHistory();
    let initial: any[] = [];

    const [ods, setOds] = useState(initial);

    function handleClick() {
        history.push("/cuantificacion");
    }

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
                               <button className='btn btn-primary pull-right' onClick={handleClick} >Siguiente</button>
                           </div>
                       </div>
                   </div>
                </form>
            </div>
        </div>
    );

}

export default ObjetivosDesarrolloSustentable
