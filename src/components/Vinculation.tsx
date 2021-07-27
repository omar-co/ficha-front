import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Acciones, Componentes, Ejes} from "../data/vinculation/Ods";

function Vinculation({onSubmit} : {
    onSubmit: SubmitHandler<any>;
}) {

    const { handleSubmit, register, getValues } = useForm();



    return (
        <div key={2} className="tab-pane" id="vinculacion">
            <div key={3} className="panel-body">
                <h4>
                    Vinculación con metas de la Contribución Determinada a Nivel Nacional y la Ley General de Cambio Climático
                </h4>
                <hr className="red"/>
                <h5>Adaptación</h5>
                <form onChange={handleSubmit(onSubmit)}>
                    <div key={1} className="form-group">
                        <label className='control-label' htmlFor="eje">Eje:</label>
                        <select className='form-control' {...register('eje', {valueAsNumber: true})}>
                            <option value="0">Seleccione una opción</option>
                            {Ejes.map((item) => <option key={item.id} value={item.id}>{item.clave}: {item.nombre}</option>)}
                        </select>
                    </div>
                    <div key={2} className="form-group">
                        <label className='control-label' htmlFor="accionPutual">Acción Puntual:</label>
                        <select className='form-control' {...register('accionPutual', {valueAsNumber: true})}>
                            <option value="0">Seleccione una opción</option>
                            {Acciones.filter(({eje_ndc_id}) => eje_ndc_id === getValues('eje')).map((item) => <option value={item.id}>{item.clave}: {item.nombre}</option>)}
                        </select>
                    </div>

                    <h5>Mitigación</h5>

                    <div key={3} className="form-group">
                        <label className='control-label' htmlFor="componenteMitigacion">Componente de Mitigación:</label>
                        <select className='form-control' {...register('componenteMitigacion', {valueAsNumber: true})}>
                            <option value="0">Seleccione una opción</option>
                            {Componentes.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Vinculation
