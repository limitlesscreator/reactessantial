import React from "react";
import {useState} from 'react'


export function ClickCounterF() {

    const [count, setCount] = useState(0)
    let [commment,setComment] = useState([])
    let myRef = React.createRef();

    let inc = () => {
        let value = count
        value++
        setCount(value)
    }

    let comm = () => {
        let commentValue = myRef.current.value
        let commentariy = [...commment,commentValue]
        setComment(commentariy)
        myRef.current.value = ''
    }



    return (
        <div>
            <div>
                <button onClick={() => {
                    inc()
                }}>Inc
                </button>
            </div>
            <div>{count}</div>
            <div><textarea ref={myRef}/></div>
            <button onClick={ () => {comm()}}>add comment</button>
            <div>{commment.map((com,index) => <li key={index}>{com}</li>)}</div>
        </div>
    )
}