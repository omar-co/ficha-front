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
            name: 'Ramo',
            selector: row => row.desc_ramo,
        },
        {
            name: 'Id UR',
            selector: row => row.id_ur
        },
        {
            name: 'UR',
            selector: row => row.desc_ur
        },
        {
            name: 'Id Gpo Funcional',
            selector: row => row.gpo_funcional
        },
        {
            name: 'Gpo Funcional',
            selector: row => row.desc_gpo_funcional
        },
        {
            name: 'Id Función',
            selector: row => row.id_funcion
        },
        {
            name: 'Función',
            selector: row => row.desc_funcion
        },
        {
            name: 'Id Subfunción',
            selector: row => row.id_subfuncion
        },
        {
            name: 'Subfunción',
            selector: row => row.desc_subfuncion
        },
        {
            name: 'Id AI',
            selector: row => row.id_ai
        },
        {
            name: 'AI',
            selector: row => row.desc_ai
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
        {
            name: 'Id Capítulo',
            selector: row => row.id_capitulo
        },
        {
            name: 'Capítulo',
            selector: row => row.desc_capitulo
        },
        {
            name: 'Id Concepto',
            selector: row => row.id_concepto
        },
        {
            name: 'Concepto',
            selector: row => row.desc_concepto
        },
        {
            name: 'Id Partida Genérica',
            selector: row => row.id_partida_generica
        },
        {
            name: 'Partida Genérica',
            selector: row => row.desc_partida_generica
        },
        {
            name: 'Id Partida Específica',
            selector: row => row.id_partida_especifica
        },
        {
            name: 'Partida Específica',
            selector: row => row.desc_partida_especifica
        },
        {
            name: 'Id Tipo Gasto',
            selector: row => row.id_tipogasto
        },
        {
            name: 'Tipo Gasto',
            selector: row => row.desc_tipogasto
        },
        {
            name: 'Id Ff',
            selector: row => row.id_ff
        },
        {
            name: 'Ff',
            selector: row => row.desc_ff
        },
        {
            name: 'Id Entidad Federativa',
            selector: row => row.id_entidad_federativa
        },
        {
            name: 'Entidad Federativa',
            selector: row => row.entidad_federativa
        },
        {
            name: 'Id Clave Cartera',
            selector: row => row.id_clave_cartera
        },
        {
            name: 'Monto Aprobado',
            selector: row => row.monto_aprobado
        },

    ];

    return(
        <>
            <div className="row">
                <Table columns={columns} url={process.env.REACT_APP_API_URL + '/admin/catalogo'} title={"Catálogos"}/>
            </div>
        </>
    );

}

export default OdsTable;
