import React from "react";
import Table from "../helpers/Table";

function UserTable() {

    const columns = [
        {
            name: 'Nombre',
            selector: row => row.name,
        },
        {
            name: 'Apellido',
            selector: row => row.lastName,
        },
        {
            name: 'Usuario',
            selector: row => row.email
        },
        {
            name: 'Rol',
            selector: row => row.role
        },

    ];

    return(
        <>
            <div className="row">
                <Table columns={columns} url={process.env.REACT_APP_API_URL + '/user'} title={"Usuarios registrados"}/>
            </div>
        </>
    );

}

export default UserTable;
