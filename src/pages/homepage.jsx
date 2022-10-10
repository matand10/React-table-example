import { ExpandableTable } from '../cmps/table'
import Mock_Data from '../cmps/data.json'
import { COLUMNS } from '../cmps/columns'
import { useEffect } from 'react'
import { loadItems } from '../store/item/item.action'
import { useDispatch, useSelector } from 'react-redux'


export const Homepage = () => {
    const { items } = useSelector((storeState) => storeState.itemModule)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadItems(Mock_Data))
    }, [])

    return (
        <section className="homepage main-layout">
            <ExpandableTable columns={COLUMNS} data={Mock_Data} />
        </section>
    )

}