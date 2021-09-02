import React,{useState,useEffect} from 'react'
import AdminDashboard from '../pages/auth/AdminDashboard'
import { getCategories,createproduct } from './apiAdmin'
import { isAuthenticated } from '../pages/auth'
const AddProduct = () => {
    const{token}=isAuthenticated()
    const[values,setValues]=useState({
        product_name:'',
        product_price:'',
        countInStock:'',
        product_description:'',
        categories:[],
        category:'',
        product_image:'',
        error:'',
        success:false,
        formData:''
    })
    const{product_name,product_price,countInStock,product_description,categories,category,error,success,formData}=values

    //load categories and set form data
    const init=()=>{
        getCategories().then(data=>{
            if(data.error){
                setValues({...values,errror:data.error})
            }else{
                setValues({...values,categories:data,formData:new FormData})
            }
        })
    }

    //to send form data
    useEffect(()=>{
        init()
    },[])

    const handleChange=name=>event=>{
        const value=name==='product_image'?event.target.files[0]:event.target.value
        formData.set(name,value)
        setValues({...values,[name]:value})

    }

    const clickSubmit=(event)=>{
        event.preventDefault()
        setValues({...values,error:''})
        createproduct(token,formData)
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }
            else{
                setValues({...values,product_name:'',product_price:'',product_description:'',countInStock:'',product_image:'',success:true,error:''})
            }
        })

    }

     //to show error msg
     const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    //to show success msg
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
          new product added
        </div>

    )

    return (
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <AdminDashboard/>
                </div>
                <div className="col-md-6">
                <form className="shadow-lg p-3">
                        <h2>Add Product Form</h2>
                        {showError()}
                        {showSuccess()}
                        <div className="mb-3">
                            <label htmlFor="productname">product Name</label>
                            <input type="text" id="productname" value="" className="form-control" onChange={handleChange('product_name')} value={product_name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productprice">product price</label>
                            <input type="number" id="productprice" value="" className="form-control" onChange={handleChange('product_price')} value={product_price}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productstock">product stock</label>
                            <input type="number" id="productstock" value="" className="form-control" onChange={handleChange('countInStock')} value={countInStock}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productdesc">product description</label>
                           <textarea className="form-control" id="productdesc" onChange={handleChange('product_description')} value={product_description}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productimge">product image</label>
                            <input type="file" id="productimage" value="" className="form-control" onChange={handleChange('product_image')}  accept="image/*"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <select className="form-control" onChange={handleChange('category')} >
                            <option></option>
                            {categories && categories.map((c,i)=>(
                                <option key={i} value={c._id}>{c.category_name}</option>
                            ))}
                        </select>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary" onClick={clickSubmit}>Add Product</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
            
        </>
    )
}

export default AddProduct
