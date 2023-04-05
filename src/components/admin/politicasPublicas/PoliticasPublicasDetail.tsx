import React from 'react';
import PoliticasPublicasValores from "./PoliticasPublicasValores";
import PoliticasPublicasNiveles from "./PoliticasPublicasNiveles";

function PoliticasPublicasDetail({id}: {
    id: string;
}) {

    return (
        <>
            <div className="row">
                <PoliticasPublicasValores values={'valores'}></PoliticasPublicasValores>
                <PoliticasPublicasNiveles politicaPublicaId={1}></PoliticasPublicasNiveles>
            </div>
        </>
    )
}

export default PoliticasPublicasDetail;