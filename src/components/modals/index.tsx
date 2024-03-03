import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { EModalTypes, modalConfig } from '../../constants/modalConfig'
import { useAppDispatch } from '../../hooks/use-app-dispatch'
import { TUseTimer } from '../../hooks/use-timer'
import { modalTypeSelector } from '../../store/slice/aplication-slice'

import CurrentModal from './current-modal'

import styles from './style.module.css'


const Modals = ({ timerControl }: { timerControl: TUseTimer }) => {
    const dispatch = useAppDispatch()
    const modalType: EModalTypes = useSelector(modalTypeSelector)
    const navigate = useNavigate()


    useEffect(() => {
        if (modalType) timerControl.pauseTimer()
    }, [modalType])


    return (<div hidden={modalType === null} className={styles.modal_container}>
        {modalType && <CurrentModal modalSettings={modalConfig({ dispatch, navigate, timerControl })[modalType]} />}
    </div>)
}

export default Modals