import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {authHeader} from "../../../helpers/AuthHeader";

function PoliticasPublicasNiveles({politicaPublicaId}: { politicaPublicaId: any }) {
    const [url] = useState(process.env.REACT_APP_API_URL + '/admin/politicas-publicas/niveles/1');
    const [data, setData] = useState([]);

    const fetchData = useCallback(async page => {

        const response = await axios.get(`${url}`, {headers: authHeader()});

        setData(response.data.data);
    }, [url]);

    useEffect(() => {
        fetchData(1);
        // eslint-disable-next-line array-callback-return
        data.map((item: any) => {
            console.log(item)
        });

    }, [fetchData, data]);


    return (
        <>
            <div className="col-md-6">
                <h3>Niveles</h3>
                <button className="btn btn-primary pull-right">Agregar Nivel</button>
            </div>
        </>
    )
}

export default PoliticasPublicasNiveles;