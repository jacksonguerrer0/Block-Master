import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import AddFilm from './AddFilm';

const TableAdmin = ({data, columns}) => {
    const { SearchBar } = Search;

    return (
        <ToolkitProvider 
            bootstrap4 
            keyField="id"
            data={ data }
            columns={ columns }
            search
        >
            {
                props =>          
                <>
                <SearchBar 
                    { ...props.searchProps }
                    placeholder="Buscar algo"
                 style={{marginRight: '1rem'}}/>
                <AddFilm />
                <BootstrapTable
                    { ...props.baseProps }
                    pagination={ paginationFactory() }
                    // cellSpacing="0"
                    wrapperClasses="table-responsive"
                    classes="table-striped table-hover "
                    noDataIndication='La tabla está vacia :('
                    // selectRow={ { mode: 'checkbox' } }
                />
                </>
            }
            
        </ToolkitProvider>
    )
}


export default TableAdmin
