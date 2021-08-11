import React from "react";
import { useHistory } from "react-router-dom";
import authenticationService from "../services/AuthenticationService";

function TabsMenu({tag}: {
    tag: any
}) {

    let history = useHistory();

    function goToLibrary(){
        history.push('/biblioteca')
    }

    const logout = () => {
        authenticationService.logout();
        history.push('/login');
    }


    return (
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <>
            <nav>
                <ul className="nav nav-tabs tabs-left">
                    <li>
                        <button className="btn btn-primary tabs-button" onClick={logout}>Cerrar sesión</button>
                    </li>
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
                    <li>
                        <button className="btn btn-primary tabs-button" onClick={goToLibrary}>Biblioteca</button>
                    </li>
                </ul>
            </nav>
        </>


    );
}

export default TabsMenu
