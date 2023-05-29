import {useState, useEffect} from "react"
import { IProduct } from '../../types/product'
import {Link} from "react-router-dom"
import { Card, Col, Row } from 'antd';
const Products = function(props){
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])


    return(
        data.map(function(item){
          
                    return( <div className=" " key={item.id}>
                        
{/*                        
                     <div> <a className="text-red-200" href="">{item.name}</a></div> 
                       <div> { <img src={item.image.file.thumbUrl} alt="" />}</div> 
                      <div> <a href="">{item.category}</a> </div>  */}
               
                        <Link to={`/products/${item.id}`} > 
                        
                       <Col span={8}>
                        <Card title={item.name} bordered={false}>
                            <img src={item?.image?.file?.thumbUrl} alt="" />
                        <h2>Price: {item.price}</h2>
                            <h2>Description: {item.description}</h2>
                            <h2>Category: {item.category}</h2>
                        </Card>
                    </Col>
                </Link> 
                    </div>  )   
                })
     
    )
}
export default Products