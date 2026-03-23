import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

import Layout from '../layout/Layout'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default AppRouter