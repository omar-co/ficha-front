import React from "react";
import { history } from "../helpers/History";
import authenticationService from "../services/AuthenticationService";

function NavMenu(){

    function goToLibrary(){
        history.push('/biblioteca')
        window.location.reload();
    }

    const logout = () => {
        authenticationService.logout();
        history.push('/login');
    }


    return (
        <>
            <nav className="navbar navbar-inverse sub-navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand not-active ">Hacienda</a>
                    </div>
                    <div className="collapse navbar-collapse" id="subenlaces">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href={"biblioteca"} type="button" onClick={goToLibrary}>Biblioteca</a></li>
                            <li><a href="/#" type="button" onClick={logout}>Cerrar Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavMenu
