import DataTable from "react-data-table-component";
import React from "react";

function Table({columns, data}: {
    columns: any;
    data: any;
}) {

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItemText: 'Todos',
    };

    const customStyles = {
        headCells: {
            style: {
                fontWeight: 'bold'
            },
        },
        cells: {
            style: {
                textTransform: 'capitalize'
            },
        },
    };

    return (
        <DataTable
            title={"Usuarios registrados"}
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            customStyles={customStyles}
        />
    );
}

export default Table;
