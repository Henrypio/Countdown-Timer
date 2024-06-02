import {useState}from 'react';

const TimerDisplay = ({ time }) => {
    return (
        <div className='timer-display'>
            <h1>{time} secs</h1>
        </div>
    );
}

export default TimerDisplay;