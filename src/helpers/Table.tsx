import DataTable from "react-data-table-component";
import React, {useEffect, useState, useCallback} from "react";
import axios from "axios";
import {authHeader} from "./AuthHeader";

function Table({columns, url, title}: {
    columns: any;
    url: string;
    title: string;
}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItemText: 'Todos',
        noRowsPerPage: true,
        loadingText: 'Cargando...'
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

    const fetchData = useCallback(async page => {
        setLoading(true);

        const response = await axios.get(`${url}?page=${page}`, {headers: authHeader()});

        setData(response.data.data);
        setTotalRows(response.data.meta.total);
        setLoading(false);
    }, [url]);

    const handlePageChange = page => {
        fetchData(page);
    };

    const handlePerRowsChange = async (newPerPage = 15, page) => {
        setLoading(true);

        const response = await axios.get(`${url}?page=${page}`, {headers: authHeader()});

        setData(response.data.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData(1);

    }, [fetchData]);

    return (
        <DataTable
            title={title}
            columns={columns}
            data={data}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            progressPending={loading}
            onChangeRowsPerPage={handlePerRowsChange}
            paginationComponentOptions={paginationComponentOptions}
            customStyles={customStyles}
            onChangePage={handlePageChange}
        />
    );
}

export default Table;
