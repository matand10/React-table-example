import { itemService } from '../../services/item.service'


export const loadItems = (items) => {
    return async (dispatch) => {
        try {
            // const items = await itemService.query()
            dispatch({ type: 'LOAD_ITEMS', items })
        } catch (err) {
            throw err
        }
    }
}


export const removeItem = (itemId) => {
    return async (dispatch) => {
        try {
            // await itemService.remove(itemId)
            dispatch({ type: 'REMOVE_ITEM', itemId })
        } catch (err) {
            throw err
        }
    }
}