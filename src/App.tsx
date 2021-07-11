import React from 'react';
import './App.css';
import {MainFormModel} from "./model/MainFormModel";
import {MainForm} from "./data/MainForm";
import Identificacion from "./components/Identificacion";
import Vinculacion from "./components/vinculacion";
import TabsMenu from "./components/TabsMenu";
import SubmitButton from "./components/SubmitButton";

function App() {
    const [store, setStore] = React.useState(MainForm);
    const [setValue] = React.useState(0);

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
                        <Identificacion onSubmit={onSubmit}/>
                        <Vinculacion/>
                    </div>
                </div>
                <SubmitButton store={store}/>
            </div>
        </div>
    </div>
  );
}

export default App;
