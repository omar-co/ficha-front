import React, {useEffect, useState} from "react";
import Table from "../helpers/Table";
import {useForm} from "react-hook-form";
import axios from "axios";
import {authHeader} from "../helpers/AuthHeader";

function UserTable() {

    const {register, getValues, reset, setValue} = useForm();
    const [url, setUrl] = useState(process.env.REACT_APP_API_URL + '/user');
    const [formType, setFormType] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [ramos, setRamos] = useState([]);
    const [roles, setRoles] = useState([]);

    function onEdit(row: any) {
        setFormType('edit');
        setValue('id', row.id)
        setValue('name', row.name)
        setValue('last_name', row.lastName)
        setValue('email', row.email)
        setValue('ramo', row.ramo_id)
        setValue('role_id', row.role_id)
        setValue('active', row.active ? 1 : 0)
    }

    const columns = [
        {
            name: 'Nombre Completo',
            selector: row => row.name + ' ' + row.lastName,
            width: '20%'
        },
        {
            name: 'Usuario',
            selector: row => row.email,
            width: '15%'
        },
        {
            name: 'Estatus',
            selector: row => <span className="label label-success"> {row.active ? 'Activo' : 'Desactivo'}</span>,
            width: '10%'
        },
        {
            name: 'Ramo',
            selector: row => row.ramo,
            width: '15%'
        },
        {
            name: 'Rol',
            selector: row => row.role,
            width: '20%'
        },
        {
           name: 'Acciones',
            selector: row => <div className="btn-toolbar">
                <button className="btn btn-primary btn-space btn-sm" onClick={() => onEdit(row)} data-toggle="modal" data-target="#myModal">Editar</button>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '20%'
        },

    ];

    const showSuccess = () => (
        success && <div className="alert alert-success" role="alert">Usuario guardado correctamente</div>
    )

    const showError = () => (
        error && <div className="alert alert-danger" role="alert">Error al guardar, intente más tarde.</div>
    )

    const onFilter = () => {

        const data = getValues();

        if (data.name.length) {
            setUrl(url + addPrefix(url) + 'name,' + getValues('name'));
        }
        if (data.last_name.length) {
            setUrl(url + addPrefix(url) + 'last_name,' + getValues('last_name'));
        }
        if (data.email.length) {
            setUrl(url + addPrefix(url) + 'email,' + getValues('email'));
        }
        if (data.active.length) {
            setUrl(url + addPrefix(url) + 'active,' + getValues('active'));
        }
        if (!isNaN(data.ramo_id)) {
            setUrl(url + addPrefix(url) + 'ramo_id,' + getValues('ramo_id'));
        }
        if (!isNaN(data.role_id)) {
            setUrl(url + addPrefix(url) + 'role_id,' + getValues('role_id'));
        }
    };

    const onSave = async () => {

        await axios.post(process.env.REACT_APP_API_URL + '/user', getValues(), {headers: authHeader()}).then(function (response) {
            if (response && response.status === 200) {
                setSuccess(true);
            }
        }).catch(function (error) {
            setError(true);
        });

    }

    const onEditSave = async (id: number) => {
        await axios.put(process.env.REACT_APP_API_URL + '/user/' + id, getValues(), {headers: authHeader()}).then(function (response) {
            if (response && response.status === 200) {
                setSuccess(true);
            }
        }).catch(function (error) {
            setError(true);
        });
    }



    function addPrefix(url: string) {
        if (!url.includes('?like=')) {
            return '?like=';
        }

        return '&like=';
    }

    const clearUrl = () => {
        reset()
        setUrl(process.env.REACT_APP_API_URL + '/user');
        setFormType('filter');
    }

    const modalTitle = () => {
        if (formType === 'filter') return 'Filtrar'
        if (formType === 'new') return 'Nuevo Usuario'
        if (formType === 'edit') return 'Editar Usuario'
    }

    const modalButton = (id: number = 0) => {
        if (formType === 'filter')
            return <button type="button" onClick={onFilter} data-dismiss="modal" className="btn btn-primary">Filtrar</button>
        if (formType === 'new')
            return <button type="button" onClick={onSave} data-dismiss="modal" className="btn btn-primary">Guardar</button>
        if (formType === 'edit')
            return <button type="button" onClick={() => onEditSave(id)} data-dismiss="modal" className="btn btn-primary">Actualizar</button>
    }

    const passwordField = () => (
      formType !== 'filter' &&
      <div className="col-md-12">
          <label htmlFor="last_name" className="control-label">
              Contraseña
          </label>
          <input type="password" className="form-control" {...register('password')} />
      </div>
    )

    const add = () => {
        reset()
        setFormType('new');
    }

    const ramosOptions = () => (
        ramos && ramos.map((obj: any) =>
            <option value={obj.id}>{obj.id} - {obj.name}</option>
        )
    )

    const roleOptions = () => (
        roles && roles.map((obj: any) =>
            <option value={obj.id}>{obj.name}</option>
        )
    )

    const loadData = async () => {
        const responseRamos = await axios.get(process.env.REACT_APP_API_URL + '/ramo', {headers: authHeader()});
        setRamos(responseRamos.data);

        const response = await axios.get(process.env.REACT_APP_API_URL + '/role', {headers: authHeader()});
        setRoles(response.data.data);
    }

    useEffect(() => {
        loadData();

    }, []);

    return (
        <>
            {showSuccess()}
            {showError()}
            <div className="row">
                <button className="btn btn-primary" onClick={add} data-toggle="modal" data-target="#myModal">Nuevo Usuairo</button>
                <div className="pull-right">
                    <button type="button" onClick={clearUrl} className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Filtros
                    </button>
                </div>
                <Table columns={columns} url={url} title={"Usuarios registrados"}/>
            </div>

            <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <form >
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">{modalTitle()}</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="name" className="control-label">
                                            Nombre
                                        </label>
                                        <input type="hidden" className="form-control" {...register('id')} />
                                        <input type="text" className="form-control" {...register('name')} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="last_name" className="control-label">
                                            Apellido
                                        </label>
                                        <input type="text" className="form-control" {...register('last_name')} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="email" className="control-label">
                                            Usuario
                                        </label>
                                        <input type="text" className="form-control" {...register('email')} />
                                    </div>
                                    {passwordField()}
                                    <div className="col-md-12">
                                        <label htmlFor="active" className="control-label">
                                            Activo
                                        </label>
                                        <select className="form-control" {...register('active', {valueAsNumber: true})}>
                                            <option >Seleccione una opción</option>
                                            <option value="1">Sí</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="ramo_id" className="control-label">
                                            Ramo:
                                        </label>
                                        <select
                                            className="form-control" {...register('ramo_id', {valueAsNumber: true})}>
                                            <option>Seleccione una opción</option>
                                            {ramosOptions()}
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="role_id" className="control-label">
                                            Rol:
                                        </label>
                                        <select
                                            className="form-control" {...register('role_id')}>
                                            <option>Seleccione una opción</option>
                                            {roleOptions()}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                {modalButton(getValues('id'))}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default UserTable;
