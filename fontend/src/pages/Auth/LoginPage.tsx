import React from 'react'

import { Form, Input, Button, Card, Alert } from "antd"
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const { login, error, setError, success, setSuccess } = useAuth();
    const navigate = useNavigate();
    const onFinish = (value: any) => {
        login(value.email, value.password);
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <Card title="Login" className='w-[500px] p-10 shadow-lg'>
                <Form onFinish={onFinish}>
                    <Form.Item name="email" rules={[{ required: true }]}>
                        <Input type='email' placeholder='Email' className='h-10 ' />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true }]}>
                        <Input type='password' placeholder='Password' className='h-10' />
                    </Form.Item>
                    {success && (
                        <Alert
                            message={success}
                            type="success"
                            showIcon
                            closable
                            onClose={() => setSuccess(null)} />
                    )}
                    {error && (
                        <Alert
                            message={error}
                            type="error"
                            showIcon
                            closable
                            onClose={() => setError(null)}
                        />
                    )}
                    <Form.Item >
                        <p>Don't have an account? <a href="/auth/register">Register</a></p>
                        <Button type='primary' htmlType='submit' className='float-right' block>Login</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default LoginPage