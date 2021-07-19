import React from "react";

function SubmitButton({store}: {
    store: any;
}) {

    const logger = () => console.log(store);

    return (
        <div className="form-group">
            <button className='btn btn-primary' onClick={logger} disabled >Descargar Excel</button>
        </div>
    );

}

export default SubmitButton
