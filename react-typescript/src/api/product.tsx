import { IProduct } from "../types/product";
import instance from "./instance";

const getAll = function(){
    return instance.get('/products')
}
const getOne = function(id){
    return instance.get('/products/'+ id)
}
const deleteProduct = function(id){
    return instance.delete(`/products/${id}`)
}
const addProduct = (product:IProduct) => {
    return instance.post('/products', product)
}
const updateProduct = (product: IProduct) => {
    return instance.put('/products/' + product.id, product)
}
export {getAll,getOne, deleteProduct,addProduct,updateProduct }