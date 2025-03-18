import React, {ChangeEvent, useState } from "react";


export type InputPropsType = {
    className?: string;
    disabled?: boolean;
    value: number 
    onChange: (value: number) => void
}




export const Input = (props: InputPropsType) => {

    

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value) || 0;
        props.onChange(currentValue)
        }
    
    return (<input
         type="number"
         disabled = {props.disabled}
         value = {props.value}
         onChange={onChangeInputHandler}
         className={props.className}
         />)
}