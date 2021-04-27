import './App.css';
import React, {useState} from "react";
import {ClickCounterNew} from "./components/ClickCounter";
import {ClickerF} from "./components/ClickerF";
import {ClickCounterF} from "./components/CounterFuncionalComponent";
import {TimerFunction} from "./components/TimerFunction";
import {UseRef1, WithRef} from "./components/Ref";
import {State} from "./components/State";
import {Context} from "./components/Context";
import {Books} from "./components/Books";
import {NewRef} from "./components/NewRef";
import {RefHook} from "./components/NewRefHook";

function App() {

    const [isClicker, setClicker] = useState(false)

    return (
        <div className="App">
            {/*<br/>*/}
            {/*<button onClick={ () => {setClicker(!isClicker)}}>Toggle clicker</button>*/}
            {/*<br/><br/>*/}
            {/*{isClicker && <ClickerF/>}*/}
            {/*<TimerFunction/>*/}
            <br/>
            {/*<State/>*/}
            {/*<Context>*/}
            {/*    <Books/>*/}
            {/*</Context>*/}
            {/*<NewRef/>*/}
            <RefHook/>
        </div>
    );
}

export default App;
