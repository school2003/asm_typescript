import instance from "./instance";

const getAllCategory = () => 
{
    return instance.get('/categories');
}
const getOneCategory = () => 
{
    return instance.get('/categories/' + id);
}
const addCategory = (Category) => {
    return instance.post('/categories', Category);
}
const updateCategory = (Category) => {
    return instance.patch('/categories/' + Category.id, Category);
}
const deleteCategory = (id) => {
    return instance.delete('/categories/' + id);
    
}
export{getAllCategory,getOneCategory,addCategory,updateCategory,deleteCategory}