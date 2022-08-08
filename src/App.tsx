import React, {useState} from 'react';
import {Counter} from "./components/Counter/Counter";
import  "./App.css"
function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5);
    const [displayValue, setDisplayValue] = useState(minValue)
    const [displaySettings, setDisplaySettings] = useState(true)

    const incrementDisplayValue = () => {
        if (displayValue < maxValue) {
            setDisplayValue(displayValue + 1)
        }
    }
    const resetDisplayValue = () => {
        setDisplayValue(minValue)
    }
    const openDisplaySettings = () => {
        setDisplaySettings(!displaySettings)
    }
    const setSettingsValue = () => {
        setDisplayValue(minValue)
        setDisplaySettings(!displaySettings)
    }
    return (
        <div className="counterWrapper">
            <Counter
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                displayValue={displayValue}
                maxValue={maxValue}
                minValue={minValue}
                incrementDisplayValue={incrementDisplayValue}
                resetDisplayValue={resetDisplayValue}
                openDisplaySettings={openDisplaySettings}
                setSettingsValue={setSettingsValue}
                displaySettings={displaySettings}
            />
        </div>
    );
}

export default App;
