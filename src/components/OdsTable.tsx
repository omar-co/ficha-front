import React, {useEffect, useState} from "react";
import Table from "../helpers/Table";
import {useForm} from "react-hook-form";
import axios from "axios";
import {authHeader} from "../helpers/AuthHeader";
import SweetAlert from "react-bootstrap-sweetalert";

function OdsTable() {

    const base = process.env.REACT_APP_API_URL + '/admin/ods';
    const initial: any = [];
    const [data, setData] = useState(initial);
    const {register, getValues} = useForm();
    const [url, setUrl] = useState(base);

    const fileInitial: any = false;
    const [archivo, setArchivo] = useState(fileInitial);
    const [confirmacion, setConfirmacion] = useState(false);
    const [error, setError] = useState(false);
    const [button, setButton] = useState('Importar');
    const [buttonActive, setButtonActive] = useState(true);

    useEffect(() => {
        if (!data.length){
            loadData();
        }
    });

    const onFileChange = (event) => {
        setArchivo(event.target.files[0]);
        console.log(archivo.name)
    }

    const hideConfirmation = () => {
        setConfirmacion(false);
    }

    const hideError = () => {
        setError(false);
    }

    const onFileUpload = async () => {
        const formData = new FormData();
        setButtonActive(false);
        setButton('<i class="fa fa-spinner fa-spin"></i> Procesando ...')

        formData.append(
            'file',
            archivo,
            archivo.name
        );

        formData.append('tipo', 'ods');

        await axios.post(process.env.REACT_APP_API_URL + "/admin/import", formData, {headers: authHeader()}).then(
            (response) => {
                if (response && response.status === 200) {
                    setConfirmacion(true);
                } else {
                    setError(true);
                }
            }
        );

        setButtonActive(true);
        setButton('Importar')
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
            Las columnas del archivo {archivo.name} no corresponden a la estructura correcta.
        </SweetAlert>
    }

    const loadData = async () => {
        await axios.get(process.env.REACT_APP_API_URL + '/admin/filtro/ods', {headers: authHeader()}).then(function (response) {
            setData(response.data);
        });
    }


    const columns = [
        {
            name: 'Id ODS',
            selector: row => row.id_ods,
        },
        {
            name: 'ODS',
            selector: row => row.desc_ods,
        },
        {
            name: 'Id Ramo',
            selector: row => row.id_ramo,
        },
        {
            name: 'Ramo',
            selector: row => row.desc_ramo,
        },
        {
            name: 'Id Modalidad',
            selector: row => row.id_modalidad
        },
        {
            name: 'Modalidad',
            selector: row => row.desc_modalidad
        },
        {
            name: 'Id Pp',
            selector: row => row.id_pp
        },
        {
            name: 'Pp',
            selector: row => row.desc_pp
        },

    ];

    const onFilter = () => {

        const filter = getValues();
        let values: object = {};
        let filterString = '';
        let iterator = 0;
        let newIterator = 0;

        for (let key in filter) {
            if (filter.hasOwnProperty(key)) {
                const value: string = filter[key];
                if (value) {
                    values[key] = value;
                    //filterString += `${addPrefix(filterString)}[${iterator}]=${key},${value}`;
                    iterator++;
                }
            }
        }

        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                const value: string = values[key];
                if (iterator > 1) {
                    filterString += `${addPrefix(filterString)}[${newIterator}]=${key},${value}`;
                    newIterator++;
                }
                if (iterator === 1) {
                    filterString += `${addPrefix(filterString)}=${key},${value}`;
                }
            }
        }

        defineUrl(filterString);
    };

    const defineUrl = (query: string = '') => {
        setUrl(base + query);
    }

    function addPrefix(url: string) {
        if (!url.includes('?like')) {
            return '?like';
        }

        return '&like';
    }

    const inputs = () => (
        data.map(function (item) {
            return <div className="col-md-12">
                <label htmlFor={item.field} className="control-label">
                    {item.label}
                </label>
                <input type="text" className="form-control" {...register(item.field)} />
            </div>
        })
    )

    const modal = () => (
        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <form >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Filtros</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {inputs()}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" onClick={onFilter} data-dismiss="modal" className="btn btn-primary">Filtrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

    const importModal = () => (
        <div className="modal fade" id="importar" role="dialog" aria-labelledby="importar">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Importar ODS</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel-body">
                                    <h4>Importar ODS</h4>

                                    <label htmlFor="file" className="control-label">
                                        Archivo CSV:
                                    </label>
                                    <input type="file" name="file" onChange={onFileChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                        <button className='btn btn-primary pull-right' dangerouslySetInnerHTML={{__html: button}} onClick={onFileUpload} disabled={(!archivo) && buttonActive}/>
                    </div>
                </div>
            </div>
        </div>
    )


    return(
        <>
            {confirmacion && mensajeConfirmacion()}
            {error && mensajeError()}
            <div className="row">
                <div className="pull-right btn-toolbar">
                    <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Filtros
                    </button>
                    <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#importar">
                        Importar
                    </button>
                    {modal()}
                    {importModal()}
                </div>
                <Table columns={columns} url={url} title={"Objetivos de Desarrollo Sustentable"}/>
            </div>
        </>
    );

}

export default OdsTable;
