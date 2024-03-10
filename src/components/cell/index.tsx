import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import clsx from 'clsx'
// eslint-disable-next-line import/no-extraneous-dependencies
import useSound from 'use-sound'

import BombIcon from '../../assets/images/bomb.svg'
import FlagIcon from '../../assets/images/flag.svg'
import explosionSound from '../../assets/sounds/explosionSound.mp3'
import winSound from '../../assets/sounds/winSound.mp3'
import { constants } from '../../constants/constants'
import { useAppDispatch } from '../../hooks/use-app-dispatch'
import {
    arraySelector,
    isFlagActiveSelector,
    isShovelActiveSelector,
    setFlagged,
    setIsGameOver,
    setIsOpen,
} from '../../store/slice/aplication-slice'
import { TCellInfo } from '../../typings/cells'
import { checkWin } from '../../utils/checkWin'
import { nextTick } from '../../utils/nextTick'
import { openEmptyCell } from '../../utils/openEmptyCell'

import styles from './style.module.css'

/**
 * Выбираем содержимое для ячейки.
 */
const cellText = (cellInfo: TCellInfo): React.JSX.Element | string | number => {

    if (cellInfo.flagged) return <img src={FlagIcon} className={styles.flag_icon} alt="flag" />

    if (cellInfo.isOpen && cellInfo.mine) return <img src={BombIcon} className={styles.bomb_icon} alt="bomb" />

    if (cellInfo.isOpen && cellInfo.number !== 0) return cellInfo.number

    return ''
}

const Cell = ({ cellInfo }: { cellInfo: TCellInfo }) => {
    const dispatch = useAppDispatch()
    const array = useSelector(arraySelector)
    const isFlagActive = useSelector(isFlagActiveSelector)
    const isShovelActive = useSelector(isShovelActiveSelector)
    const [playExplosionSound] = useSound(explosionSound)
    const [playWinSound] = useSound(winSound)

    /**
     * Подвязываемся на событие открытия пустой ячейки, чтобы не делать сложный асинхронный алгоритм.
     */
    useEffect(() => {
        if (cellInfo.isOpen && cellInfo.number === 0) {
            openEmptyCell(array, cellInfo)
        }
    }, [cellInfo])

    const handleClick = () => {
        if (isShovelActive && !cellInfo.flagged) {
            dispatch(setIsOpen(cellInfo))

            if (cellInfo.number === 0) {
                openEmptyCell(array, cellInfo)
            }

            if (cellInfo.mine === true) {
                playExplosionSound()
                dispatch(setIsGameOver(true))
            }
        }

        if (isFlagActive && !cellInfo.isOpen) {
            dispatch(setFlagged(cellInfo))
        }

        nextTick(() => checkWin(playWinSound))
    }

    const blockStyle = (): Record<string, string> => {
        const backgroundColor = cellInfo.isOpen && cellInfo.mine ? 'red' : 'rgb(186, 186, 186)'
        const borderWidth = '2px'
        const borderColor = cellInfo.isOpen ? 'rgb(144, 144, 144)' : '#f7f7f7 #7c7c7c #7c7c7c #f7f7f7'

        return {
            fontWeight: 'bold',
            fontSize: '16px',
            color: cellInfo.mine ? 'black' : constants[cellInfo.number],
            backgroundColor,
            borderColor,
            borderWidth,
        }
    }

    return <div
        style={blockStyle()}
        className={clsx(styles.cell)}
        onClick={handleClick}
    >
        {cellText(cellInfo)}
    </div>
}

export default Cell