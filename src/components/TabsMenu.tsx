import React from "react";
import { useHistory } from "react-router-dom";

function TabsMenu({tag}: {
    tag: any
}) {

    let history = useHistory();

    function goToLibrary(){
        history.push('/biblioteca')
    }

    return (
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <div>
            <div className="row">
                <div className="row text-center">
                    <button className="btn btn-primary" onClick={goToLibrary}>Biblioteca</button>
                </div>
            </div>
            <nav>
                <ul className="nav nav-tabs tabs-left">
                    <li className={tag === 'identificacion' ? 'active' : ''}>
                        <a>IDENTIFICACIÓN DEL PROGRAMA PRESUPUESTARIO</a>
                    </li>
                    <li className={tag === 'indicadores' ? 'active' : ''}>
                        <a>PNCC - INDICADORES</a>
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
                    <li className={tag === 'pregunta' ? 'active': ''}>
                        <a>VINCULACIÓN PP-PNCC</a>
                    </li>
                    <li className={tag === 'componentes' ? 'active' : ''}>
                        <a>TIPO DE CONTRIBUCIÓN</a>
                    </li>
                    <li className={tag === 'cuantificacion' ? 'active' : ''}>
                        <a>CUANTIFICACIÓN</a>
                    </li>
                </ul>
            </nav>
        </div>


    );
}

export default TabsMenu
