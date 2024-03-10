import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import GamePage from '../../pages/game-page'
import MainPage from '../../pages/main-page'

import styles from './style.module.css'

const App = () => {
    const router = createHashRouter([
        {
            path: 'game',
            element: <GamePage />,
        },
        {
            path: '*',
            element: <MainPage />,
        },
    ])

    return (
        <div className={styles.App}>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
