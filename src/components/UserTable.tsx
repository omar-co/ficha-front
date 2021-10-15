import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from "../helpers/Table";
import { useHistory } from "react-router-dom";
import {authHeader} from "../helpers/AuthHeader";

function UserTable() {

    let history = useHistory();

    const initial: any[] = [];
    const [users, setUsers] = useState(initial);

    function handleClick() {
        history.push("/identificacion");
        window.scrollTo(0,0);
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/users', {headers: authHeader()}).then(
            (response) => {
                setUsers(response.data.data);
            }
        );
    }, []);

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
                <Table columns={columns} data={users}/>
            </div>
            <div className="row">
                <div className="col-md-12 right">
                    <button className="btn btn-secondary pull-right" onClick={handleClick}>Regresar</button>
                </div>
            </div>
        </>
    );

}

export default UserTable;
