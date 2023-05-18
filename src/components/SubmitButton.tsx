import React from "react";
import axios from "axios";
import {saveAs} from 'file-saver'
import {useHistory} from "react-router-dom";
import {authHeader} from "../helpers/AuthHeader";
import NavigationService from "../services/NavigationService";

function SubmitButton({store, selectedStore, changed}: {
    store: any;
    selectedStore: any;
    changed: any;
}) {
    let history = useHistory();

    function handleClick() {
        delete store.ramo;
        window.location.assign('/');
        window.scrollTo(0, 0);
    }

    function next(e) {
        e.preventDefault();
        NavigationService.next('cuantificacion');
        history.push(NavigationService.nextValue);
        window.scrollTo(0,0);
    }

    function goBack() {
        history.push("/validacion");
        window.scrollTo(0, 0);
    }

    const exportData = async () => {
        addItemsToMainStore(selectedStore);
        addChangedToMainStore(changed);
        return axios.post(process.env.REACT_APP_API_URL + '/generate', store, {
            responseType: 'blob',
            headers: authHeader()
        }).then(
            response => new Blob([response.data])
        ).then(
            blob => saveAs(blob, 'Transversales_Archivo.csv')
        );
    }

    const close = async () => {
        store.preview = false;
        return exportData();
    }

    const preview = async () => {
        store.preview = true;
        return exportData();
    }

    const saveData = () => {
        let dialog = window.confirm("Desea guardar los datos?");
        if (dialog) {
            addItemsToMainStore(selectedStore);
            addChangedToMainStore(changed);
            store.alert = true;
            alert("Datos guardados");
            window.scroll(0, 0);
            return axios.post(process.env.REACT_APP_API_URL + '/save', store, {headers: authHeader()});
        }
    }

    const addItemsToMainStore = (item: any) => {
        store.programasSeleccionados = item;
    }

    const addChangedToMainStore = (item: any) => {
        store.changed = item;
    }

    return (
        <>
            <div className="row">
                <div className="form-group col-md-3">
                    <button className="btn btn-secondary" onClick={goBack}>Regresar</button>
                </div>
                <div className="form-group right col-md-9">
                    <button className='btn btn-primary pull-right' onClick={next} >Siguiente</button>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <button className='btn-primary' type="button" onClick={saveData}>Guardar cuantificación seleccionada
                    </button>
                </div>
                <div className="form-group col-md-3">
                    <div className="form-group">
                        <button className='btn-primary' onClick={handleClick}>Agregar la cuantificación de otro Pp
                        </button>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <div className="form-group">
                        <button className="btn-primary" onClick={() => preview()}>Descargar vista previa del CSV
                        </button>
                    </div>
                </div>
                <div className="form-group col-md-3">
                    <div className="form-group">
                        <button className="btn-primary" onClick={() => close()}>Guardado final para la exportación
                            del CSV
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default SubmitButton
