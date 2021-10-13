import React, {useState} from 'react';
import SweetAlert from "react-bootstrap-sweetalert";

const AdminImport = () => {

    const inital : any = false;
    const [archivo, setArchivo] = useState(inital);

    const onFileChange = (event) => {
      setArchivo(event.target.files[0]);
    }

    const onFileUpload = () => {
      const formData = new FormData();

      formData.append(
          'file',
          archivo,
          archivo.name
      );

      console.log(archivo);

        return <SweetAlert
            onConfirm={fileData}
            title='Caca'
            show={true}>
            La información precargada en este sistema, corresponde al ejercicio fiscal 2022 con corte al 29 de agosto de 2021.
        </SweetAlert>
    }

    const fileData = () => {
        if (archivo) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {archivo.name}</p>
                    <p>File Type: {archivo.type}</p>
                    <p>
                        Last Modified:{" "}
                        {archivo.lastModified}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel-body">
                    <h4>Importar Catálogos</h4>
                        <select className="form-control" >
                            <option value="">Seleccione una opción</option>
                            <option value="1">Importar ODS</option>
                            <option value="2">Importar Objetivos MIRS</option>
                            <option value="3">Importar Catálogos</option>
                        </select>

                        <label htmlFor="file" className="control-label">
                            Archivo CSV:
                        </label>
                        <input type="file" name="file" onChange={onFileChange}/>
                        <div className="row">
                            <div className="form-group right">
                                <button className='btn btn-primary pull-right' onClick={onFileUpload}  >Importar</button>
                            </div>
                        </div>

                    { fileData() }
                </div>
            </div>
        </div>
    );
};

export default AdminImport;