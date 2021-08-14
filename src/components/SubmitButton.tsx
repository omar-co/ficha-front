import React from "react";
import axios from "axios";
import {saveAs} from 'file-saver'
import { useHistory } from "react-router-dom";
import {authHeader} from "../helpers/AuthHeader";

function SubmitButton({store, selectedStore}: {
    store: any;
    selectedStore: any;
}) {
    let history = useHistory();

    function handleClick() {
        delete store.ramo;
        history.push("/identificacion");
    }

    function goBack() {
        history.push("/validacion");
    }

    const exportData = async () => {
        return axios.post(process.env.REACT_APP_API_URL + '/generate', store, {
            responseType: 'blob',
            headers: authHeader()
        }).then(
            response => new Blob([response.data])
        ).then(
            blob => saveAs(blob, 'Transversales_Archivo.csv')
        );
    }

    const saveData = () => {
        let dialog = window.confirm("Desea guardar los datos?");
        if(dialog){
            addItemsToMainStore(selectedStore);
            store.alert = true;
            alert("Datos guardados");
            window.scroll(0, 0);
            return axios.post(process.env.REACT_APP_API_URL + '/save', store, {headers: authHeader()});
        }
    }

    const addItemsToMainStore = (item: any) => {
        store.programasSeleccionados = item;
    }

    return (
        <>
            <div className="row">
                <div className="form-group col-md-3">
                    <button className="btn btn-secondary" onClick={goBack}>Regresar</button>
                </div>
                <div className="form-group col-md-3">
                    <button className='btn-primary' type="button" onClick={saveData}>Guardar cuantificación seleccionada</button>
                </div>
                <div className="form-group col-md-3">
                    <div className="form-group">
                        <button className='btn-primary' onClick={handleClick}>Agregar la cuantificación de otro Pp </button>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <div className="form-group">
                        <button className="btn-primary" onClick={() => exportData()}>Guardado final para la exportación  del CSV</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default SubmitButton
