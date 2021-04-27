import React, {useState,useRef, useEffect} from "react";

export function NewRef(){

    const inputRef = useRef(null)
    const setFocus = () => {
        inputRef.current?.focus();
    }
    const counter = useRef(0)

    useEffect( () => {
        console.log(inputRef)
    })

    const onClick = () => {
        counter.current += 1
        console.log(`Clicks: ${counter.current}`)
    }

    return(
        <>
            <input type="text" ref={inputRef} onKeyPress={ (e) => {if (e.charCode === 13) {setFocus()}}}/> <br/>
            <input type="text" ref={inputRef}/><br/>
            <button onClick={setFocus}>Focus</button>
            <button onClick={onClick}>+1</button>
        </>
    )
}
