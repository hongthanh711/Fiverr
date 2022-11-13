import React from 'react'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import { LoadingProvider } from './contexts/loading.context'

import 'animate.css'

import './styles/_reset.scss'

function App() {
    return (
        <BrowserRouter>
            <LoadingProvider>
                <Router />
            </LoadingProvider>
        </BrowserRouter>
    )
}

export default App
