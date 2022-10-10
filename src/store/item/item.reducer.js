const initialState = {
    items: [],
}

export function itemReducer(state = initialState, action) {
    let items

    switch (action.type) {
        case 'LOAD_ITEMS':
            return { ...state, items: action.items }
        case 'REMOVE_ITEM':
            items = state.items.filter(item => item.id !== action.itemId)
            return { ...state, items }

        default:
            return state
    }
}
