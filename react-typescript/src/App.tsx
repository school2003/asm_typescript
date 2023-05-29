import { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import {getAll,deleteProduct,addProduct,updateProduct} from './api/product'
import Home from './pages/web/Home'
import Products from './pages/web/Products'
import ProductsDetail from './pages/web/ProductsDetail'
import Signup from './pages/admin/Signup'
// import Signin from './pages/admin/Signin'
import Signin from './pages/admin/Signin'
import Show from './pages/admin/Show'
import Add from './pages/admin/Add'
import Update from './pages/admin/Update'
//cate
import ShowCate from './pages/admin/ShowCate'
import AddCate from './pages/admin/AddCate'
import UpdateCate from './pages/admin/UpdateCate'
import { getAllCategory,addCategory,updateCategory,deleteCategory } from './api/categories'
// import '././index.css'
function App() {
  const [products, setProducts] = useState([])
  const [categorys, setCategorys] = useState([])
  // const [users, setUsers] = useState([])
useEffect(()=>{
  getAll().then(({data})=>setProducts((data)))
},[])
useEffect(()=>{
  getAllCategory().then(({data})=>setCategorys((data)))
},[])
const onHandleRemove = (id: number) => {
  const xoa = window.confirm("Xác nhận xóa?");
  if(xoa){
    deleteProduct(id).then(() => setProduct(products.filter((item: IProduct) => item.id !== id)))
  }
}
const onHandleRemoveCate = (id: number) => {
  const xoa = window.confirm("Xác nhận xóa?");
  if(xoa){
    deleteCategory(id).then(() => setCategorys(categorys.filter((item: IProduct) => item.id !== id)))
  }}
const onHandleAdd = (product) => {
  addProduct(product).then(() => setProduct([...products, product]))
  alert("Thêm mới Product thành công")
}
const onHandleAddCate = (Category) => {
  addCategory(Category).then(() => setCategorys([...categorys, Category]))
  alert("Thêm mới Danh mục thành công")
}
const onHandleUpdate = (product) => {
  updateProduct(product)
  alert("Update Product thành công")
}
const onHandleUpdateCate = (Category) => {
  updateCategory(Category)
  alert("Update Categories thành công")
}

return(
  <div className='App'>
  <Routes>
      <Route path = '/'>
        <Route index element={<Home/>} />
        <Route path ='products' element={< Products  products={products} />} />
        <Route path ='products/:id' element={<ProductsDetail  products={products} />}/>  
    </Route>
    <Route path = '/admin'>
        <Route index element={<Show  products={products}  categorys={categorys} onRemove={onHandleRemove}/>} />
        <Route path='add' element={<Add onAdd={onHandleAdd}/>}/>
        <Route path='update/:id' element={<Update    onUpdate={onHandleUpdate} products={products}/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='categories'>
        <Route index element={<ShowCate  categorys={categorys} onRemove={onHandleRemoveCate}/>} />
        <Route path='add' element={<AddCate onAdd={onHandleAddCate}/>}/>
        <Route path='update/:id' element={<UpdateCate    onUpdate={onHandleUpdateCate} categorys={categorys}/>}/>
        </Route>
    </Route>
  </Routes>
  </div>
)
}

export default App
