import React, {useState, useEffect, useRef} from "react";

function setDefaultValue(){
    const userCount = localStorage.getItem('count')
    return userCount ? +userCount : 0
}

export function TimerFunction() {

    let [count, setCount] = useState(setDefaultValue)
    const [isCounting, setIsCount] = useState(false)
    const timerIdRef = useRef(null)

    const handleReset = () => {
        setCount(0)
        setIsCount(false)
    }

    const handleStart = () => {
        setIsCount(true)
    }

    const handleStop = () => {
        setIsCount(false)
    }

    useEffect(() => {
        localStorage.setItem('count',count)
    }, [count])

    useEffect( () => {
       if (isCounting) {
               timerIdRef.current = setInterval(() => {
               setCount((prevCount) => prevCount + 1)
           }, 1000);
       }

        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current)
            timerIdRef.current = null
        }
    }, [isCounting])


    return (
        <>
            <div>Time : {count}</div>
            <br/>
            {isCounting ? <button onClick={handleStop}>stop</button> : <button onClick={handleStart}>start</button>}

            <button onClick={handleReset}>reset</button>
        </>
    )
}