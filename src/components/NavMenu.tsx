import React from "react";
import { history } from "../helpers/History";
import {Link} from "react-router-dom";
import authenticationService from "../services/AuthenticationService";

function NavMenu() {


    function goToLibrary(){
        history.push('/biblioteca')
        window.location.reload();
    }

    const logout = () => {
        authenticationService.logout();
        history.push('/login');
    }

    const url = process.env.REACT_APP_API_URL + "/admin/export?token=" + authenticationService.token;

    const adminMenu = () => (
        authenticationService.currentUserValue && authenticationService.currentUserValue.mode === 'admin' &&
        <ul className="nav navbar-nav navbar-left">
            <li className="dropdown">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false">Acciones <span
                    className="caret"/></a>
                <ul className="dropdown-menu">

                    <li><a href={url}>Descargar Registros</a></li>
                    <li> <Link to='/importar' >Importar Catálogos</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false">Administración <span
                    className="caret"/></a>
                <ul className="dropdown-menu">
                    <li> <Link to='/usuarios' >Usuarios</Link></li>
                </ul>
            </li>
        </ul>
    )


    return (
        <>
            {authenticationService.currentUserValue &&
                <nav className="navbar navbar-inverse sub-navbar navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="/" className="navbar-brand not-active ">Hacienda</a>
                        </div>
                        <div className="collapse navbar-collapse" id="subenlaces">
                            { adminMenu() }
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href={"biblioteca"} type="button" onClick={goToLibrary}>Biblioteca</a></li>
                                <li><a href="/#" type="button" onClick={logout}>Cerrar Sesión</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </>
    );
}

export default NavMenu
