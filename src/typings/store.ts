import { EGameSettingsNames } from '../constants/constants'
import { EModalTypes } from '../constants/modalConfig'
import { store } from '../store'

import { TArray } from './cells'

type TStore = typeof store;

export type TDispatch = TStore['dispatch'];


export type TInitialState = {
    array: TArray;
    isGameOver: boolean;
    isGameWin: boolean
    isGameStopped: boolean
    isFlagActive: boolean
    isShovelActive: boolean;
    isModalOpen: boolean;
    minesLeft: number
    gameLevel: EGameSettingsNames
    modalType: EModalTypes
    isFirstClick: boolean;
}