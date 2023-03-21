import React, {useState} from 'react';
import Table from "../../../helpers/Table";
import {Link} from "react-router-dom";

const PoliticasPublicasIndex = () => {
    const [urlPoliticasPublicas] = useState(process.env.REACT_APP_API_URL + '/admin/politicas-publicas');

    const columns = [
        {
            name: 'Nombre de la politica',
            selector: row => row.name,
            width: '25%'
        },
        {
            name: 'Creada por',
            selector: row => row.created_by,
            width: '20%'
        },
        {
            name: 'Estatus',
            selector: row => <span className={`label ${row.active ? ' label-success' : 'label-danger'}`}> {row.active ? 'Activo' : 'Inactivo'}</span>,
            width: '10%'
        },
        {
            name: 'Fecha de creación',
            selector: row => row.created_at,
            width: '15%'
        },
        {
            name: 'Acciones',
            selector: row => <div className="btn-toolbar">
                <button className="btn btn-primary btn-space btn-sm" data-toggle="modal" data-target="#myModal">Ver Detalle</button>
                <button className="btn btn-primary btn-space btn-sm" data-toggle="modal" data-target="#myModal">Editar</button>
                <button className="btn btn-primary btn-space btn-sm">{row.active ? 'Desactivar' : 'Activar'}</button>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '30%'
        },

    ];

    return (
        <>
            <div className="row">
                <Link to='/politicas-publicas/nueva' className="btn btn-primary pull-right">Nueva Politica pública</Link>
                <Table columns={columns} url={urlPoliticasPublicas} title={"Politicas públicas"}/>
            </div>
        </>
    );



};

export default PoliticasPublicasIndex;