import { TGameSettings } from '../typings/game'

export const constants = {
    1: 'blue',
    2: '#24a80f',
    3: 'red',
    4: '#0c0aa3',
    5: 'brown',
    6: '#30d5c8',
    7: 'black',
    8: 'white',
}

export enum EGameSettingsNames {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard',
}

export const gameSettings: Record<EGameSettingsNames, TGameSettings> = {
    [EGameSettingsNames.Easy]: {
        rows: 8,
        cols: 8,
        mines: 10,
    },
    [EGameSettingsNames.Medium]: {
        rows: 16,
        cols: 16,
        mines: 40,
    },
    [EGameSettingsNames.Hard]: {
        rows: 16,
        cols: 30,
        mines: 99,
    },
}