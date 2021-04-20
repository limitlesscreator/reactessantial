import React from "react";

export class ClickCounter extends React.Component {

    constructor() {
        super();
        this.state = {
            count : 0,
            comments: []
        }
        this.myRef = React.createRef();
    }

    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount
        })
    }

    addComment = () => {
        let comment = this.myRef.current.value
        let comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments: comments
        })
        this.myRef.current.value = ''
    }

    render() {

        return (
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>This button change state</button>
                </div>
                <div>{this.state.count}</div>
                <div>
                    <textarea ref={this.myRef}></textarea>
                </div>
                <div>
                    <button onClick={this.addComment}>Add comment </button>
                </div>
                <div>
                    <ul>
                        {this.state.comments.map((com,index) => <li key={index}>{com}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}
