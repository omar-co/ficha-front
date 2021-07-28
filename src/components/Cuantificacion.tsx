import React, { useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import CurrencyInput from 'react-currency-input-field';
import {Marcadores} from "../data/shared";

import FiltroModal from "./FiltroModal";


function Cuantificacion({onSubmit, store}: {
    store: any;
    onSubmit: SubmitHandler<any>;
}) {

    const {handleSubmit, register, setValue} = useForm();
    const [pp, setPp] = useState<string | undefined>(' ');
    const [rawPp, setRawPp] = useState<string | undefined>(' ');
   // const [data, setData] = useState({data: []});

    const formatAndRawPpValue = (pp: string | undefined): void => {
        setRawPp(pp === undefined ? 'undefined' : pp || ' ');
        setPp(pp);
        if (typeof rawPp === "string") {
            store.rawPp = parseInt(rawPp);
        }
        setValue('atcc', (store.rawPp * Marcadores[store.marcador]));
    };
    /*
      useEffect(() => {
          axios.get(process.env.REACT_APP_API_URL + '/capitulo').then(
              res => setData(res.data)
          );
      });

      /*
      const capitulos = () => (
          data.data && getValues('capitulo') ? data.data.filter(({capitulo}) =>
              capitulo === getValues('capitulo')).map(concepto => (
                  <option value={concepto}>{concepto}</option>
              )
          ) : null
      ); */

    return (
        <div className="tab-pane" id="cuantificacion">
            <div className="panel-body">
                <label className="control-label">Partida especifica</label>
                <hr className="red"/>

                <FiltroModal store={store}/>

                <br/>
                <br/>
            </div>
        </div>
    );

}

export default Cuantificacion;
