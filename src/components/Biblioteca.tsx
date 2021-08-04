import React from "react";


function Biblioteca () {


    function handleClick() {
        window.history.back();
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
                                <a href="https://drive.google.com/uc?export=download&id=1WuTxkcGMfXSf6PBXiZtIbj6YzMt8kIQy">1.- Instrucciones para el pilotaje de la herramienta</a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/uc?export=download&id=1uQjp6ghigGtB76A2vPjV1euw5t80zfM9">2.- Manual de Usuario V4</a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/uc?export=download&id=1AcijCLZLjN442e4NJFiZAs71-QsYSR7t">3.- Nota Metodológica</a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/uc?export=download&id=1-mEUrDlJCzc9SpZ9RMyxu7H2-FL_CshR">4.- Glosario</a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/uc?export=download&id=1NmdFjwIswGUnkum-3mmQ8laQWuAPLfL8">5.- Capacitacion 27 - 29 de Julio</a>
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
