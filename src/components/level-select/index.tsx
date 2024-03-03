import React from 'react'

import { EGameSettingsNames } from '../../constants/constants'
import Level from '../level'

import styles from './style.module.css'

const LevelSelect = () => (
    <div className={styles.main}>
        <div className={styles.main_title}>Выберите уровень</div>
        <div className={styles.main_body}>
            <Level gameLevel={EGameSettingsNames.Easy} />
            <Level gameLevel={EGameSettingsNames.Medium} />
            <Level gameLevel={EGameSettingsNames.Hard} />
        </div>
    </div>
)

export default LevelSelect