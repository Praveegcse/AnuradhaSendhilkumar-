import React from 'react';
import { Select, Typography, Form, Input, Button, Radio, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { triggerFocus } from 'antd/lib/input/Input';
import { json } from 'react-router-dom';

export default function Add() {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { Title } = Typography;

    const onFinish = (data) => {

        console.log(data);
        var formdata = new FormData();
        formdata.append("DOC001", data['10thMarksheet']?.file.originFileObj);
        formdata.append("DOC002", data['11thMarksheet']?.file.originFileObj);
        formdata.append("DOC003", data['12thMarksheet']?.file.originFileObj);
        formdata.append("DOC004", data['TC']?.file.originFileObj);
        formdata.append("DOC005", data['aadhar']?.file.originFileObj);
        formdata.append("DOC006", data['passportPhoto']?.file.originFileObj);
        formdata.append("DOC007", data['signature']?.file.originFileObj);
        formdata.append("DOC008", data['manuscript']?.file.originFileObj);
        formdata.append("DOC009", data['communityCertificate']?.file.originFileObj);
        formdata.append("DOC010", data['incomeCertificate']?.file.originFileObj);
        formdata.append("DOC011", data['firstGraduate']?.file.originFileObj);
        formdata.append("DOC012", data['jioningDeclearation']?.file.originFileObj);

        let formObj = {
            ModeOfEntry: data.modeEntry,
            StudentName: data.name,
            Department: data.branch,
            PMS: true,
            Quota: data.quota,
            Reservation: true,
            FirstGraduate: true
        }

        formdata.append("studentInfo",JSON.stringify(formObj));
        console.log(formdata)

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://localhost:5001/api/Student/SaveStudentDetails", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
                colon={false}
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
                        <Option value="D001">CSE</Option>
                        <Option value="D002">IT</Option>
                        <Option value="D003">ECE</Option>
                        <Option value="D004">EEE</Option>
                        <Option value="D005">MECH</Option>
                        <Option value="D006">CIVIL</Option>
                        <Option value="D007">BIOTECH</Option>
                        <Option value="D008">AERO</Option>
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
                        <Radio value={'MOE001'}>Regular</Radio>
                        <Radio value={'MOE002'}>Lateral entry</Radio>
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
                        <Radio value={'Q001'}>General </Radio>
                        <Radio value={'Q002'}>Management</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="PMS"
                    label="PMS"


                >
                    <Radio.Group>
                        <Radio value={'yes '}>Yes</Radio>
                        <Radio value={'no'}>No</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="reservation"
                    label="Reservation"

                >
                    <Radio.Group>
                        <Radio value={'yes '}>Yes</Radio>
                        <Radio value={'no'}>No</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="firstGraduateRadio"
                    label="First Graduate"

                >
                    <Radio.Group>
                        <Radio value={'yes '}>Yes</Radio>
                        <Radio value={'no'}>No</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="communityCertificate"
                    label="Community Certificate"

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
                    name="firstGraduate"
                    label="First Graduate"

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
                    name="jioningDeclearation"
                    label="Jioning Declearation"

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
