import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {Link} from 'react-router-dom'
import { useNavigate,useParams } from 'react-router-dom';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const Show = (props) => {
    const { id } = useParams(props.id) //lấy ra id từ url
    const removeProduct = (id) => {
        props.onRemove(id)
    }

    const data = props.products.map(item => {
        return {
            key: item.id,
            name: item.name,
            price: item.price,
            description:item.description,
            category:item.category,
            image: item?.image?.file?.thumbUrl
        }
    })

    const columns: ColumnsType<DataType> = [
       
        {
            title: ' Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: ' Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <img src={image} alt="" />,
      },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record.key)

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'black' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                    <Button><Link to={'/admin/add'}>Add New Product</Link></Button>
                    <Button><Link to={`/admin/update/${record.key}`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 6, showQuickJumper: true }} />
}

export default Show