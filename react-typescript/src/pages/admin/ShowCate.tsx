import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {Link} from 'react-router-dom'
import { useNavigate,useParams } from 'react-router-dom';
interface DataType {
    key: string;
    category: string;
    
}
const ShowCate = (props) => {
    const { id } = useParams(props.id) //lấy ra id từ url
    const removeCate = (id) => {
        props.onRemove(id)
    }

    const data = props.categorys.map(item => {
        return {
            key: item.id,
            category: item.category
        }
     })

    const columns: ColumnsType<DataType> = [
       
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record.key)

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCate(record.key)}>Remove</Button>
                    <Button><Link to={'/admin/categories/add'}>Add New Product</Link></Button>
                    <Button><Link to={`/admin/categories/update/${record.key}`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 6, showQuickJumper: true }} />
}

export default ShowCate