import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    
    constructor () {
        super()
        this.state = { 
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounterTwo
