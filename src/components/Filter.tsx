import React, {useEffect, useState} from 'react';
import axios from "axios";
import {authHeader} from "../helpers/AuthHeader";
import {useForm} from "react-hook-form";

const Filter = ({type, define }: {
    type:string;
    define: any;

}) => {

    const initial: any = [];
    const [data, setData] = useState(initial);
    const {register, getValues} = useForm();

    useEffect(() => {
        if (!data.length){
            loadData();
        }
    });

    const loadData = async () => {
        await axios.get(process.env.REACT_APP_API_URL + '/admin/filtro/' + type, {headers: authHeader()}).then(function (response) {
            setData(response.data);
        });
    }

    const onFilter = () => {
        const filter = getValues();
        let values: object = {};
        let filterString = '';
        let iterator = 0;

        for (let key in filter) {
            if (filter.hasOwnProperty(key)) {
                const value: string = filter[key];
                if (value) {
                    values[key] = value;
                    filterString += `${addPrefix(filterString)}[${iterator}]=${key},${value}`;
                    iterator++;
                }
            }
        }
        console.log(filterString);


    };

    function addPrefix(url: string) {
        if (!url.includes('?like=')) {
            return '?like=';
        }

        return '&like=';
    }

    const inputs = () => (
        data.map(function (item) {
            return <div className="col-md-12">
                <label htmlFor={item.field} className="control-label">
                    {item.label}
                </label>
                <input type="text" className="form-control" {...register(item.field)} />
            </div>
        })
    )


    const modal = () => (
        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <form >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Filtros</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {inputs()}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" onClick={onFilter} data-dismiss="modal" className="btn btn-primary">Filtrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )


    return (
        <div className="pull-right">
            <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Filtros
            </button>
            {modal()}
        </div>
    );
};

export default Filter;