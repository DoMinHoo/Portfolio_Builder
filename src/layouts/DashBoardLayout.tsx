import React from 'react'

import { Layout, Menu, Button, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    AppstoreOutlined,
    SettingOutlined
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { icons } from 'antd/es/image/PreviewGroup';

const { Header, Sider, Content } = Layout;


const DashBoardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const selectedKey = location.pathname.startsWith("/dashboard") ? location.pathname : "/dashboard";

    const items = [
        { key: "/dashborad", icons: <HomeOutlined />, label: <Link to={"/dashboard"}>Overview</Link> },
        { key: "/dashborad/projects", icons: <AppstoreOutlined />, label: <Link to={"/dashboard/projects"}>Projects</Link> },
        { key: "/dashborad/settings", icons: <SettingOutlined />, label: <Link to={"/dashboard/settings"}>Settings</Link> },
    ]
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} breakpoint='lg'>
                <div className='h-16 flex items-center text-white font-bold'> Logo</div>
                <Menu theme='dark' mode='inline' selectedKeys={[selectedKey]} items={items} />
            </Sider>
            <Layout>
                <Header className='bg-white px-4 flex items-center justify-between'>
                    <div>
                        <Button
                            type='text'
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)} />
                    </div>
                </Header>
                <Content className="p-6 bg-gray-50">
                    <div className="max-w-6xl mx-auto bg-white rounded-md shadow-sm p-6">
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>

    )
}

export default DashBoardLayout