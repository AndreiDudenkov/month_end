import React, {useState} from 'react';
type SuperButtonType={
    name: string
    callback: ()=>void
    disabled?: boolean
}


export const SuperButton = (props:SuperButtonType) =>{
    const onClickHandler = () => {
    props.callback()
    }

    return(
        <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
    )
}