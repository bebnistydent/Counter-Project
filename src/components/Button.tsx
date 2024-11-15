import React from "react";

type buttonPropsType = {
    title: string
    onClickHandler: ()=> void
    disabled: boolean
}

export const Button = (props: buttonPropsType) => {
    
    return (
    <button onClick={()=>props.onClickHandler()} 
            disabled = {props.disabled}>{props.title}</button>
)};