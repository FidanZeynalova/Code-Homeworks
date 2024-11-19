 export async function GetAllData(url) {
    let data = null
    let error = null
    await axios.get(url)
    .then(res => data = res.data)
    .catch(err => error=err)
    return{
        data,
        error
    }
}



export async function GetAllDataId(url,id) {
    let data = null
    let error = null
    await axios.get(`${url}/${id}`)
    .then(res => data = res.data)
    .catch(err => error=err)
    return{
        data,
        error
    }
}





export async function GetAllDataDelete(url,id) {
    let data 
    let error 
    await axios.delete(`${url}/${id}`)
    .then(res => data = res.data)
    .catch(err => error=err)
    return{
        data,
        error
    }
}




export async function UpdateData(url,id,updateDate) {
    let data 
    let error 
    await axios.put(`${url}/${id}`,updateDate)
    .then(res => data = res.data)
    .catch(err => error=err)
    return{
        data,
        error
    }
}