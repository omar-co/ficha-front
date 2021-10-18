import React, {useState} from 'react';
import SweetAlert from "react-bootstrap-sweetalert";
import {useForm} from "react-hook-form";
import axios from "axios";
import {authHeader} from "../helpers/AuthHeader";

const AdminImport = () => {

    const inital: any = false;
    const [archivo, setArchivo] = useState(inital);
    const [confirmacion, setConfirmacion] = useState(false);
    const [error, setError] = useState(false);
    const {register, getValues} = useForm();

    const onFileChange = (event) => {
        setArchivo(event.target.files[0]);
    }

    const hideConfirmation = () => {
        setConfirmacion(false);
    }

    const hideError = () => {
        setError(false);
    }

    const onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            'file',
            archivo,
            archivo.name
        );

        formData.append('tipo', getValues('tipo'));

        axios.post(process.env.REACT_APP_API_URL + "/admin/import", formData, {headers: authHeader()}).then(
            (response) => {
                if (response && response.status === 200) {
                    setConfirmacion(true);
                } else {
                    setError(true);
                }
            }
        );
    }

    const mensajeConfirmacion = () => {
        return <SweetAlert
            onConfirm={hideConfirmation}
            title='Importación'
        >
            Se ha importado exitosamente el archivo {archivo.name}
        </SweetAlert>
    }

    const mensajeError = () => {
        return <SweetAlert
            onConfirm={hideError}
            title='Error en la Importación'
        >
            Las columnas del archivo {archivo.name} no corresponden.
        </SweetAlert>
    }

    return (
        <div className="row">
            {confirmacion && mensajeConfirmacion()}
            {error && mensajeError()}
            <div className="col-md-12">
                <div className="panel-body">
                    <h4>Importar Catálogos</h4>
                    <select className="form-control" {...register('tipo')}>
                        <option value="">Seleccione una opción</option>
                        <option value="ods">Importar ODS</option>
                        <option value="mirs">Importar Objetivos MIRS</option>
                        <option value="catalogo">Importar Catálogos</option>
                    </select>

                    <label htmlFor="file" className="control-label">
                        Archivo CSV:
                    </label>
                    <input type="file" name="file" onChange={onFileChange}/>
                    <div className="row">
                        <div className="form-group right">
                            <button className='btn btn-primary pull-right' onClick={onFileUpload}>Importar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminImport;