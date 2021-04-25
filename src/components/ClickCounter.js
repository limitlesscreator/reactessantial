import React from "react";


export class ClickCounterNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    inc = (e) => {
        console.log(e)
        let value = this.state.count;
        value++
        this.setState({
            count: value
        })
    }

    

    render() {
        return (
            <div>
                <div>Value : {this.state.count}</div>
                <div>
                    <button onClick={this.inc}>Inc</button>
                </div>
            </div>
        )

    }
}
