import React, {useEffect, useState} from "react";
import Table from "../helpers/Table";
import {useForm} from "react-hook-form";
import axios from "axios";
import {authHeader} from "../helpers/AuthHeader";

function UserTable() {

    const base = process.env.REACT_APP_API_URL + '/user';
    const initial: any = [];
    const [data, setData] = useState(initial);
    const {register, getValues, reset, setValue} = useForm();
    const [url, setUrl] = useState(process.env.REACT_APP_API_URL + '/user');
    const [formType, setFormType] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [ramos, setRamos] = useState([]);
    const [roles, setRoles] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [userId, setUserId] = useState(0);

    function onEdit(row: any) {
        setFormType('edit');
        setUserId(row.id);
        setValue('id', row.id)
        setValue('name', row.name)
        setValue('last_name', row.lastName)
        setValue('email', row.email)
        setValue('ramo', row.ramo_id)
        setValue('password', null)
        setValue('ramo_id', row.ramo_id)
        setValue('role_id', row.role_id)
        setValue('active', row.active ? 1 : 0)
    }

    function onChangeStatus(row: any) {
        setUserId(row.id);
        setValue('id', row.id)
        setValue('name', row.name)
        setValue('last_name', row.lastName)
        setValue('email', row.email)
        setValue('password', null)
        setValue('ramo', row.ramo_id)
        setValue('role_id', row.role_id)
        setValue('ramo_id', row.ramo_id)
        setValue('active', row.active ? 0 : 1)
        onChangeStatusSave(row.id);
    }

    const columns = [
        {
            name: 'Nombre Completo',
            selector: row => row.name + ' ' + row.lastName,
            width: '15%'
        },
        {
            name: 'Usuario',
            selector: row => row.email,
            width: '15%'
        },
        {
            name: 'Estatus',
            selector: row => <span className={`label ${row.active ? ' label-success' : 'label-danger'}`}> {row.active ? 'Activo' : 'Inactivo'}</span>,
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
            width: '15%'
        },
        {
           name: 'Acciones',
            selector: row => <div className="btn-toolbar">
                <button className="btn btn-primary btn-space btn-sm" onClick={() => onEdit(row)} data-toggle="modal" data-target="#myModal">Editar</button>
                <button className="btn btn-primary btn-space btn-sm" onClick={() => onChangeStatus(row)}>{row.active ? 'Desactivar' : 'Activar'}</button>
                <button className="btn btn-primary btn-space btn-sm" onClick={() => onEdit(row)} data-toggle="modal" data-target="#password">Cambiar Contraseña</button>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '30%'
        },

    ];

    const showSuccess = () => (
        success && <div className="alert alert-success" role="alert">Usuario guardado correctamente</div>
    )

    const showError = () => (
        error && <div className="alert alert-danger" role="alert">Error al guardar, intente más tarde.</div>
    )

    const onFilter = () => {
        const value = getValues('ramo_id_filter');
        let filterString = '';

        if (value && value !== 'Todos') {
            filterString += `${addPrefix(filterString)}ramo_id=${value}`;
        }

        defineUrl(filterString);
        setShowFilters(false);
    };

    const defineUrl = (query: string = '') => {
        setUrl(base + query);
    }

    function addPrefix(url: string) {
        if (!url.includes('?')) {
            return '?';
        }

        return '&';
    }

    const options = (values: any) => (
        values.map((obj) => {
                if (obj.idx === obj.name) {
                    return <option value={obj.idx}>{obj.name}</option>
                }
                return <option value={obj.idx}>{obj.idx} - {obj.name}</option>
            }
        )
    )

    const inputs = () => (
        data.map(function (item) {
            return <div className="form-group">
                <label htmlFor='ramo_id_filter' className="control-label">
                    {item.label}
                </label>
                <select {...register('ramo_id_filter')} className="form-control">
                    <option selected={true}>Todos</option>
                    { options(item.values) }
                </select>
            </div>
        })
    )

    const onSave = async () => {

        await axios.post(process.env.REACT_APP_API_URL + '/user', getValues(), {headers: authHeader()}).then(function (response) {
            if (response && response.status === 200) {
                setSuccess(true);
            }
        }).catch(function (error) {
            setError(true);
        });

    }

    const onChangeStatusSave = async (id: number) => {
        await axios.put(process.env.REACT_APP_API_URL + '/user/' + id, getValues(), {headers: authHeader()}).then(function (response) {
            if (response && response.status === 200) {
                setSuccess(true);
                setUrl(base + '?' + Math.floor(Math.random() * 10));
            }
        }).catch(function (error) {
            setError(true);
        });
    }

    const onEditSave = async () => {
        if (getValues('changePassword')) {
            setValue('password', getValues('changePassword'))
        }
        await axios.put(process.env.REACT_APP_API_URL + '/user/' + userId, getValues(), {headers: authHeader()}).then(function (response) {
            if (response && response.status === 200) {
                setSuccess(true);
                setUrl(base + '?' + Math.floor(Math.random() * 10));
                setValue('changePassword', null);
                setValue('password', null);
            }
        }).catch(function (error) {
            setError(true);
        });
    }

    const modalTitle = () => {
        if (formType === 'new') return 'Nuevo Usuario'
        if (formType === 'edit') return 'Editar Usuario'
    }

    const modalButton = () => {
        if (formType === 'new')
            return <button type="button" onClick={onSave} data-dismiss="modal" className="btn btn-primary">Guardar</button>
        if (formType === 'edit')
            return <button type="button" onClick={() => onEditSave()} data-dismiss="modal" className="btn btn-primary">Actualizar</button>
    }

    const passwordField = () => (
      formType !== 'edit' &&
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

        const responseFilters = await axios.get(process.env.REACT_APP_API_URL + '/admin/filtro/user', {headers: authHeader()});
        setData(responseFilters.data);
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
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" onClick={() => setShowFilters(!showFilters)}>
                            Filtros
                        </button>
                        <div className={`dropdown-menu ${showFilters ? ' static-filter' : ''}`}>
                            <form style={{padding: "1rem"}} className="center" >
                                {inputs()}
                                <button type="button" className="btn btn-primary" onClick={onFilter}>Aplicar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Table columns={columns} url={url} title={"Usuarios registrados"}/>
            </div>

            <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <form autoComplete="off">
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
                                {modalButton()}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="modal fade" id="password" role="dialog">
                <div className="modal-dialog" role="document">
                    <form >
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Cambiar Contraseña</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="hidden" className="form-control" {...register('id')} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="last_name" className="control-label">
                                            Nueva Contraseña
                                        </label>
                                        <input type="password" className="form-control" {...register('changePassword')} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                                {modalButton()}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default UserTable;
