import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Mock_Data from '../cmps/data.json'


export const ItemDetails = (props) => {
    const { } = props
    const { id } = useParams()
    const [row, setRow] = useState(null)
    const [subRow, setSubRow] = useState(null)

    useEffect(() => {
        const [rowRes, noSubRows] = loadRow()
        setRow(rowRes)
        setSubRow(noSubRows[0])
    }, [])

    const loadRow = () => {
        let rowRes = Mock_Data.find(item => item.id === Number(id))
        if (!rowRes) return
        rowRes = { ...rowRes }
        const subRow = Object.values(rowRes).filter(item => typeof item === 'object')
        delete rowRes.subRows
        return [rowRes, subRow]
    }

    if (!row) return <div>Loading...</div>
    return (
        <section className="row_details_container main-layout">
            {Object.values(row).map((value, idx) => {
                return (
                    <div className="" key={idx}>
                        <h2>{value}</h2>
                    </div>
                )
            })}
        </section>
    )
}