import React, {ChangeEvent} from 'react';
import s from "./Display.module.css"

type DisplayPropsType = {
    displayValue: number
    maxValue: number
    minValue: number
    displaySettings: boolean
    setMaxValue:(value: number) => void
    setMinValue:(value: number) => void
}

export const Display = (props: DisplayPropsType) => {
    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.setMaxValue(value)
    }
    const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.setMinValue(value)
    }
    let inputErrorClass = props.maxValue <= props.minValue ? `${s.input} ${s.error}` : s.input
    return (
        <div className={props.displayValue !== props.maxValue ? s.display : `${s.display} ${s.stop}`}>
            {props.displaySettings
                ? props.displayValue
                : <>
                    <input className={inputErrorClass}
                           onChange={onChangeHandlerMaxValue}
                           value={props.maxValue}
                           type="number"
                           placeholder={"max value"}/>
                    <input className={inputErrorClass}
                           onChange={onChangeHandlerMinValue}
                           value={props.minValue}
                           type="number"
                           placeholder={"min value"}
                    />
                </>
            }
        </div>
    );
};

