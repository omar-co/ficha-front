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
import SubmitButton from "./components/SubmitButton";
import Aportacion from "./components/Aportacion";
import Cuantificacion from "./components/Cuantificacion";
import Indicadores from "./components/Indicadores";
import AreasIdentificacion from "./components/AreasIdentificacion";
import ObjetivosDesarrolloSustentable from "./components/ObjetivosDesarrolloSustentable";
import Validacion from "./components/Validacion";
import Pregunta from "./components/Pregunta";
import VinculacionOtros from "./components/VinculacionOtros";
import Biblioteca from "./components/Biblioteca";

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
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <h4>HERRAMIENTA PARA LA IDENTIFICACIÓN Y CUANTIFICACIÓN PARA LA INTEGRACIÓN DEL ANEXO TRANSVERSAL DE CAMBIO CLIMÁTICO.</h4>
                </div>
            </div>

            <hr className="red"/>
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Switch>
                            <Route path="/cuantificacion">
                                <Cuantificacion store={store}/>
                                <SubmitButton store={store}/>
                            </Route>
                            <Route path="/areas">
                                <AreasIdentificacion onSubmit={onSubmit}/>
                            </Route>
                            <Route path="/ods">
                                <ObjetivosDesarrolloSustentable onSubmit={onSubmit} store={store}/>
                            </Route>
                            <Route path="/pregunta">
                                <Pregunta onSubmit={onSubmit} store={store}/>
                            </Route>
                            <Route path="/validacion">
                                <Validacion onSubmit={onSubmit} store={store}/>
                            </Route>
                            <Route path="/otros">
                                <VinculacionOtros onSubmit={onSubmit}/>
                            </Route>
                            <Route path="/ndc">
                                <Vinculation onSubmit={onSubmit}/>
                            </Route>
                            <Route path="/pecc">
                                <Aportacion onSubmit={onSubmit} store={store}/>
                            </Route>
                            <Route path="/indicadores">
                                <Indicadores onSubmit={onSubmit} store={store}/>
                            </Route>
                            <Route path="/biblioteca">
                                <Biblioteca/>
                            </Route>
                            <Route path="/">
                                <Identification onSubmit={onSubmit} store={store}/>
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
