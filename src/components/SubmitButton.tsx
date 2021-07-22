import React from "react";
import axios from "axios";

function SubmitButton({store}: {
    store: any;
}) {


     async function saveData(store){
         try {
             return await axios({
                url: `url/api/`,
                method: 'POST',
                data: store,
            });
        }catch(e){
            console.log(e);
        }
    }

    //const logger = () => console.log(store);

    return (
        <div className="form-group">
            <button className='btn btn-primary' onClick={() => saveData(store)}  >Enviar</button>
        </div>
    );

}

export default SubmitButton
