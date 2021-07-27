import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
            <h4>VINCULACIÓN ENTRE LOS PROGRAMAS PRESUPUESTARIOS, EL ANEXO TRANSVERSAL DE CAMBIO CLIMÁTICO Y LA CONTRIBUCIÓN DETERMINADA A NIVEL NACIONAL</h4>
            <hr className="red"/>
            <div className="row">
                <Router>
                    <Switch>
                        <Route path="/cuantificacion">
                            <Cuantificacion onSubmit={onSubmit} store={store}/>
                        </Route>
                        <Route path="/areas">
                            <AreasIdentificacion onSubmit={onSubmit}/>
                        </Route>
                        <Route path="/identificacion">
                            <Identification onSubmit={onSubmit}/>
                        </Route>
                        <Route path="/objetivo">
                            <Pregunta onSubmit={onSubmit}/>
                        </Route>
                        <Route path="/validacion">
                            <Validacion onSubmit={onSubmit} store={store}/>
                        </Route>
                        <Route path="/indicadores">
                            <Indicadores onSubmit={onSubmit} store={store}/>
                        </Route>
                        <Route path="/pecc">
                            <Aportacion onSubmit={onSubmit} store={store}/>
                        </Route>
                        <Route path="/">
                            <Vinculation onSubmit={onSubmit}/>
                        </Route>
                    </Switch>
                    <div className="col-md-12">
                        <div className="tab-content">
                            <ObjetivosDesarrolloSustentable onSubmit={onSubmit}/>
                        </div>
                    </div>
                    <SubmitButton store={store}/>
                </Router>
            </div>
        </div>
    </div>
  );
}

export default App;
