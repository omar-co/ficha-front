import React from "react";
import axios from "axios";
import {saveAs} from 'file-saver'

function SubmitButton({store}: {
    store: any;
}) {

    const saveData = async () => {
        return axios.post(process.env.REACT_APP_API_URL + '/generate', store, {
            responseType: 'blob',
        }).then(
            response => new Blob([response.data])
        ).then(
            blob => saveAs(blob, 'Ficha.xlsx')
        );
    }

    return (
        <div className="form-group">
            <button className='btn btn-primary' onClick={() => saveData()}>Descargar Excel</button>
        </div>
    );

}

export default SubmitButton
