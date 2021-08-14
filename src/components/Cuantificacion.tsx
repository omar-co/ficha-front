import React from "react";


import FiltroModal from "./FiltroModal";
import TabsMenu from "./TabsMenu";


function Cuantificacion({store}: {
    store: any;
    setStore: any
}) {

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
                            <label className="control-label">Partida especifica</label>
                            <hr className="red"/>

                            <FiltroModal store={store}/>

                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </>


    ); 

}

export default Cuantificacion;
