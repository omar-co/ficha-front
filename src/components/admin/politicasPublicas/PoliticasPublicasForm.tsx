import React, {useState} from 'react';
import axios from "axios";
import {authHeader} from "../../../helpers/AuthHeader";
import {useForm} from "react-hook-form";

const PoliticasPublicasForm = () => {

    const [urlPoliticasPublicas] = useState(process.env.REACT_APP_API_URL + '/admin/politicas-publicas');
    const {register, getValues} = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const onSave = async () => {
        await axios.post(urlPoliticasPublicas, getValues(), {headers: authHeader()}).then(function (response) {
            if (response && response.status === 200) {
                setSuccess(true);
            }
        }).catch(function (error) {
            setError(true);
        });

    }

    return (
        <div>
            <form className="clearfix">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="name">Nombre de la política pública</label>
                            <input type="text" className="form-control" {...register('name')}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="active">Estatus</label>
                            <select className="form-control" {...register('active')}>
                                <option value="0">Inactivo</option>
                                <option value="1">Activo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="fechaInicio">Fecha de Inicio</label>
                            <input type="date" className="form-control" {...register('start_date')}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="fechaFin">Fecha de Finalización</label>
                            <input type="date" className="form-control" {...register('end_date')}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 pull-right">
                        <button onClick={onSave} className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PoliticasPublicasForm;