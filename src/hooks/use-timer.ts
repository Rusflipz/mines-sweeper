import { useState } from 'react'

export type TUseTimer = {
    timer: number,
    startTimer: () => void,
    pauseTimer: () => void,
    resetTimer: () => void
}
export const useTimer = (): TUseTimer => {
    const [timer, setTimer] = useState(0)
    const [timeInterval, setTimeInterval] = useState(null)

    const startTimer = () => {
        setTimeInterval(setInterval(() => {
            setTimer((prevState) => prevState + 1)
        }, 1000))
    }

    const pauseTimer = () => {
        clearInterval(timeInterval)
    }

    const resetTimer = () => {
        setTimer(0)
        clearInterval(timeInterval)
    }

    return { timer, startTimer, pauseTimer, resetTimer }
}