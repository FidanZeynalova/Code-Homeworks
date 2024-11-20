//Datalar getirmek ucun
export async function GetAllCategories(url){
    let categories = null
    let error = null
    await axios.get(url)
    .then(res => categories = res.data)
    .catch(err => error = err)
    return{
        categories,
        error
    }
}

//Post
export async function PostCategories(url,newCategory){
    let categories = null
    let error = null
    await axios.post(url,newCategory)
    .then(res => categories = res.data)
    .catch(err => error = err)
    return{
        categories,
        error
    }
}

// Delete
export async function DeleteCategory(url,id){
    let categories = null
    let error= null
    await axios.delete(`${url}/${id}`)
    .then(res => categories = res.data)
    .catch(err => error = err)
    return{
        categories,
        error
    }
}

// ID
export async function CategoriesById(url,id){
    let categories = null
    let error= null
    await axios.get(`${url}/${id}`)
    .then(res => categories = res.data)
    .catch(err => error = err)
    return{
        categories,
        error
    }
}

//Edit
export async function EditCategory(url,id,newCategory){
    let categories = null
    let error= null
    await axios.put(`${url}/${id}`,newCategory)
    .then(res => categories = res.data)
    .catch(err => error = err)
    return{
        categories,
        error
    }
}