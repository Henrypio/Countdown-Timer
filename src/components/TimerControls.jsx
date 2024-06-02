import React from 'react';

const TimerControls = ({ isRunning, start, pause, reset }) => {
    return (
        <div className='timer-controls'>
            {isRunning ? (
                <button onClick={pause}>Pause</button>
            ) : (
                <button onClick={start}>Start</button>
            )}
                <button onClick={reset}>Reset</button>
        </div>
    );
}

export default TimerControls;