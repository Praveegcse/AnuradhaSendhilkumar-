import React from 'react';
import { Select, Typography, Form, Input, Button, Radio, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function Add() {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { Title } = Typography;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const dummyRequest = ({ data, onSuccess }) => {
        onSuccess()
    }

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 24,
            },
            md: {
                span: 8,
            }
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 24,
            },
            md: {
                span: 8,
            }
        },
    };
    return (
        <div>

            <Title style={{ textAlign: 'center' }}>Add Student</Title>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="branch"
                    label="Branch"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a branch',
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Select a branch"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="CSE">CSE</Option>
                        <Option value="IT">IT</Option>
                        <Option value="ECE">ECE</Option>
                        <Option value="EEE">EEE</Option>
                        <Option value="MECH">MECH</Option>
                        <Option value="CIVIL">CIVIL</Option>
                        <Option value="BIOTECH">BIOTECH</Option>
                        <Option value="AERO">AERO</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="modeEntry"
                    label="Mode of entry"
                    rules={[
                        {
                            required: true,
                            message: ' Choose your mode of entry',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={'regular'}>Regular</Radio>
                        <Radio value={'lateral entry'}>Lateral entry</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="10thMarksheet"
                    label="10th marksheet"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="11thMarksheet"
                    label="11th marksheet"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="12thMarksheet"
                    label="12th marksheet"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="TC"
                    label="TC"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="aadhar"
                    label="Aadhar card"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="passportPhoto"
                    label="Passport Photo"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="signature"
                    label="Signature"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="manuscript"
                    label="Manuscript"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="quota"
                    label="Quota"
                    rules={[
                        {
                            required: true,
                            message: ' Choose your Quota',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={'general '}>General </Radio>
                        <Radio value={'management'}>Management</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="PMS"
                    label="PMS"
                    rules={[
                        {
                            required: true,
                            message: ' Choose your PMS',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={'yes '}>Yes</Radio>
                        <Radio value={'no'}>No</Radio>
                    </Radio.Group>
                </Form.Item>
                
                <Form.Item
                    name="reservation"
                    label="Reservation"
                    rules={[
                        {
                            required: true,
                            message: ' Choose your Reservation',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={'yes '}>Yes</Radio>
                        <Radio value={'no'}>No</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="firstGraduate"
                    label="First Graduate"
                    rules={[
                        {
                            required: true,
                            message: ' Choose your Graduate',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={'yes '}>Yes</Radio>
                        <Radio value={'no'}>No</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="communityCertificate"
                    label="Community Certificate"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="incomeCertificate"
                    label="Income Certificate"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Upload listType="picture-card" maxCount={1} customRequest={dummyRequest}>
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>


                <Form.Item wrapperCol={{ 'xs': { span: 24 } }}>
                    <div style={{ marginTop: 35, marginRight: 35, textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit" size={'large'}>
                            Submit
                        </Button>

                    </div>

                </Form.Item>

            </Form>

        </div>
    )
}
