import React from "react";


import FiltroModal from "./FiltroModal";
import TabsMenu from "./TabsMenu";

//aqui iba
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
                            <div className="row">
                                <label className="control-label">Cuantificación del presupuesto</label>
                                <hr className="red"/>
                                <h5 className="tooltip-italic text-center">Para la cuantificación del presupuesto destinado a los objetivos climáticos se muestra una tabla con la estructura programática a nivel partida presupuestaria, en la cual debes seleccionar la partida o partidas dando click a la respectiva fila e incluir el monto destinado a dichos objetivos en la columna “Monto Aprobado” de la extrema derecha</h5>
                            </div>
                            <br/>
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
