import React from "react";
import { useNavigate } from "react-router-dom";

import { useTable, useExpanded } from 'react-table'
import './table.scss'


const Table = ({ columns, data }) => {

    const navigate = useNavigate()

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useExpanded
    )

    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td onClick={() => {
                                        if (cell.column.id !== 'expander') return navigate(`details/${data[Number(row.id)].id}`)
                                    }}
                                        {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export const ExpandableTable = (props) => {
    const columns = React.useMemo(() => props.columns, [])
    const { data } = props

    return (
        <Table columns={columns} data={data} />
    )
}