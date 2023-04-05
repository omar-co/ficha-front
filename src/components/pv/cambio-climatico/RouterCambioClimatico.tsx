import React from "react";
import {
    Switch,
    BrowserRouter,
    useRouteMatch
} from "react-router-dom";
import { PrivateRoute, PrivateRouteWithoutSubmit} from "../../PrivateRoute";
import Cuantificacion from "./Cuantificacion";
import AreasIdentificacion from "./AreasIdentificacion";
import ObjetivosDesarrolloSustentable from "./ObjetivosDesarrolloSustentable";
import Pregunta from "./Pregunta";
import Validacion from "./Validacion";
import VinculacionOtros from "./VinculacionOtros";
import Vinculation from "./Vinculation";
import Aportacion from "./Aportacion";
import Indicadores from "./Indicadores";
import Identification from "./Identification";
import {SubmitHandler} from "react-hook-form";

function RouterCambioClimatico({onSubmit, store}: {
    onSubmit: SubmitHandler<any>;
    store: any
}) {

    let { path } = useRouteMatch();

    return (
        <div className="App">
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <PrivateRouteWithoutSubmit path={`${path}/cuantificacion`} component={Cuantificacion} store={store}/>
                                <PrivateRoute path={`${path}/areas`} component={AreasIdentificacion} onSubmit={onSubmit} store={store}/>
                                <PrivateRoute path={`${path}/ods`} component={ObjetivosDesarrolloSustentable} store={store} onSubmit={onSubmit}/>
                                <PrivateRoute path={`${path}/pregunta`} component={Pregunta} store={store} onSubmit={onSubmit}/>
                                <PrivateRoute path={`${path}/validacion`} component={Validacion} store={store} onSubmit={onSubmit}/>
                                <PrivateRoute path={`${path}/otros`} component={VinculacionOtros} onSubmit={onSubmit} store={store}/>
                                <PrivateRoute path={`${path}/ndc`} component={Vinculation} store={store} onSubmit={onSubmit}/>
                                <PrivateRoute path={`${path}/pecc`} component={Aportacion} store={store} onSubmit={onSubmit}/>
                                <PrivateRoute path={`${path}/indicadores`} component={Indicadores} store={store} onSubmit={onSubmit}/>
                                <PrivateRoute exact path={`${path}`} component={Identification} store={store} onSubmit={onSubmit}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>

    );

}

export default RouterCambioClimatico
