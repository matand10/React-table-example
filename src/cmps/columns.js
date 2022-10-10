export const COLUMNS = [
    {
        id: 'expander',
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
            <span {...getToggleAllRowsExpandedProps()}>
                {isAllRowsExpanded ? '👇' : '👉'}
            </span>
        ),
        Cell: ({ row }) =>
            row.canExpand ? (
                <span
                    {...row.getToggleRowExpandedProps({
                        style: {
                            paddingLeft: `${row.depth * 2}rem`,
                        },
                    })}
                >
                    {row.isExpanded ? '👇' : '👉'}
                </span>
            ) : null,
    },
    {
        Header: 'Name',
        columns: [
            {
                Header: 'Id',
                accessor: 'id'
            },
            {
                Header: 'First Name',
                accessor: 'first_name',
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
            }
        ],
    },
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]