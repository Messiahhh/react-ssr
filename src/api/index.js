import { loadData } from '../redux/action'

export const load = (store) => {
    return store.dispatch(loadData())
}