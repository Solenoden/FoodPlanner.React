import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/dashboard/dashboard.component'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App
