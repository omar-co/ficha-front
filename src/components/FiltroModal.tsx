import React, {useState} from 'react';
import FiltroTabla from "./FiltroTabla";
import axios from "axios";

function FiltroModal( {store}: {
    store: any,
}){

    const initial: any[] = [];
    const [data, setData] = useState(initial);

    const getFilterData = () => {
        if(store.ramo && store.fuenteFinanciamiento && store.tipoGasto){
            axios.get(process.env.REACT_APP_API_URL + '/relacion-economica/' + store.ramo + '/' + store.fuenteFinanciamiento + '/' + store.tipoGasto).then(
                (response) => {
                    setData(response.data)
                }
            )
        }
    }

    return(
        <div className="text-center">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={getFilterData}>
                Seleccion de partida especifica
            </button>
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FiltroTabla store={data}/>
                        </div>
                        <br/>
                        <br/>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Seleccionar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default FiltroModal
