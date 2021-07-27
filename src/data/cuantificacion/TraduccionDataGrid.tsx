import {GridLocaleText} from "@material-ui/data-grid";

export const GRID_LOCALE_TEXT: GridLocaleText = {
    // Root
    noRowsLabel: 'No hay renglones',
    noResultsOverlayLabel: 'No se encontraron resultados.',
    errorOverlayDefaultLabel: 'Ocurrió un error.',

    // Density selector toolbar button text
    toolbarDensity: 'Densidad',
    toolbarDensityLabel: 'Densidad',
    toolbarDensityCompact: 'Compacta',
    toolbarDensityStandard: 'Estandar',
    toolbarDensityComfortable: 'Confortable',

    // Columns selector toolbar button text
    toolbarColumns: 'Columnas',
    toolbarColumnsLabel: 'Seleccionar Columnas',

    // Filters toolbar button text
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} filtro activo` : `${count} filtros activos`,

    // Export selector toolbar button text
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Descargar como CSV',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Encontrar columna',
    columnsPanelTextFieldPlaceholder: 'Titulo',
    columnsPanelDragIconLabel: 'Reordenar columna',
    columnsPanelShowAllButton: 'Mostrar todo',
    columnsPanelHideAllButton: 'Ocultar todo',

    // Filter panel text
    filterPanelAddFilter: 'Agregar filtro',
    filterPanelDeleteIconLabel: 'Borrar',
    filterPanelOperators: 'Operadores',
    filterPanelOperatorAnd: 'And',
    filterPanelOperatorOr: 'Or',
    filterPanelColumns: 'Columnas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Filtrar valor',

    // Filter operators text
    filterOperatorContains: 'contiene',
    filterOperatorEquals: 'es igual',
    filterOperatorStartsWith: 'empieza con',
    filterOperatorEndsWith: 'termina con',
    filterOperatorIs: 'es',
    filterOperatorNot: 'no es',
    filterOperatorAfter: 'es despues',
    filterOperatorOnOrAfter: 'está en o después',
    filterOperatorBefore: 'es antes',
    filterOperatorOnOrBefore: 'está en o antes',
    filterOperatorIsEmpty: 'vacio',
    filterOperatorIsNotEmpty: 'no esta vacio',

    // Filter values text
    filterValueAny: 'any',
    filterValueTrue: 'true',
    filterValueFalse: 'false',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Mostrar columnas',
    columnMenuFilter: 'Filtro',
    columnMenuHideColumn: 'Ocultar',
    columnMenuUnsort: 'Desordenar',
    columnMenuSortAsc: 'Ordenar por ascendente',
    columnMenuSortDesc: 'Ordenar por descendente',

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} filtro activo` : `${count} filtros activos`,
    columnHeaderFiltersLabel: 'Mostrar filtros',
    columnHeaderSortIconLabel: 'Ordenar',

    // Rows selected footer text
    footerRowSelected: (count) =>
        count !== 1
            ? `${count.toLocaleString()} renglones seleccionados`
            : `${count.toLocaleString()} renglón seleccionado`,

    // Total rows footer text
    footerTotalRows: 'Renglones totales:',

    // Total visible rows footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
        `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: 'Checkbox',

    // Boolean cell text
    booleanCellTrueLabel: 'true',
    booleanCellFalseLabel: 'false',

    // Used core components translation keys
    MuiTablePagination: {},
};
