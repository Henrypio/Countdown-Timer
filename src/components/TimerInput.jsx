import React, {useState} from 'react';

const TimerInput = ({ setTime }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const seconds = parseInt(inputValue, 10);
        if(!isNaN(seconds)) {
        setTime(seconds);
        setInputValue("");
    }
}
 return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter time in seconds"
            />
            <button type="submit">Set Timer</button>
        </form>
 )}

export default TimerInput;