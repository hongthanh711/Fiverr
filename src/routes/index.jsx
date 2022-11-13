import React from 'react'
import { useRoutes } from 'react-router-dom'
import AdminLayout from '../layouts/admin-layout/admin-layout'
import HomeLayout from '../layouts/home-layout/home-layout'
import GrapicsDesign from '../pages/graphics-design/graphics-design'
import Home from '../pages/home/home'
import JobDetail from '../pages/job-detail/job-detail'
import JobList from '../pages/jobList/jobList'
import Login from '../pages/login/login'
import Page404 from '../pages/page404/page404'
import Profile from '../pages/profile/profile'

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                { path: '/', element: <Home /> },
                {
                    path: '/search/:keyword',
                    element: <JobList />,
                },
                { path: '/graphics&design', element: <GrapicsDesign /> },
                { path: '/job-detail', element: <JobDetail /> },
                { path: '/profile', element: <Profile /> },
            ],
        },
        {
            path: '/login',
            element: <Login />,
        },
        { path: '/admin', element: <AdminLayout />, children: [] },
        {
            path: '*',
            element: <Page404 />,
        },
    ])

    return routing
}
