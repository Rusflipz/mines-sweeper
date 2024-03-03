import { gameSettings } from '../constants/constants'
import { TUseTimer } from '../hooks/use-timer'
import { store } from '../store'
import { closeModal, setGameLevel } from '../store/slice/aplication-slice'

import { initGame } from './initGame'

export const startGame = (isFirsRender: boolean, timerControl: TUseTimer) => {
    const reduxState = store.getState()

    const isGameLevelInStorage = window.localStorage.getItem('gameLevel')
    const { gameLevel } = reduxState.application

    const currentGameLevel = isGameLevelInStorage || gameLevel

    // Костыль для избежания двойного вызова функций в StrictMode в dev режиме.
    if (isFirsRender) {
        timerControl.startTimer()
        initGame(gameSettings[currentGameLevel])
        store.dispatch(setGameLevel(currentGameLevel))
    }

    store.dispatch(closeModal())
}