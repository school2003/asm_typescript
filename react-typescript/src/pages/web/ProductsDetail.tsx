import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col, Row } from 'antd';
const ProductDetail = (props) => {
    const { id } = useParams()
    const currentProduct = props.products.find((item) => item.id == id)

    return (
        <div>
          <Col span={8}>
                        <Card title={currentProduct?.name} bordered={false}>
                            <img src={currentProduct?.image.file.thumbUrl} alt="" />
                        <h2>Price: {currentProduct?.price}</h2>
                            <h2>Description: {currentProduct?.description}</h2>
                            <h2>Category: {currentProduct?.category}</h2>
                        </Card>
                    </Col>
        </div>
    )
}

export default ProductDetail