import React from 'react'

import styles from './style.module.css'

const CounterPlate = ({ value, label }) => (
        <div className={styles.plate_conteiner}>
            <p className={styles.plate_label}>{label}</p>
            <div className={styles.plate}>
                <p className={styles.plate_value}>{value}</p>
            </div>
        </div>)

export default CounterPlate