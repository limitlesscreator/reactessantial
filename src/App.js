import './App.css';
import React, {useState} from "react";
import {ClickCounterNew} from "./components/ClickCounter";
import {ClickerF} from "./components/ClickerF";
import {ClickCounterF} from "./components/CounterFuncionalComponent";
import {TimerFunction} from "./components/TimerFunction";
import {WithRef} from "./components/Ref";


function App() {

    const [isClicker, setClicker] = useState(false)

    return (
        <div className="App">
            <br/>
            <button onClick={ () => {setClicker(!isClicker)}}>Toggle clicker</button>
            <br/><br/>
            {isClicker && <ClickerF/>}
            {/*<><WithRef/></>*/}
        </div>
    );
}

export default App;
