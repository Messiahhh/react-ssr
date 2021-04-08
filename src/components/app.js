import React from 'react'
import {
    Link,
    Switch,
    Route,
} from 'react-router-dom'
import Contain from './contain'
import { routes } from '../router/config'

export default function App() {
    return (
        <Switch>
            {routes.map(route => (
                <Route {...route} /> // 只渲染了空div？
            ))}
        </Switch>
    )
}

