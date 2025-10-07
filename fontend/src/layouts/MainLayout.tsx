import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="p-6">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout