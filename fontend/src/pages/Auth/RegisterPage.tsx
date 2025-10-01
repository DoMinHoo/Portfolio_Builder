import React from 'react'
import { Form, Input, Button, Card, Alert } from "antd"
import { useAuth } from '../../hooks/useAuth'
import { registerAPI } from '../../services/auth.service'

type Props = {}

const RegisterPage = (props: Props) => {
    const { register, error, setError } = useAuth();
    const onFinish = (value: any) => {
        register(value.name, value.email, value.password);
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <Card title="Register" className='w-[500px] p-10 shadow-lg'>
                <Form onFinish={onFinish} >
                    <Form.Item name="name" rules={[{ required: true }]}>
                        <Input type='text' placeholder='FullName' className='h-10' />
                    </Form.Item>
                    <Form.Item name="email" rules={[{ required: true }]}>
                        <Input type='email' placeholder='Email' className='h-10 ' />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true }]}>
                        <Input type='password' placeholder='Password' className='h-10' />
                    </Form.Item>
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
                        <p>Already have an account? <a href="/auth">Login</a></p>
                        <Button type='primary' htmlType='submit' className='float-right' block>Register</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default RegisterPage