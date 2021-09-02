import { API } from '../config'

//to fetch product by arrival date
export const getProducts = (sortBy) => {
    return fetch(`${API}/productlist?sortBy=${sortBy}&order=desc&limit=8`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(error => console.log(error))
}

//to get all the categories
// to get all category
export const getCategories = () => {
    return fetch(`${API}/categorylist`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

// to filter product by category and price range

//to filter products by category and price range
export const getFilteredProducts = (skip, limit, filters = {}) => {
    let data = { limit, skip, filters }

    return fetch(`${API}/products/by/search`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err)
        })
}

//to fetch product details
export const productDetails = (productId) => {
    return fetch(`${API}/productdetails/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

//list related
export const listRelated = (productId) => {
    return fetch(`${API}/product/related/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}