import React, {useRef,useEffect,useState} from "react";


export const WithRef = () => {
    // const  inputIl = useRef(null)
    // console.log(inputIl)
    const numRef = useRef(0)
    const [count, setCount] = useState(0)

   let handleClick = () => {
        // numRef.current = 1
       setCount(count + 1)
        // setCount((prevCount) => prevCount + 1)
    }

    // useEffect( () => {
    //     console.log(numRef.current)
    // })
    return (
        <div>
            {/*<input placeholder={'name'} ref={inputIl}/>*/}
            <button onClick={ handleClick }>{count}</button>
        </div>
    )
}