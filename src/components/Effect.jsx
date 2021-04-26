import React, {useEffect} from "react";
import somePlugin from ''

export function Effect() {
    //what effect does
    useEffect(() => {
        const handler = () => {}
        document.addEventListener('click',handler)

        return () => {document.addEventListener('click',handler)}
    },[])

    useEffect(function initPlugin(){
        somePlugin.init();

        return () => {
            somePlugin.destroy()
        }
    },[])

    return (

        <>

        </>
    )
}
