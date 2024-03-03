import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import clsx from 'clsx'

import FlagIcon from '../../assets/images/flag.svg'
import HomeIcon from '../../assets/images/home.svg'
import ShovelIcon from '../../assets/images/shovel.svg'
import SmileIcon from '../../assets/images/smile.svg'
import Cell from '../../components/cell'
import CounterPlate from '../../components/counter-plate'
import Modals from '../../components/modals'
import { useAppDispatch } from '../../hooks/use-app-dispatch'
import { useTimer } from '../../hooks/use-timer'
import {
    arraySelector,
    closeModal,
    gameLevelSelector,
    isFlagActiveSelector,
    isShovelActiveSelector,
    minesLeftSelector,
    setFlagActive,
    setIsGameStopped,
    setShovelActive,
} from '../../store/slice/aplication-slice'
import { TCellInfo } from '../../typings/cells'
import { startGame } from '../../utils/startGame'

import styles from './style.module.css'

const GamePage = () => {
    const dispatch = useAppDispatch()
    const array = useSelector(arraySelector)
    const isFlagActive = useSelector(isFlagActiveSelector)
    const isShovelActive = useSelector(isShovelActiveSelector)
    const gameLevel = useSelector(gameLevelSelector)
    const minesLeft = useSelector(minesLeftSelector)

    const timerControl = useTimer()

    const navigate = useNavigate()

    const ref = useRef(true)

    useEffect(() => {
        if (ref.current) {
            startGame(ref.current, timerControl)
        }
        closeModal()

        return () => {
            ref.current = false
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('gameLevel', gameLevel)
    }, [gameLevel])

    return (<>
            <div className={styles.game_page}>
                <div className={styles.game_container}>
                    <div className={styles.game_info_container}>
                        <div className={clsx(styles.game_info, styles[gameLevel])}>
                            <CounterPlate label="Мины" value={minesLeft} />
                            <div className={styles.game_info_smile_conteiner}
                                 onClick={() => dispatch(setIsGameStopped(true))}>
                                <img src={SmileIcon} className={styles.game_info_smile} alt="smile" />
                            </div>
                            <CounterPlate label="Время" value={timerControl.timer} />
                        </div>
                    </div>
                    {array.map((row: Array<TCellInfo>, index: number) =>
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index} className={styles.row}>{row.map((cell: TCellInfo) =>
                            <Cell key={`${cell.row}-${cell.col}`} cellInfo={cell} />,
                        )}
                        </div>)}
                </div>
                <div className={styles.game_controls}>
                    <div className={clsx(styles.control_button)}
                         onClick={() => navigate('/')}>
                        <img src={HomeIcon} className={styles.bomb_icon} alt="home" />
                    </div>
                    <div className={clsx(styles.control_button, isShovelActive && styles.control_button_active)}
                         onClick={() => dispatch(setShovelActive())}>
                        <img src={ShovelIcon} className={styles.bomb_icon} alt="shovel" />
                    </div>
                    <div className={clsx(styles.control_button, isFlagActive && styles.control_button_active)}
                         onClick={() => dispatch(setFlagActive())}>
                        <img src={FlagIcon} className={styles.bomb_icon} alt="flag" />
                    </div>
                </div>
            </div>
            <Modals timerControl={timerControl} />
        </>
    )
}

export default GamePage