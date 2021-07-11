import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {IdentificationFormModel} from "../model/IdentificacionFormModel";
import {MainFormModel} from "../model/MainFormModel";

function SubmitButton({store}: {
    store: any;
}) {

    const logger = () => console.log(store);

    return (
        <div className="form-group">
            <button className='btn btn-primary' onClick={logger} >Enviar</button>
        </div>
    );

}

export default SubmitButton
