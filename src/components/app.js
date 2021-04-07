import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
    const [count, setCount] = useState(0)
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()
    return (
        <div>
            <div>hello {name}</div>
            <button onClick={() => {
                dispatch({
                    type: 'CHANGE_NAME',
                    payload: 'ccccc'
                })
            }}>点我</button>
        </div>
    )

}
// export default class App extends React.Component {
//     state = {
//         count: 0,
//     }

//     handleClick = () => {
//         console.log(233);
//         this.setState((state) => ({
//             count: state.count+1
//         }))
//     }

//     render() {
//         return (
//             <div>
//                 <div>hello akara</div>
//                 <button onClick={this.handleClick}>点我</button>
//             </div>
//         )
//     }
// }