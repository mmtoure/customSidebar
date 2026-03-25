import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

import Layout from '../layout/Layout'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Login from '../features/auth/pages/Login'
import InsuredCreate from '../features/insureds/pages/InsuredCreate'
import InsuredDetails from '../features/insureds/pages/InsuredDetails'
import InsuredEdit from '../features/insureds/pages/InsuredEdit'
import InsuredList from '../features/insureds/pages/InsuredList'
import GroupList from '../features/groups/pages/GroupList'
import GroupCreate from '../features/groups/pages/GroupCreate'
import GroupDetails from '../features/groups/pages/GroupDetails'
import GroupEdit from '../features/groups/pages/GroupEdit'
import ContractList from '../features/contracts/pages/ContractList'
import ContractDetails from '../features/contracts/pages/ContractDetails'
import ClaimList from '../features/claims/pages/ClaimList'
import ClaimCreate from '../features/claims/pages/ClaimCreate'
import ClaimDetails from '../features/claims/pages/ClaimDetails'
import ClaimEdit from '../features/claims/pages/ClaimEdit'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>

                    {/** Insureds routes */}
                    <Route path="/insureds" element={<InsuredList />} />
                    <Route path="/insureds/create" element={<InsuredCreate />} />
                    <Route path="/insureds/:id" element={<InsuredDetails />} />
                    <Route path="/insureds/edit/:id" element={<InsuredEdit />} />

                    {/** Groups routes */}
                    <Route path="/groups" element={<GroupList />} />
                    <Route path="/groups/create" element={<GroupCreate />} />
                    <Route path="/groups/:id" element={<GroupDetails />} />
                    <Route path="/groups/edit/:id" element={<GroupEdit />} />

                    {/** Contracts routes */}
                    <Route path="/contracts" element={<ContractList />} />
                    <Route path="/contracts/:id" element={<ContractDetails />} />

                    {/** Claims routes */}
                    <Route path="/sinistres" element={<ClaimList />} />
                    <Route path="/sinistres/create" element={<ClaimCreate />} />
                    <Route path="/sinistres/:id" element={<ClaimDetails />} />
                    <Route path="/sinistres/edit/:id" element={<ClaimEdit />} />


                    <Route path='/' element={<Dashboard />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/settings' element={<Settings />} />
                </Route>
            </Routes>


        </BrowserRouter>
    )
}

export default AppRouter