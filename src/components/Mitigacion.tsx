import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

function Mitigacion({onSubmit}: {
    onSubmit: SubmitHandler<any>;
}){
    let totals;
    const {handleSubmit, register, getValues} = useForm();

    const totalAmount = () => {
        if (!getValues('fines')) {
            totals =
                getValues('definicion') +
                getValues('tipo') +
                getValues('gycei') +
                getValues('fuentes');
        } else if(getValues('fines') === 1){
            totals = 100;
        }

        if(totals){
            return (<div className="row">
                        <div className="col-md-12 text-right">
                            <h4>Total: {totals}</h4>
                        </div>
                    </div>);
        }
    }

    const segundaPreguntas = () => (
      getValues('fines') === 0 ? <div className="row">
          <br/>
            <div className="col-md-12">
                <label htmlFor="reducir" className="control-label">
                    ¿La actividad que se desarrolla es para reducir o evitar emisiones GyCEI?
                </label>
                <select className="form-control" {...register('reducir', {valueAsNumber: true})}>
                    <option value="">Selecciona una opcion</option>
                    <option value="1">Si</option>
                    <option value="0">No</option>W
                </select>
            </div>
        </div>:null
    );

    const terceraPreguntas = () => (
       (getValues('fines') === 0 && getValues('reducir') === 0) ?  <div className="row">
           <br/>
            <div className="col-md-12">
                <label htmlFor="secuestrar" className="control-label">
                    ¿La actividad que se desarrolla es para secuestrar o capturar GyCEI?
                </label>
                <select className="form-control" {...register('secuestrar', {valueAsNumber: true})}>
                    <option value="">Selecciona una opcion</option>
                    <option value="1">Si</option>
                    <option value="0">No</option>
                </select>
            </div>

        </div>: null
    );

    const cuartaPreguntas = () => (
       (getValues('reducir') === 1 || getValues('secuestrar') === 1) ?
           <div className="row">
               <hr/>
            <div className="col-md-12">
                <label htmlFor="definicion" className="control-label">¿Se cuenta con una definición del límite geográfico en la que se lleve a cabo el proyecto y/o actividad?</label>
                <select className="form-control" {...register('definicion', {valueAsNumber: true})}>
                    <option value="">Selecciona una opcion</option>
                    <option value="25">Si</option>
                    <option value="0">No</option>
                </select>
            </div>
            <div className="col-md-12">
                <label htmlFor="tipo" className="control-label">
                    ¿Se identifica el sector en donde se reducen las emisiones de GyCEI?
                </label>
                <select className="form-control" {...register('tipo', {valueAsNumber: true})}>
                    <option value="">Selecciona una opcion</option>
                    <option value="25">Si</option>
                    <option value="0">No</option>
                </select>
            </div>
            <div className="col-md-12">
                <label htmlFor="gycei" className="control-label">
                    ¿Se identifica el GyCEI que se mitiga?
                </label>
                <select className="form-control" {...register('gycei', {valueAsNumber: true})}>
                    <option value="">Selecciona una opcion</option>
                    <option value="25">Si</option>
                    <option value="0">No</option>
                </select>
            </div>
            <div className="col-md-12">
                <label htmlFor="fuentes" className="control-label">
                    ¿Se utiliza alguna metodología para calcular las reducciones de emisiones?
                </label>
                <select className="form-control" {...register('fuentes', {valueAsNumber: true})}>
                    <option value="">Selecciona una opcion</option>
                    <option value="25">Si</option>
                    <option value="0">No</option>
                </select>
            </div>
        </div>:null
    )

    return(
        <div className="tab-pane" id="mitigacion">
            <div className="panel-body">
                <form onChange={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="fines" className="control-label">
                                ¿La actividad que desarrolla con fines de reducción de GyCEI es de tipo legal, regulatoria o normativa?
                            </label>
                            <select className="form-control" {...register('fines', {valueAsNumber: true})}>
                                <option value="">Selecciona una opcion</option>
                                <option value="1" >Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    { segundaPreguntas() }
                    { terceraPreguntas() }
                    { cuartaPreguntas() }
                    {totalAmount()}
                </form>
            </div>
        </div>
    );


}
export default Mitigacion;
