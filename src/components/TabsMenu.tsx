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
                    <a>{ label }</a>
                </li>
      }
    }

    return (
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <>
            <nav>
                <ul className="nav nav-tabs tabs-left">
                    <li className={tag === 'identificacion' ? 'active' : ''}>
                        <a>IDENTIFICACIÓN DEL PROGRAMA PRESUPUESTARIO</a>
                    </li>
                    { activeModule('indicadores', tag, 'PNCC - INDICADORES')}
                    { activeModule('pecc', tag, 'PNCC - PECC')}
                    { activeModule('ndc', tag, 'PNCC - NDC')}
                    { activeModule('otros', tag, 'VINCULACIÓN CON OTROS INSTRUMENTOS RELEVANTES')}
                    { activeModule('pregunta', tag, 'VINCULACIÓN PP-PNCC')}
                    { activeModule('componente', tag, 'TIPO DE CONTRIBUCIÓN')}
                    { activeModule('cuantificacion', tag, 'CUANTIFICACIÓN')}

                </ul>
            </nav>
        </>


    );
}

export default TabsMenu
