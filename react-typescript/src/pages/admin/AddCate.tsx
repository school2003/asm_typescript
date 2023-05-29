
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input,Select } from 'antd';

interface IFormInput {
    id:number,
    name: string,

}
interface IProps {
    onAdd: (product: IProduct) => void
}
const AddCate = (props: IProps) => {
    const navigate = useNavigate()
   
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/categories')
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
                <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Vui lòng không để trống danh mục' }]} >
                <Select>
                    <Select.Option value="Danh mục 1">Danh mục 1</Select.Option>
                    <Select.Option value="Danh mục 2">Danh mục 2</Select.Option>
                    <Select.Option value="Danh mục 3">Danh mục 3</Select.Option>
                    <Select.Option value="Danh mục 4">Danh mục 4</Select.Option>
                    <Select.Option value="Danh mục 5">Danh mục 5</Select.Option>
                    <Select.Option value="Danh mục 6">Danh mục 6</Select.Option>
                    <Select.Option value="Danh mục 7">Danh mục 7</Select.Option>
                </Select>
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
export default AddCate