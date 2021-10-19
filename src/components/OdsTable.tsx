import React from "react";
import Table from "../helpers/Table";

function OdsTable() {

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

    return(
        <>
            <div className="row">
                <Table columns={columns} url={process.env.REACT_APP_API_URL + '/admin/ods'} title={"Objetivos de Desarrollo Sustentable"}/>
            </div>
        </>
    );

}

export default OdsTable;
