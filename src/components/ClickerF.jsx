import React, {useState, useEffect} from "react";

export function ClickerF () {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount ( count -1)
    }

    useEffect( () => {
        console.log('hello from clicker' , count)

        return () => {console.log('goodbye clicker')}
    }, [count])

    return (
        <>
            <button onClick={() => {increment()}}>+</button>
            <span>{count}</span>
            <button onClick={() => {decrement()}}>-</button>
        </>
    )
}