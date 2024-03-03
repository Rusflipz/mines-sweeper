import { createSlice } from '@reduxjs/toolkit'

import { EGameSettingsNames } from '../../constants/constants'
import { EModalTypes } from '../../constants/modalConfig'
import { TArray } from '../../typings/cells'
import { TInitialState } from '../../typings/store'

export const initialState: TInitialState = {
    array: [],
    isGameOver: false,
    isGameWin: false,
    isGameStopped: false,
    isFlagActive: false,
    isShovelActive: true,
    isModalOpen: false,
    minesLeft: 0,
    modalType: null,
    gameLevel: EGameSettingsNames.Easy,
}


export const aplicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setArray: (state: TInitialState, { payload }: { payload: TArray }) => {
            state.array = payload
        },
        setIsOpen: (state: TInitialState, { payload }: { payload: { row: number, col: number } }) => {
            state.array[payload.row][payload.col].isOpen = true
        },
        setIsGameOver: (state: TInitialState, { payload }) => {
            state.isGameOver = payload
            if (payload) state.modalType = EModalTypes.GAME_OVER
        },
        setIsGameWin: (state: TInitialState, { payload }) => {
            state.isGameWin = payload
            if (payload) state.modalType = EModalTypes.GAME_WIN
        },
        setFlagged: (state: TInitialState, { payload }) => {
            state.array[payload.row][payload.col].flagged = !state.array[payload.row][payload.col].flagged
        },
        setShovelActive: (state: TInitialState) => {
            state.isShovelActive = true
            state.isFlagActive = false
        },
        setFlagActive: (state: TInitialState) => {
            state.isShovelActive = false
            state.isFlagActive = true
        },
        setGameLevel: (state: TInitialState, { payload }) => {
            state.gameLevel = payload
        },
        setMinesLeft: (state: TInitialState, { payload }: { payload: number }) => {
            state.minesLeft = payload
        },
        setIsGameStopped: (state: TInitialState, { payload }: { payload: boolean }) => {
            state.isGameStopped = payload
            if (payload) state.modalType = EModalTypes.GAME_PAUSE
        },
        closeModal: (state: TInitialState) => {
            state.modalType = null
            state.isGameOver = false
            state.isGameStopped = false
            state.isGameWin = false
        },
    },
})

export const {
    setArray,
    setIsOpen,
    setIsGameOver,
    setFlagged,
    setShovelActive,
    setFlagActive,
    setIsGameWin,
    setGameLevel,
    setMinesLeft,
    setIsGameStopped,
    closeModal,
} = aplicationSlice.actions

export default aplicationSlice.reducer

export const arraySelector = (state: { application: TInitialState }) => state.application.array
export const isGameOverSelector = (state: { application: TInitialState }) => state.application.isGameOver
export const isGameWinSelector = (state: { application: TInitialState }) => state.application.isGameWin
export const isGameStoppedSelector = (state: { application: TInitialState }) => state.application.isGameStopped
export const isFlagActiveSelector = (state: { application: TInitialState }) => state.application.isFlagActive
export const isShovelActiveSelector = (state: { application: TInitialState }) => state.application.isShovelActive
export const gameLevelSelector = (state: { application: TInitialState }) => state.application.gameLevel
export const minesLeftSelector = (state: { application: TInitialState }) => state.application.minesLeft
export const isModalOpenSelector = (state: { application: TInitialState }) => state.application.isModalOpen
export const modalTypeSelector = (state: { application: TInitialState }) => state.application.modalType

