import { useDispatch } from 'react-redux'

import { TDispatch } from '../typings/store'


/** Кастомный хук, который возвращает типизированный экземпляр dispatch */
export const useAppDispatch = () => useDispatch<TDispatch>()
