import React, {useEffect, useState} from 'react';
import FiltroTabla from "./FiltroTabla";
import axios from "axios";

function FiltroModal( {store}: {
    store: any,
}){

    const initial: any[] = [];
    const [data, setData] = useState(initial);


    useEffect(() => {
        const getFilterData = () => {
            if(store.ramo && store.programa && store.modalidad){
                const url = '/relacion-economica/' + store.ramo + '/' + store.programa + '/' + (!store.directamente) + '/' + store.modalidad;
                axios.get(process.env.REACT_APP_API_URL + url).then(
                    (response) => {
                        setData(response.data)
                    }
                )
            }
        };
        getFilterData();
    }, [store.ramo, store.programa, store.directamente, store.modalidad]);


    return(
        <div className="text-center">
            <FiltroTabla store={data} mainStore={store}/>
        </div>
    )

}

export default FiltroModal
