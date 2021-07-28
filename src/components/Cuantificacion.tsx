import React from "react";
import {SubmitHandler} from "react-hook-form";

import FiltroModal from "./FiltroModal";


function Cuantificacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    return (
        <div className="tab-pane" id="cuantificacion">
            <div className="panel-body">
                <label className="control-label">Partida especifica</label>
                <hr className="red"/>

                <FiltroModal store={store}/>

                <br/>
                <br/>
            </div>
        </div>
    );

}

export default Cuantificacion;
