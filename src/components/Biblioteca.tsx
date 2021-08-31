import React from "react";

function Biblioteca () {

    function handleClick() {
        window.history.back();
        window.scrollTo(0,0);
    }


    return (
        <div className="row">
            <div className="row">
                <div className="col-md-12">
                    <h4>BIBLIOTECA</h4>
                    <hr className="red"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <ul>
                            <li>
                                <a href="https://hacienda.frb.io/metodologia">1.- Metodologia ATCC</a>
                            </li>
                            <li>
                                <a href="https://hacienda.frb.io/capacitacion">2.- Capacitacion Integracion ATCC</a>
                            </li>
                            <li>
                                <a href="https://hacienda.frb.io/manual">3.- Manual de usuario</a>
                            </li>
                            <li>
                                <a href="https://hacienda.frb.io/glosario">4.- Glosario V2</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 right">
                    <button className="btn btn-secondary pull-right" onClick={handleClick}>Regresar</button>
                </div>
            </div>
        </div>

    );

}

export default Biblioteca
