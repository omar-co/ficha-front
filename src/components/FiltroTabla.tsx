import * as React from 'react';
import {DataGrid, GridColDef } from '@material-ui/data-grid';
import {GRID_LOCALE_TEXT} from "../data/cuantificacion/TraduccionDataGrid";
import {useState} from "react";


export default function FiltroTabla({store, mainStore}: {
    store: any;
    mainStore: any;
}) {

    const initial: any[] = [];
    const [select, setSelection] = useState(initial);

    const columns: GridColDef[] = [
        {field: 'ciclo', headerName: 'Ciclo', width: 150},
        {field: 'id_ramo', headerName: 'ID Ramo', width: 150},
        {field: 'desc_ramo', headerName: 'Ramo', width: 150},
        {field: 'id_ur', headerName: 'ID Unidad Responsable', width: 150},
        {field: 'desc_ur', headerName: 'Unidad Responsable', width: 150},
        {field: 'gpo_funcional', headerName: 'ID Grupo Funcional', width: 150},
        {field: 'desc_gpo_funcional', headerName: 'Grupo Funcional', width: 150},
        {field: 'id_funcion', headerName: 'ID Funcion', width: 150},
        {field: 'desc_funcion', headerName: 'Funcion', width: 150},
        {field: 'id_subfuncion', headerName: 'ID Subfuncion', width: 150},
        {field: 'desc_subfuncion', headerName: 'Subfuncion', width: 150},
        {field: 'id_ai', headerName: 'ID Actividad Institucional', width: 150},
        {field: 'desc_ai', headerName: 'Actividad Institucional', width: 150},
        {field: 'id_modalidad', headerName: 'ID Modalidad', width: 150},
        {field: 'desc_modalidad', headerName: 'Modalidad', width: 150},
        {field: 'id_pp', headerName: 'ID Programa Presupuestal', width: 150},
        {field: 'desc_pp', headerName: 'Programa Presupuestal', width: 150},
        {field: 'id_capitulo', headerName: 'ID Capitulo', width: 150},
        {field: 'desc_capitulo', headerName: 'Capitulo', width: 150},
        {field: 'id_concepto', headerName: 'ID Concepto', width: 150},
        {field: 'desc_concepto', headerName: 'Concepto', width: 150},
        {field: 'id_partida_generica', headerName: 'ID Partida Generica', width: 150},
        {field: 'desc_partida_generica', headerName: 'Partida Generica', width: 150},
        {field: 'id_partida_especifica', headerName: 'ID Partida Especifica', width: 150},
        {field: 'desc_partida_especifica', headerName: 'Partida Especifica', width: 150},
        {field: 'id_tipogasto', headerName: 'ID Tipo de Gasto', width: 150},
        {field: 'desc_tipogasto', headerName: 'Tipo de Gasto', width: 150},
        {field: 'id_ff', headerName: 'ID Fuente Financiera', width: 150},
        {field: 'desc_ff', headerName: 'Fuente Financiera', width: 150},
        {field: 'id_entidad_federativa', headerName: 'ID Entidad Federativa', width: 150},
        {field: 'entidad_federativa', headerName: 'Entidad Federativa', width: 150},
        {field: 'id_clave_cartera', headerName: 'ID Clave Cartera', width: 150},
        {field: 'monto_aprobado', headerName: 'Monto Aprobado', width: 150} ,
    ];

    const addItemsToMainArray = (item: any) => {
       mainStore.programasSeleccionados = item;
    }

    return (
        <div id="table" className="text-center"  style={{height: 400, width: '100%'}}>
            <DataGrid  rows={store} localeText={GRID_LOCALE_TEXT} columns={columns} checkboxSelection onSelectionModelChange={item => setSelection(item)} />
            <br/>
            <button type="button" className="btn btn-primary" onClick={() => addItemsToMainArray(select)}>Guardar programas seleccionados</button>
        </div>
);
}
