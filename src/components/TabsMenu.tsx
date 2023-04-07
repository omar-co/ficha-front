import React, {useState} from "react";


function TabsMenu({tag, modules}: {
    tag: any;
    modules?: any;
}) {

    // @ts-ignore
    const [activeModules] = useState(JSON.parse(localStorage.getItem('nav')) ?? []);

    const activeModule = (item: string, tag: string, label: string) => {
      if (activeModules.find(({value}) => value === item)) {
          return <li className={tag === item ? 'active' : ''}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"/" + item} >{ label }</a>
                </li>
      }
    }

    return (
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <>
            <nav>
                <ul className="nav nav-tabs tabs-left">
                    <li className={tag === 'identificacion' ? 'active' : ''}>
                        <a href={'/identificacion'}>IDENTIFICACIÓN DEL PROGRAMA PRESUPUESTARIO</a>
                    </li>
                    { activeModule('pecc', tag, 'VINCULACIÓN CON LA POLÍTICA NACIONAL DE MEDIO AMBIENTE')}
                    { activeModule('pnh', tag, 'VINCULACIÓN CON EL PROGRMAMA NACIONAL HÍDRICO')}
                    { activeModule('enbio', tag, 'VINCULACIÓN CON LA ESTRATEGIA NACIONAL SOBRE BIODIVERSIDAD')}
                    { activeModule('enac', tag, 'VINCULACIÓN CON LA ESTRATEGIA NACIONAL PARA LA CALIDAD DEL AIRE')}
                    { activeModule('otros', tag, 'VINCULACIÓN CON OTROS INSTRUMENTOS RELEVANTES')}
                    { activeModule('pregunta', tag, 'CONTRIBUCIÓN PP-PV')}
                    { activeModule('cuantificacion', tag, 'CUANTIFICACIÓN')}
                    { activeModule('clasificacion', tag, 'CLASIFICACIÓN')}

                </ul>
            </nav>

            <div className="row" style={{ marginTop: "40px" }}>
                <button className="btn btn-danger btn-sm btn-block">Manual de usuario sobre el <br/> Presupuesto Verde</button>
                <button className="btn btn-danger btn-sm btn-block">Guía metodológica sobre el <br/> Presupuesto  Verde</button>
                <button className="btn btn-danger btn-sm btn-block">Material de capacitación <br/> sobre el Presupuesto Verde</button>
            </div>

        </>


    );
}

export default TabsMenu
