import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
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
import {PrivateRoute, PrivateRouteWithoutSubmit} from "./components/PrivateRoute";
import {PrivateRouteWithoutData} from "./components/PrivateRoute";
import NavMenu from "./components/NavMenu";

function App() {

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
                    <Router>
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
                            <Route path="/">
                                <Login store={store}/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
