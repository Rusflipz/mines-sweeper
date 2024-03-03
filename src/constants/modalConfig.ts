import { closeModal } from '../store/slice/aplication-slice'
import { TModalConfig } from '../typings/modals'

export enum EModalTypes {
    /* Модалка выигрыша */
    GAME_WIN = 'GAME_WIN',
    /* Модалка паузы */
    GAME_PAUSE = 'GAME_PAUSE',
    /* Модалка проигрыша */
    GAME_OVER = 'GAME_OVER',
}

export const modalConfig = ({ dispatch, navigate, timerControl }): Record<EModalTypes, TModalConfig> => ({
    [EModalTypes.GAME_WIN]: {
        title: 'Поздравляем! Вы выиграли!',
        firstButton: {
            title: 'Начать сначала',
            onClick: () => window.location.reload(),
        },
        secondButton: {
            title: 'На главный экран',
            onClick: () => navigate('/'),
        },
    },
    [EModalTypes.GAME_PAUSE]: {
        title: 'Вы уверены, что хотите начать сначала?',
        firstButton: {
            title: 'Начать сначала',
            onClick: () => window.location.reload(),
        },
        secondButton: {
            title: 'Продолжить',
            onClick: () => {
                dispatch(closeModal())
                timerControl.startTimer()
            },
        },
    },
    [EModalTypes.GAME_OVER]: {
        title: 'Вы проиграли!',
        firstButton: {
            title: 'Начать сначала',
            onClick: () => window.location.reload(),
        },
        secondButton: {
            title: 'На главный экран',
            onClick: () => navigate('/'),
        },
    },
})