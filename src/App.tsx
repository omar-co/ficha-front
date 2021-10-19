import React from 'react';
import {
    Switch,
    Route, BrowserRouter
} from "react-router-dom";
import './App.css';
import {MainFormModel} from "./model/MainFormModel";
import {MainForm} from "./data/MainForm";
import Identification from "./components/Identification";
import Vinculation from "./components/Vinculation";
import Aportacion from "./components/Aportacion";
import Cuantificacion from "./components/Cuantificacion";
import Indicadores from "./components/Indicadores";
import AreasIdentificacion from "./components/AreasIdentificacion";
import ObjetivosDesarrolloSustentable from "./components/ObjetivosDesarrolloSustentable";
import Validacion from "./components/Validacion";
import Pregunta from "./components/Pregunta";
import VinculacionOtros from "./components/VinculacionOtros";
import Biblioteca from "./components/Biblioteca";
import Login from "./components/Login";
import {AdminPrivateRoute, PrivateRoute, PrivateRouteWithoutSubmit} from "./components/PrivateRoute";
import {PrivateRouteWithoutData} from "./components/PrivateRoute";
import NavMenu from "./components/NavMenu";
import axios from "axios";
import authenticationService from "./services/AuthenticationService";
import AdminImport from "./components/AdminImport";
import UserTable from "./components/UserTable";
import OdsTable from "./components/OdsTable";
import MirTable from "./components/MirTable";
import CatalogosTable from "./components/CatalogosTable";
function App() {

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if ([401, 403].indexOf(error.response.status) !== -1) {
            authenticationService.logout(true);
        }
    })

    const [store, setStore] = React.useState(MainForm);

    const onSubmit = (
        data: Partial<MainFormModel>
    ) => {
        setStore({
            ...store,
            ...data
        });
    };


  return (
    <div className="App">
        <BrowserRouter>
        <>
            <NavMenu/>
        </>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4>IDENTIFICACIÓN Y CUANTIFICACIÓN DE LOS RECURSOS PARA LA MITIGACIÓN Y ADAPTACIÓN AL CAMBIO CLIMÁTICO</h4>
                </div>
            </div>
            <hr className="red"/>
            <div className="row">
                <div className="col-md-12">
                        <Switch>
                            <PrivateRouteWithoutSubmit path="/cuantificacion" component={Cuantificacion} store={store}/>
                            <PrivateRoute path="/areas" component={AreasIdentificacion} onSubmit={onSubmit} store={store}/>
                            <PrivateRoute path="/ods" component={ObjetivosDesarrolloSustentable} store={store} onSubmit={onSubmit}/>
                            <PrivateRoute path="/pregunta" component={Pregunta} store={store} onSubmit={onSubmit}/>
                            <PrivateRoute path="/validacion" component={Validacion} store={store} onSubmit={onSubmit}/>
                            <PrivateRoute path="/otros" component={VinculacionOtros} onSubmit={onSubmit} store={store}/>
                            <PrivateRoute path="/ndc" component={Vinculation} store={store} onSubmit={onSubmit}/>
                            <PrivateRoute path="/pecc" component={Aportacion} store={store} onSubmit={onSubmit}/>
                            <PrivateRoute path="/indicadores" component={Indicadores} store={store} onSubmit={onSubmit}/>
                            <PrivateRouteWithoutData path="/biblioteca" component={Biblioteca}/>
                            <PrivateRoute exact path="/identificacion" component={Identification} store={store} onSubmit={onSubmit}/>
                            <AdminPrivateRoute path="/importar" component={AdminImport}/>
                            <AdminPrivateRoute path="/usuarios" component={UserTable}/>
                            <AdminPrivateRoute path="/objetivos-desarrollo-sustentable" component={OdsTable}/>
                            <AdminPrivateRoute path="/objetivos-mir" component={MirTable}/>
                            <AdminPrivateRoute path="/catalogos" component={CatalogosTable}/>
                            <Route path="/">
                                <Login store={store}/>
                            </Route>
                        </Switch>
                </div>
            </div>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
