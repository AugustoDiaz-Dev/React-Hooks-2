import React, { Component } from 'react'

class Ref2ClassTimer extends Component {

    interval;
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h2>Class Component Timer</h2>

                <p>Class Timer: {this.state.timer}</p>
                <button onClick={() => clearInterval(this.interval)}>Stop Timer</button>

                <hr />
            </div>
        )
    }
}

export default Ref2ClassTimer