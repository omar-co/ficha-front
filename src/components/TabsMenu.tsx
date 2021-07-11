import React from "react";

function TabsMenu() {

    return (
        <ul className="nav nav-tabs tabs-left">
            <li className="active">
                <a href="#identificacion" data-toggle="tab">IDENTIFICACIÓN DEL PROGRAMA PRESUPUESTARIO</a>
            </li>
            <li>
                <a href="#vinculacion" data-toggle="tab">VINCULACIÓN CON LA CONTRIBUCIÓN DETERMINADA A NIVEL NACIONAL</a>
            </li>
            <li>
                <a href="#aportacion" data-toggle="tab">APORTACIÓN AL PROGRAMA ESPECIAL DE CAMBIO CLIMÁTICO</a>
            </li>
            <li>
                <a href="#cuantificacion" data-toggle="tab">CUANTIFICACIÓN PRESUPUESTAL</a>
            </li>
            <li>
                <a href="#indicadores" data-toggle="tab">VINCULACIÓN A INDICADORES</a>
            </li>
            <li>
                <a href="#identificacion" data-toggle="tab">IDENTIFICACIÓN DE ÁREAS DE MEJORA EN ACTIVIDADES ACTUALES</a>
            </li>
            <li>
                <a href="#componentes" data-toggle="tab">COMPONENTES DE MITIGACIÓN Y ADAPTACIÓN</a>
            </li>
        </ul>
    );
}

export default TabsMenu
