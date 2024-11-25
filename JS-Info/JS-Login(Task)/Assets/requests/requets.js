// Butun datalari getirmek ucun
export async function GetAllDatas(url){
    let datas = null
    let error = null
    await axios.get(url)
    .then(res => datas = res.data)
    .catch(err => error = err)
    return{
        datas,
        error
    }
}
// Post atmag ucun
export async function PostData(url,newData){
    let data = null
    let error = null
    await axios.post(url,newData)
    .then(res => data = res.data)
    .catch(err => error = err)
    return{
        data,
        error
    }
}

// Id getirmek ucun
export async function GetDataById(url,id){
    let data = null
    let error = null
    await axios.get(`${url}/${id}`)
    .then(res => data = res.data)
    .catch(err => error = err)
    return{
        data,
        error
    }
}

// Edit(Update) etmek ucun
export async function UpdateData(url,id,updateData){
    let data = null
    let error = null
    await axios.put(`${url}/${id}`,updateData)
    .then(res => data = res.data)
    .catch(err => error = err)
    return{
        data,
        error
    }
}