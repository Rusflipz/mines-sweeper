import { TGameConfig } from '../typings/game'

import { EGameSettingsNames } from './constants'

export const gameConfig: Record<EGameSettingsNames, TGameConfig> = {
    [EGameSettingsNames.Easy]: {
        title: 'Легкий',
        description: 'Поле 9x9',
    },
    [EGameSettingsNames.Medium]: {
        title: 'Средний',
        description: 'Поле 16x16',
    },
    [EGameSettingsNames.Hard]: {
        title: 'Сложный',
        description: 'Поле 16x30',
    },
}