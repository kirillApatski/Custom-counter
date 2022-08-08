import React from 'react';
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";

import s from "./Counter.module.css"

type CounterPropsType = {
    displayValue: number
    incrementDisplayValue: () => void
    resetDisplayValue: () => void
    maxValue: number
    minValue: number
    displaySettings: boolean
    openDisplaySettings: ()=> void
    setSettingsValue: any
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display
                setMinValue={props.setMinValue}
                displaySettings={props.displaySettings}
                displayValue={props.displayValue}
                maxValue={props.maxValue}
                minValue={props.minValue}
                setMaxValue={props.setMaxValue}
            />
            <div className={s.containerBtn}>
                {props.displaySettings
                    ?<>
                        <Button name={"INC"}
                                callBack={props.incrementDisplayValue}
                                disabled={props.displayValue === props.maxValue}
                        />
                        <Button name={"Reset"}
                                callBack={props.resetDisplayValue}
                                disabled={props.displayValue === props.minValue}
                        />
                        <Button name={"Settings"} callBack={props.openDisplaySettings} disabled={false}/>
                    </>
                    : <Button name={"Set"} callBack={props.setSettingsValue} disabled={props.maxValue <= props.minValue}/>
                }

            </div>
        </div>
    );
};


