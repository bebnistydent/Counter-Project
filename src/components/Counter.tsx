import React, { useState } from "react";
import { Button } from "./Button";

type counterPropsType = {
    startValue: number;
    maxValue: number;
    counter: number;
    setCounter: (value: number) => void
};


export const Counter = (props: counterPropsType) => {
    // let [counter, setCounter] = useState(props.startValue);
    // console.log(props.startValue, counter)

    const increnentCounter = () => {
        
       if(props.counter < props.maxValue) {
        props.setCounter(props.counter + 1);
       };
    };

    const resetCounter = () => {
        props.setCounter(props.startValue)
    }
    
    return (
        <div>
            <h1>Counter: {props.counter}</h1>
            <Button title = "More"
             onClickHandler={increnentCounter} 
             disabled = {props.counter >= props.maxValue} 
             />

            <Button title = "Less" 
            onClickHandler={resetCounter} 
            disabled = {props.counter === props.startValue} />    
        </div>
    )
    
};


