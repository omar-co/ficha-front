import React from 'react';

const AdminImport = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel-body">
                    <h4>Importar Catálogos</h4>
                    <form>
                        <select className="form-control" >
                            <option value="">Seleccione una opción</option>
                            <option value="1">Importar ODS</option>
                            <option value="2">Importar Objetivos MIRS</option>
                            <option value="3">Importar Catálogos</option>
                        </select>

                        <label htmlFor="file" className="control-label">
                            Archivo CSV:
                        </label>
                        <input type="file" name="file"/>
                        <div className="row">
                            <div className="form-group right">
                                <button className='btn btn-primary pull-right'  >Importar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminImport;