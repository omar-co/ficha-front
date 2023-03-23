import React, {useState} from "react";
import authenticationService from "../services/AuthenticationService";
import { useHistory } from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = ({store}: {
    store: any;
}) => {

    const {handleSubmit, getValues, register} = useForm();
    const [error, setError] = useState(null);

    let history = useHistory();

    if(authenticationService.currentUserValue){
        history.push('/presupuesto-verde');
    }

    const onSubmit = () => {
        authenticationService.login(getValues('email'), getValues('password'))
            .then(
                data => {
                    if(data.has_data){
                        store.ramo = data.ramo;
                        store.modalidad = data.modalidad;
                        store.programa = data.programa;
                        store.directamente = data.directamente;
                        history.push('/cuantificacion');
                    } else {
                        history.push('/presupuesto-verde');
                        window.location.reload();
                    }
                }, error => {
                    setError(error);
                }
            )
    }


    return(
        <div className="row">
            <form onSubmit={handleSubmit(onSubmit)}>
                {error &&
                    <div className="row center">
                        <div className="col-md-4 alert alert-danger">
                            <p>Usuario o contraseña incorrectos</p>
                        </div>
                    </div>
                }
                <div className="row center">
                    <div className="col-md-4 text-center">
                        <label htmlFor="email" className="control-label">Usuario:</label>
                        <input type="text" className="form-control" {...register('email')}/>
                    </div>
                </div>
                <br/>
                <div className="row center">
                    <div className="col-md-4 text-center">
                        <label htmlFor="pass" className="control-label">Contraseña:</label>
                        <input type="password" className="form-control" {...register('password')} />
                    </div>
                </div>
               <br/>
                <div className="row center">
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login
