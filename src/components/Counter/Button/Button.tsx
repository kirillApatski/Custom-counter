import React from 'react';
import s from "./Buttons.module.css"

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean

}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.btn} onClick={props.callBack} disabled={props.disabled}>{props.name}</button>
    );
};

