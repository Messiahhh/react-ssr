import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import { routes } from '../router/config'
import withStyles from 'isomorphic-style-loader/withStyles'
// import useStyles from 'isomorphic-style-loader/useStyles'

import styles from './test.module.css'
console.log(styles.Root);
console.log(styles.Title);
class App extends React.Component {
    render() {
        return (
            <>
            <div className={styles.Root}>样式问题</div>
            <div className={styles.Title}>测试</div>
            <Switch>
                {
                    routes.map(route => {
                        return <Route  {...route}></Route> 
                    })
                }
            </Switch>
        </>
        )
    }
}

export default withStyles(styles)(App)

// function App() {
//     useStyles(style)
//     return (
//         <>
//             <div className={style.root}>样式问题</div>
//             <Switch>
//                 {
//                     routes.map(route => {
//                         return <Route  {...route}></Route> 
//                     })
//                 }
//             </Switch>
//         </>
//     )
// }

// export default App

