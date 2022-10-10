import { Homepage } from './pages/homepage.jsx'
import { ItemDetails } from './pages/item-details.jsx'

export const routes = [
    {
        path: '/',
        component: Homepage,
    },
    {
        path: '/details/:id',
        component: ItemDetails,
    }
]