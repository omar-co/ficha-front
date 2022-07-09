import React, {useEffect, useState} from 'react';
import axios from "axios";
import {authHeader} from "../helpers/AuthHeader";
import {useForm} from "react-hook-form";

const Configuracion = () => {

    const [data, setData] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const {register, setValue, handleSubmit} = useForm();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/config', {headers: authHeader()});
        setData(response.data.data);

    }

    const populate = () => {
        if (data.length) {
            // @ts-ignore
            setValue('ejercicio', data.find(({key}) => key === 'ejercicio').value);
            // @ts-ignore
            setValue('corte', data.find(({key}) => key === 'corte').value);
        }
        return true;
    }

    const onSave = async (data: any) => {
      await axios.put(process.env.REACT_APP_API_URL + '/config/1', data, {headers: authHeader()}).then(function (response) {
          if (response && response.status === 200) {
              setSuccess(true);
          } else {
              setError(true);
          }
      }).catch(function (error) {
          setError(true);
      })

    }

    const showError = () => (
        error && <div className="alert alert-danger" role="alert">Error al guardar, intente de nuevo más tarde.</div>
    )

    return (
        <div>
            {success && <div className="alert alert-success">Configuración guardada Correctamente.</div> }
            {showError() }
            {populate()}
            <h4>Calendario</h4>
            <hr/>
            <form onSubmit={handleSubmit(onSave)} className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2" htmlFor="ejercicio">Ejercicio Fiscal</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ejercicio" {...register('ejercicio')} placeholder="Año del Ejercicio Fiscal" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2" htmlFor="corte">Fecha de Corte</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" {...register('corte')} id="corte" />
                    </div>
                </div>
                <hr/>
                <div className="pull-right">
                    <input type="submit" className="btn btn-primary" value="Guardar"/>
                </div>
            </form>
        </div>
);
};

export default Configuracion;