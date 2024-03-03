import React, { useEffect } from 'react'

import LevelSelect from '../../components/level-select'

import styles from './style.module.css'

const MainPage = () => {

    useEffect(() => {
        window.localStorage.clear()
    }, [])

    return <div className={styles.main}>
        <LevelSelect />
    </div>
}

export default MainPage