import React from "react";
import TabsMenu from "../TabsMenu";

function Inicio() {

    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <TabsMenu tag={'presupuesto-verde'}/>
                </div>
                <div className="col-md-9">
                    <div className="row ">
                        <p className="text-center">
                            Mensaje de bienvenida
                        </p>
                    </div>

                    <div className="row" style={{ margin: "30px" }}>
                        <div className="col-md-4">
                            <p className="text-center">
                                <b>Presupuesto Verde <br/> Objetivos Ambientales</b>
                            </p>
                            <p className="text-justify">
                                El objetivo es contribuir a la generación de capacidades para la identificación de
                                acciones que el gobierno lleva a cabo en materia de cambio climático y la cuantificación
                                de dichos recursos, a través de brindar criterios que permitan identificar las acciones
                                y los recursos relevantes en la consecución de los objetivos de adaptación y mitigación
                                del cambio climático.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p className="text-center">
                                <b>Presupuesto Verde <br/> Cambio Climático</b>
                            </p>
                            <p className="text-justify">
                                El objetivo es contribuir a la generación de capacidades para la identificación de
                                acciones llevadas a cabo por el gobierno federal que pueden ser consideradas como
                                presupuesto verde, así como la creación de capacidades para cuantificar los recursos que
                                se destinan al desarrollo de dichas acciones.
                            </p>
                        </div>
                        <div className="col-md-4 ">
                            <p className="text-center">
                                <b>Ingresos Verdes</b>
                            </p>
                            <p className="text-justify">
                                El objetivo es contribuir a la generación de capacidades para la identificación y
                                clasificación de ingresos que por sus características pueden ser catalogados como
                                verdes. Se trata de impuestos y otras formas de ingresos corrientes que tienen el
                                potencial de alterar la recaudación de los ingresos públicos de forma sustancial y de
                                generar un impacto ambiental positivo o negativo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Inicio
