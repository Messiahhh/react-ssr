import React from 'react'
export default class App extends React.Component {
    state = {
        count: 0,
    }

    handleClick = () => {
        console.log(233);
        this.setState((state) => ({
            count: state.count+1
        }))
    }

    render() {
        return (
            <div>
                <div>hello akara</div>
                <button onClick={this.handleClick}>点我</button>
            </div>
        )
    }
}