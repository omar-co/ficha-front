import React from 'react';
import './App.css';
import {MainFormModel} from "./model/MainFormModel";
import {MainForm} from "./data/MainForm";
import Identification from "./components/Identification";
import Vinculation from "./components/Vinculation";
import TabsMenu from "./components/TabsMenu";
import SubmitButton from "./components/SubmitButton";
import Aportacion from "./components/Aportacion";
import Cuantificacion from "./components/Cuantificacion";
import Indicadores from "./components/Indicadores";
import AreasIdentificacion from "./components/AreasIdentificacion";
import Componentes from "./components/Componentes";

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
                <div className="col-md-3">
                    <TabsMenu/>
                </div>
                <div className="col-md-9">
                    <div className="tab-content">
                        <Identification onSubmit={onSubmit}/>
                        <Vinculation onSubmit={onSubmit}/>
                        <Aportacion onSubmit={onSubmit}/>
                        <Cuantificacion onSubmit={onSubmit}/>
                        <Indicadores onSubmit={onSubmit}/>
                        <AreasIdentificacion onSubmit={onSubmit}/>
                        <Componentes onSubmit={onSubmit}/>
                    </div>
                </div>
                <SubmitButton store={store}/>
            </div>
        </div>
    </div>
  );
}

export default App;
