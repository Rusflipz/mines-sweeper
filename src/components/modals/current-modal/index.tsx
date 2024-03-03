import React from 'react'

import styles from './style.module.css'

const CurrentModal = ({ modalSettings }) => (<div className={styles.modal}>
    <p className={styles.modal_title}>{modalSettings.title}</p>
    <button type="button" className={styles.modal_button}
            onClick={modalSettings.firstButton.onClick}>{modalSettings.firstButton.title}
    </button>
    <button type="button" className={styles.modal_button}
            onClick={modalSettings.secondButton.onClick}>{modalSettings.secondButton.title}</button>
</div>)

export default CurrentModal