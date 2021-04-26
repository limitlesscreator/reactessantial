import React, {useState,useEffect} from "react";

export function State(){
    const [state,setState] = useState({
        count: 0,
        isCounting: false,
    })

    // const [value,setValue] = useState(() => {
    //     const userCount = localStorage.getItem('count')
    //     return +userCount || 0
    // })
    const handleCount = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }
    const handleStatus = () => {
        setState({
            ...state,
            isCounting: !state.isCounting
        })
    }

    useEffect( () => {
        console.log(state)
    },[state])



    return(
        <>
            <button onClick={handleCount}>Count</button>
            <button onClick={handleStatus}>me too</button>
        </>
    )
}
