import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { createOrUpdate } from '../../services/portfolio.service';
import { toast } from "react-toastify";

type PortfolioData = {
    fullName: string,
    title: string,
    about: string,
    skills: string,
    projects: string,
}
const PortfolioBuilder = () => {
    const [portfolioData, setPortfolioData] = useState<PortfolioData>({
        fullName: '',
        title: '',
        about: '',
        skills: '',
        projects: '',
    });

    const handleChange = (changeValue: any, allValue: PortfolioData) => {
        setPortfolioData(allValue);
    }

    const handleSave = async () => {
        try {
            const res = await createOrUpdate(portfolioData);
            toast.success("Portfolio saved successfully!");
            console.log(res);
        } catch (error: any) {
            toast.error("Failed to save portfolio!");
            console.log(error.message);
        }
    }
    return (
        <div className='grid grid-cols-2 gap-6 p-6'>
            <div className='bg-white p-6 rounded-xl shadow'>
                <h2 className='text-xl font-bold mb-4'>Portfolio Builder</h2>
                <Form layout='vertical'
                    onValuesChange={handleChange}
                    initialValues={portfolioData} >
                    <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
                        <Input placeholder='Enter your full name' />
                    </Form.Item>

                    <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                        <Input placeholder='Enter your title' />
                    </Form.Item>

                    <Form.Item label="About" name="about" rules={[{ required: true }]}>
                        <Input.TextArea placeholder='Tell something about yourself' rows={4} />
                    </Form.Item>

                    <Form.Item label="Skills (comma separated)" name="skills" rules={[{ required: true }]}>
                        <Input placeholder='React, Node.js, MongoDB,...' />
                    </Form.Item>

                    <Form.Item label="Projects (comma separated)" name="projects" rules={[{ required: true }]}>
                        <Input placeholder='Portfolio App, E-commerce, Blog,...' />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' onClick={handleSave} htmlType='submit'>Save Draft</Button>
                    </Form.Item>
                </Form>
            </div>

            {/* Preview Section */}
            <div className='bg-gray-100 p-6 rounded-xl shadow '>
                <h2 className='text-xl font-bold mb-4'>Live Preview</h2>
                <div>
                    <h1 className='text-2xl font-semibold'>{portfolioData.fullName || "Your Full Name"}  </h1>
                    <p className='text-gray-600'>{portfolioData.title || "Your Title"}</p>

                    <div className='mt-4'>
                        <h3 className=' font-semibold'>About</h3>
                        <p>{portfolioData.about || "Wirte something about yourself ..."}</p>
                    </div>

                    <div className='mt-4'>
                        <h3 className='font-semibold'>Skills</h3>
                        <ul className='list-disc ml-4'>
                            {portfolioData.skills
                                ? portfolioData.skills.split(',').map((s, i) => <li key={i}>{s.trim()}</li>) : <li>React</li>}
                        </ul>
                    </div>

                    <div className='mt-4'>
                        <h3 className='font-semibold'>Projects</h3>
                        <ul className='list-disc ml-4'>
                            {portfolioData.projects
                                ? portfolioData.projects.split(',').map((s, i) => <li key={i}>{s.trim()}</li>) : <li>Portfolio App</li>}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioBuilder