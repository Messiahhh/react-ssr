import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import { routes } from '../router/config'

export default function App() {
    const el = routes.map(route => {
        return <Route  {...route}></Route> 
    })

    return (
        <Switch>
            {el}
        </Switch>
    )
}

