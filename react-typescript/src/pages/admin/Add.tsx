
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input,Upload,Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
interface IFormInput {
    id:number,
    name: string,
    price: number
}
interface IProps {
    onAdd: (product: IProduct) => void
}
const Add = (props: IProps) => {
    const navigate = useNavigate()
   
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/')
    };
        
    
     return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Vui lòng không để trống danh mục' }]} >
                    <Select>
                        <Select.Option value="Danh mục 1">Danh mục 1</Select.Option>
                        <Select.Option value="Danh mục 2">Danh mục 2</Select.Option>
                        <Select.Option value="Danh mục 3">Danh mục 3</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Product description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    >
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>


            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form> */}
        </div>
    )

        }
export default Add