import React from "react";
import {useHistory} from "react-router-dom";

function BotonSiguiente({store}: {
    store: any;
}) {
    let history = useHistory();

    const handleClick = () => {
        validate();
        history.push("/validacion");
        window.scrollTo(0,0);
    };

    const validate = () => {
        if (store.accionPutual || store.componenteMitigacion || store.actividadPuntual || store.pnccAdaptacion ||
            store.pnccMitigacion || store.pnccMitigacion2 || store.pnccMitigacion3 || store.pnccMitigacion4 ||
            store.pnccMitigacion5 || store.pnccMitigacion6 || store.pnccMitigacion7 || store.pnccMitigacion8) {
            store.validacionOds = true;
        }
    };


    return (
        <div className="form-group right">
            <button className='btn btn-primary pull-right' onClick={handleClick}>Siguiente</button>
        </div>
    )

}

export default BotonSiguiente
