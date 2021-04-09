import Contain from '../components/contain'
import Signup from '../components/signup'
import Fallback from '../components/fallback'
import { load } from '../api'

export const routes = [
    {
        path: '/',
        key: 'home',
        component: Contain,
        loadData: load,
        exact: true,
    },
    {
        path: '/signup',
        key: 'signup',
        component: Signup
    },
    {
        path: '*', // fallback
        key: 'fallback',
        component: Fallback
    }
]