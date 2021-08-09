import React from "react";
import axios from "axios";
import {saveAs} from 'file-saver'
import { useHistory } from "react-router-dom";

function SubmitButton({store}: {
    store: any;
}) {
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    function goBack() {
        history.push("/validacion");
    }

    const saveData = async () => {
        return axios.post(process.env.REACT_APP_API_URL + '/generate', store, {
            responseType: 'blob',
        }).then(
            response => new Blob([response.data])
        ).then(
            blob => saveAs(blob, 'Transversales_Archivo.csv')
        );
    }

    return (
        <div className="row">
            <div className="form-group col-md-2">
                <button className="btn btn-secondary" onClick={goBack}>Regresar</button>
            </div>
            <div className="form-group col-md-2">

            </div>
            <div className="form-group col-md-4">
                <div className="form-group">
                    <button className='btn btn-primary' onClick={handleClick}>Agregar la cuantificación de otro Pp </button>
                </div>
            </div>
            <div className="form-group col-md-4">
                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => saveData()}>Guardado final para la exportación  del CSV</button>
                </div>
            </div>

        </div>
    );

}

export default SubmitButton
