import Contain from '../components/contain'
import { load } from '../api'

export const routes = [
    {
        path: '/',
        key: 'home',
        component: Contain,
        loadData: load,
    }
]