import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownProviderProps{
  children: ReactNode;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}
let countdownTimeOut: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children} : CountdownProviderProps){
  const { startNewChallenge } = useContext(ChallengesContext);
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      startNewChallenge();
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}