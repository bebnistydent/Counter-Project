import React, { useState } from "react";
import { Button } from "./Button";




export const Counter = () => {
    let [counter, setCounter] = useState(0);

    const increnentCounter = () => {
        //debugger
       if(counter < 5) {
        setCounter(++counter)
       };
    };

    const decrementCounter = () => {
        setCounter(0)
    }
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button title = {"More"} onClickHandler={increnentCounter} disabled = {counter >= 5} />
            <Button title = {"Less"} onClickHandler={decrementCounter} disabled = {counter === 0} />    
        </div>
    )
    
};


