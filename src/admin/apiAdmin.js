import {API} from '../config'

// to add category
export const createcategory=(token,category)=>{
    return fetch(`${API}/postcategory`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}
// to get all category
export const getCategories=()=>{
    return fetch(`${API}/categorylist`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}
//to add product
export const createproduct=(token,product)=>{
    return fetch(`${API}/postproduct`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:product
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

//to show product
export const getProducts=()=>{
    return fetch(`${API}/productlist?limit=undefined`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}