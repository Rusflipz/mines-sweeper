import React from 'react'
import { useNavigate } from 'react-router-dom'

import { EGameSettingsNames } from '../../constants/constants'
import { gameConfig } from '../../constants/gameConfig'
import { useAppDispatch } from '../../hooks/use-app-dispatch'
import { setGameLevel } from '../../store/slice/aplication-slice'

import styles from './style.module.css'

const Level = ({ gameLevel }: { gameLevel: EGameSettingsNames }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(setGameLevel(gameLevel))
        navigate('/game')
    }

    return (<div className={styles.main_item}>
        <p className={styles.main_item_title}>{gameConfig[gameLevel].title}</p>
        <p className={styles.main_item_description}>{gameConfig[gameLevel].description}</p>
        <button type="button" className={styles.main_item_button} onClick={onClickHandler}>Играть</button>
    </div>)
}

export default Level