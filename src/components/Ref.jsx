import React, {useRef, useEffect, useState} from "react";


export const WithRef = () => {
    // const  inputIl = useRef(null)
    // console.log(inputIl)
    const numRef = useRef(0)
    const [count, setCount] = useState(0)


    const handleClick = () => {
        // numRef.current = 1
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }
    //
    // useEffect( () => {
    //     console.log(numRef.current)
    // })

    return (
        <div>
            {/*<input placeholder={'name'} ref={inputIl}/>*/}
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}

export function UseRef1() {
    const [counter, setCounter] = useState(0)
    const ref = useRef()

    useEffect(() => {
        ref.current = 0
    }, [])

    return (
        <div>
            <div>{ref.current}</div>
            <div>
                <button onClick={() => {
                    ref.current++
                }}>Add number
                </button>
            </div>
            <div>
                <button onClick={() => {
                    setCounter(ref.current)
                }}>Render
                </button>
            </div>

        </div>
    )
}





