import React, { useEffect, useState } from 'react'
import { getProfile } from '../services/auth.service'
import { useAuth } from '../hooks/useAuth'
import { Button } from 'antd'

type Props = {}

const Navbar = (props: Props) => {
    const [user, setUser] = useState<any>(null);
    const { logout } = useAuth();

    useEffect(() => {
        getProfile().then((res: any) => setUser(res.data))
    }, [])
    return (
        <div className='flex justify-between items-center bg-white shadow px-6 py-3'>
            <h1 className='text-lg font-bold hover:shadow'>My Portfolio</h1>
            <div className='flex items-center gap-4'>
                {user && <span className='text-sm hover:underline hover:text-blue-400'>{user.name}</span>}
                <Button onClick={logout}>Logout</Button>
            </div>
        </div>
    )
}

export default Navbar