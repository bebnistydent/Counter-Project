import React, { useState, } from "react";
import { Button } from "./Button";
import { Input } from "./Input";


type SetNumberPropsType = {
    onSetValues: (startValue: number, maxValue: number) => void;
    startValue: number;
    maxValue: number;
    setStartValue: (value: number) => void;
    setMaxValue: (value: number) => void;
}

type SumType = {
    a: number;
    b: number;
}

const sum = (props: SumType) => {
        return props.a + props.b;
}
sum({a:1, b:2})

export const SetNumber = (props: SetNumberPropsType) => {
    // const [startValue, setStartValue] = useState(0);
    // const [maxValue, setMaxValue] = useState(5);

    const onChangeStartHandler = (value: number) => {
        //setStartValue(value);
        props.setStartValue(value)
    };

    const onChangeMaxHandler = (value: number) => {
        //setMaxValue(value);
        props.setMaxValue(value);
        
    };


    const maxCounterInput = () => {
        //return startValue >= maxValue || maxValue < 0;
        return props.startValue >= props.maxValue || props.maxValue < 0;
    }

    const minCounterInput = () => {
        //return startValue >=maxValue || startValue < 0;
        return props.startValue >= props.maxValue || props.startValue < 0;
    }

    const setValueHandler = () => {
        props.onSetValues(props.startValue, props.maxValue);
    };

    return (
        <div className="SetMumberContainer">

            <div className="inputWrapper"> 
                <span>Max value:</span> 
                <Input className="Input"  
                       disabled = {maxCounterInput()} 
                       onChange={onChangeMaxHandler} 
                       value = {props.maxValue}/>
                </div>

            <div className="inputWrapper">
                <span> Start value: </span>
                <Input className="Input"  
                       disabled = {minCounterInput()} 
                       onChange={onChangeStartHandler} 
                       value = {props.startValue}/>
                </div>

                

            <Button title = "Set number"
             onClickHandler={setValueHandler} 
             disabled = {maxCounterInput() || minCounterInput()} 
             />
                
        </div>
    )
    
};


