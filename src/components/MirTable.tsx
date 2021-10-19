import React from "react";
import Table from "../helpers/Table";

function OdsTable() {

    const columns = [
        {
            name: 'Ciclo',
            selector: row => row.ciclo,
        },
        {
            name: 'Id Ramo',
            selector: row => row.id_ramo,
        },
        {
            name: 'Id Objetivo',
            selector: row => row.id_objetivo
        },
        {
            name: 'Objetivo',
            selector: row => row.desc_objetivo
        },
        {
            name: 'Id Nivel',
            selector: row => row.id_nivel
        },

    ];

    return(
        <>
            <div className="row">
                <Table columns={columns} url={process.env.REACT_APP_API_URL + '/admin/mir'} title={"Objetivos de Desarrollo Sustentable"}/>
            </div>
        </>
    );

}

export default OdsTable;
