import * as React from 'react';
import {DataGrid, GridColDef } from '@material-ui/data-grid';



export default function FiltroTabla({store}: {
    store: any
}) {

    const columns: GridColDef[] = [
        {field: 'ciclo', headerName: 'Column 1', width: 150},
        {field: 'id_ramo', headerName: 'Column 2', width: 150},
        {field: 'desc_ramo', headerName: 'Column 3', width: 150},
        {field: 'id_ur', headerName: 'Column 4', width: 150},
        {field: 'desc_ur', headerName: 'Column 5', width: 150},
        {field: 'gpo_funcional', headerName: 'Column 6', width: 150},
        {field: 'desc_gpo_funcional', headerName: 'Column 7', width: 150},
        {field: 'id_funcion', headerName: 'Column 8', width: 150},
        {field: 'desc_funcion', headerName: 'Column 9', width: 150},
        {field: 'id_subfuncion', headerName: 'Column 10', width: 150},
        {field: 'desc_subfuncion', headerName: 'Column 11', width: 150},
        {field: 'id_ai', headerName: 'Column 12', width: 150},
        {field: 'desc_ai', headerName: 'Column 13', width: 150},
        {field: 'id_modalidad', headerName: 'Column 14', width: 150},
        {field: 'desc_modalidad', headerName: 'Column 15', width: 150},
        {field: 'id_pp', headerName: 'Column 16', width: 150},
        {field: 'desc_pp', headerName: 'Column 17', width: 150},
        {field: 'id_capitulo', headerName: 'Column 18', width: 150},
        {field: 'desc_capitulo', headerName: 'Column 19', width: 150},
        {field: 'id_concepto', headerName: 'Column 20', width: 150},
        {field: 'desc_concepto', headerName: 'Column 21', width: 150},
        {field: 'id_partida_generica', headerName: 'Column 22', width: 150},
        {field: 'desc_partida_generica', headerName: 'Column 23', width: 150},
        {field: 'id_partida_especifica', headerName: 'Column 24', width: 150},
        {field: 'desc_partida_especifica', headerName: 'Column 25', width: 150},
        {field: 'id_tipogasto', headerName: 'Column 26', width: 150},
        {field: 'desc_tipogasto', headerName: 'Column 27', width: 150},
        {field: 'id_ff', headerName: 'Column 28', width: 150},
        {field: 'desc_ff', headerName: 'Column 29', width: 150},
        {field: 'id_entidad_federativa', headerName: 'Column 30', width: 150},
        {field: 'entidad_federativa', headerName: 'Column 31', width: 150},
        {field: 'id_clave_cartera', headerName: 'Column 32', width: 150},
        {field: 'monto_aprobado', headerName: 'Column 33', width: 150} ,
    ];

    return (
        <div id="table" className="text-center" style={{height: 400, width: '100%'}}>
            <DataGrid rows={store} paginationMode={"server"} columns={columns} checkboxSelection onSelectionModelChange={item => console.log(item)} />
        </div>
);
}
