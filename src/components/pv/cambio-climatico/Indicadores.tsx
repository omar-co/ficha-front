import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {DataGrid, GridColDef, GridRowsProp} from '@material-ui/data-grid';
import {GRID_LOCALE_TEXT} from "../../../data/cuantificacion/TraduccionDataGrid";
import { useHistory } from "react-router-dom";
import TabsMenu from "./TabsMenu";
import NavigationService from "../../../services/NavigationService";

function Indicadores({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    let history = useHistory();

    const {handleSubmit } = useForm();
    const initial: any[] = [];
    const [select, setSelection] = useState(initial);

    function handleClick(e) {
        e.preventDefault();
        NavigationService.next('indicadores');
        history.push(NavigationService.nextValue);
        window.scrollTo(0,0);
    }

    function goBack(e) {
        e.preventDefault();
        NavigationService.prev('indicadores');
        history.push(NavigationService.prevValue);
        window.scrollTo(0,0);
    }

    const rows: GridRowsProp = [
        {id: 1, idField: 'A1', politica: 'Adaptación', nombre: 'Fortalecimiento de capacidades adaptativas de los municipios para responder al cambio climático'},
        {id: 2, idField: 'M1', politica: 'Mitigación', nombre: 'Emisiones totales nacionales de gases y compuestos de efecto invernadero en CO2e'},
        {id: 3, idField: 'M2', politica: 'Mitigación', nombre: 'Emisión de bióxido de carbono por quema de combustibles fósiles'},
        {id: 4, idField: 'M3', politica: 'Mitigación', nombre: 'Toneladas de CO2e mitigadas por el Programa Especial de Cambio Climático'},
        {id: 5, idField: 'M4', politica: 'Mitigación', nombre: 'Emisión de bióxido de carbono por Producto Interno Bruto'},
        {id: 6, idField: 'M5', politica: 'Mitigación', nombre: 'Emisión per cápita por bióxido de carbono'},
        {id: 7, idField: 'M6', politica: 'Mitigación', nombre: 'Participación de fuentes renovables y alternas en la producción nacional de energía'},
        {id: 8, idField: 'M7', politica: 'Mitigación', nombre: 'Participación de fuentes de energía límpia para la generación de energía eléctrica'},
        {id: 9, idField: 'M8', politica: 'Mitigación', nombre: 'Participación de las fuentes renovables de energía en el consumo energético total'},
    ];

    const columns: GridColDef[] = [
        {field: 'idField', headerName: 'Id', width: 100},
        {field: 'politica', headerName: 'Politica', width: 150},
        {field: 'nombre', headerName: 'Nombre', width: 430},
    ];

    const addItemsToMainArray = (item: any) => {
        store.indicadoresSistema = item;
        alert('Datos Guardados');
    }


    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'indicadores'}/>
            </div>
            <div className="col-md-9">
                <div className="tab-pane" id="indicadores">
                    <div className="panel-body">
                        <form onChange={handleSubmit(onSubmit)}>
                            <label className="control-label">Vinculación con el Sistema de Indicadores de la Política Nacional de Cambio Climático:</label>
                            <hr className="red"/>
                            <div className="row">
                                <div style={{height: 400, width: 800}}>
                                    <DataGrid rowsPerPageOptions={[]} rows={rows} localeText={GRID_LOCALE_TEXT} columns={columns} checkboxSelection onSelectionModelChange={item => setSelection(item)}/>
                                </div>
                                <br/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary" onClick={() => addItemsToMainArray(select)}>Guardar indicadores seleccionados</button>
                                </div>
                                <br/>
                            </div>
                            <div className="row">
                                <br/>
                                <div className="form-group col-md-6">
                                    <button className="btn btn-secondary" onClick={goBack}>Regresar</button>
                                </div>
                                <div className="form-group right col-md-6">
                                    <button className='btn btn-primary pull-right' onClick={handleClick} >Siguiente</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );


}
export default Indicadores;
