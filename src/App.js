import './App.css';
import React from "react";
import {ClickCounter} from "./components/CounterClassComponent";
import {ClickCounterF} from "./components/CounterFuncionalComponent";


function App() {
    return (
        <div className="App">
            <div>Class Component</div>
            <ClickCounter/>
            <hr/>
            <div>Functional Component</div>
            <ClickCounterF/>
        </div>
    );
}

export default App;
