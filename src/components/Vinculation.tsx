import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Categorias, Sectores} from "../data/vinculation/Sectores";
import {Ejes} from "../data/vinculation/Ejes";
import {MetasAdaptacion, MetasMitigacion} from "../data/vinculation/Metas";

function Vinculation({onSubmit} : {
    onSubmit: SubmitHandler<any>;
}) {

    const { handleSubmit, register, getValues } = useForm();

    const categories = () => (
        getValues('sectores') ? Categorias.filter(({sector_id}) =>
            sector_id === getValues('sectores')).map(category => (
            <option value={category.id}>{category.name}</option>)) : null
    );

    return (
        <div key={2} className="tab-pane" id="vinculacion">
            <div key={3} className="panel-body">
                <h6>
                    Vinculación con metas de la Contribución Determinada a Nivel Nacional y la Ley General de Cambio Climático
                </h6>
                <hr className="red"/>
                <form onChange={handleSubmit(onSubmit)}>
                    <div key={1} className="form-group">
                        <label className='control-label' htmlFor="sectores">I. Sectores:</label>
                        <select className='form-control' {...register('sectores', {valueAsNumber: true})}>
                            <option value="0">Seleccione una opción</option>
                            {Sectores.map((index) => <option value={index.id}>{index.name}</option>)}
                        </select>
                    </div>
                    <div key={4} className="form-group">
                        <label className='control-label' htmlFor="categoria">I. Categorías:</label>
                        <select className='form-control' {...register('categoria')}>
                            <option value="0">Seleccione una opción</option>
                            {categories()}
                        </select>
                    </div>
                    <div key={5} className="form-group">
                        <label className='control-label' htmlFor="ejes">II. Ejes:</label>
                        <select className='form-control' {...register('ejes')}>
                            {Ejes.map((index) => <option value={index}>{index}</option>)}
                        </select>
                    </div>
                    <div key={6} className="form-group">
                        <label className='control-label' htmlFor="metaMitigacion">Meta mitigación:</label>
                        <select className='form-control' {...register('metaMitigacion')}>
                            {MetasMitigacion.map((index) => <option value={index}>{index}</option>)}
                        </select>
                    </div>
                    <div key={7} className="form-group">
                        <label className='control-label' htmlFor="metaAdaptacion">Meta adaptación:</label>
                        <select className='form-control' {...register('metaAdaptacion')}>
                            {MetasAdaptacion.map((index) => <option value={index}>{index}</option>)}
                        </select>
                    </div>
                    <div key={8} className="form-group">
                        <label className='control-label' htmlFor="vinculacion">¿La vinculación del programa con la Contribución Determinada tiene un enfoque de mediano-largo plazo? </label>
                        <select className='form-control' {...register('vinculacion')}>
                            <option value="0">n.a.</option>
                            <option value="1">Si</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Vinculation
