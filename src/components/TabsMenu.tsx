import React from "react";

function TabsMenu({tag}: {
    tag: any
}) {

    return (
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <nav>
            <ul className="nav nav-tabs tabs-left">
                <li className={tag === 'identificacion' ? 'active' : ''}>
                    <a>PRESUPUESTO</a>
                </li>
                <li className={tag === 'indicadores' ? 'active' : ''}>
                    <a>INDICADORES</a>
                </li>
                <li className={tag === 'pecc' ? 'active' : ''}>
                    <a>PNCC - PECC</a>
                </li>
                <li className={tag === 'ndc' ? 'active' : ''}>
                    <a>PNCC - NDC</a>
                </li>
                <li className={tag === 'otros' ? 'active' : ''}>
                    <a>VINCULACIÓN CON OTROS INSTRUMENTOS RELEVANTES</a>
                </li>
                <li className={tag === 'ods' ? 'active' : ''}>
                    <a>ODS</a>
                </li>
                <li className={tag === 'componentes' ? 'active' : ''}>
                    <a>COMPONENTES</a>
                </li>
                <li className={tag === 'cuantificacion' ? 'active' : ''}>
                    <a>CUANTIFICACIÓN</a>
                </li>
            </ul>
        </nav>

    );
}

export default TabsMenu
