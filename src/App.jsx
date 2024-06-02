import { useState, useEffect} from 'react'
import './App.css'
import TimerControls from './components/TimerControls'
import TimerDisplay from './components/TimerDisplay'
import TimerInput from './components/TimerInput'

function App() {
      const [time, setTime] = useState(0);
      const [isRunning, setIsRunning] = useState(false);
      const [ secs, setSecs ] = useState(0);

      useEffect(() => {
         let intervalId;
         if(isRunning && time > 0) {
            intervalId = setInterval(() => {
               setTime((prevTime) => prevTime - 1);
            }, 1000);
         }else if(isRunning && time !== 0) {
          clearInterval(intervalId);
      }else if(time === 0) {
          setIsRunning(false);
          clearInterval (intervalId);
      }
      return () => clearInterval(intervalId);
      }, [isRunning, time]);

      const start = () => {
          setIsRunning(true);
      };
      const pause = () => {
          setIsRunning(false);
      };
      const reset = () => {
          setTime(0);
          setIsRunning(secs);
      };
      const handleSetTime = (newSecs) => {
          setSecs(newSecs);
          setTime(newSecs);
      };
      return(
        <div className='app'>
          <h1>COUNTDOWN TIMER</h1>
          <TimerControls isRunning={isRunning} start={start} pause={pause} reset={reset} />
          <TimerDisplay time={time} />
          <TimerInput setTime={handleSetTime} />
          </div>
      )
}

export default App
