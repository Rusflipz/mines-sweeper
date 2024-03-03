import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GamePage from '../../pages/game-page'
import MainPage from '../../pages/main-page'

import styles from './style.module.css'

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainPage />,
        },
        {
            path: 'game',
            element: <GamePage />,
        },
    ])

    return (
        <div className={styles.App}>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
