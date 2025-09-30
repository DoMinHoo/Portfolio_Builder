import React, { use } from 'react'

import { Layout, Menu } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    const location = useLocation();

    const menuItems = [
        { key: '/', label: <Link to={"/"}>Home</Link> },
        { key: '/about', label: <Link to={"/about"}>About</Link> },
        { key: '/portfolio', label: <Link to={"/portfolio"}>Portfolio</Link> },
        { key: '/contact', label: <Link to={"/contact"}>Contact</Link> }
    ]

    return (
        <Layout className='min-h-screen'>
            <Header className='flex items-center'>
                <div className=' text-white font-bold text-xl mr-6'>My Portfolio</div>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    className='flex-1' />
            </Header>
            <Content className='p-6 bg-gray-100'>
                <Outlet />
            </Content>
            <Footer className="text-center bg-gray-100">
                © {new Date().getFullYear()} Portfolio Builder
            </Footer>
        </Layout>
    )
}

export default MainLayout