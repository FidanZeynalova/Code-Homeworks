//Datalari getirmek ucun
export async function GetAllSuppliers(url){
    let suppliers = null
    let error = null
    await axios.get(url)
    .then(res => suppliers = res.data)
    .catch(err => error = err)
    return{
        suppliers,
        error
    }
}

//Post
export async function PostSupplier(url,newSupplier) {
    let suppliers = null
    let error = null
    await axios.post(url,newSupplier)
    .then(res => suppliers = res.data)
    .catch(err => error = err)
    return{
        suppliers,
        error
    }
}

//Delete
export async function DeleteSupplier(url,id) {
    let suppliers = null
    let error = null
    await axios.delete(`${url}/${id}`)
    .then(res => suppliers = res.data)
    .catch(err => error = err)
    return{
        suppliers,
        error
    }
}

// ID
export async function SupplierById(url,id) {
    let suppliers = null
    let error = null
    await axios.get(`${url}/${id}`)
    .then(res => suppliers = res.data)
    .catch(err => error = err)
    return{
        suppliers,
        error
    }
}

// Edit
export async function EditSupplier(url,id,newSupplier) {
    let suppliers = null
    let error = null
    await axios.put(`${url}/${id}`,newSupplier)
    .then(res => suppliers = res.data)
    .catch(err => error = err)
    return{
        suppliers,
        error
    }
}