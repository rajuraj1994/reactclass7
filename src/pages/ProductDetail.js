import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../actions/cartActions'
import { productDetails,listRelated} from '../components/uiApi'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const[relatedProduct,setRelatedProduct]=useState([])
    const[quantity,setQuantity]=useState(1)
    const dispatch=useDispatch()

    const loadSingleProduct = productId => {
        productDetails(productId).then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setProduct(data)
                //after fetchin single product fetch related product which match category id
                listRelated(data._id).then(data=>{
                    if (data.error) {
                        setError(data.error)
                    }
                    else{
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }
    useEffect(() => {
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    }, [props])

    const addToCart=()=>{
        dispatch(addItemToCart(props.match.params.productId,quantity))
        toast(`${product.product_name} Added to Cart`)
    }
    return (
        <>
            <Nav />
            <ToastContainer position="top-center"/>
            <div className="card shadow-lg mb-3 mt-4 offset-md-3" style={{ maxWidth: '800px' }}>
                <div className="row g-0">
                    <div className="col-md-6 mt-3 mb-3 p-3">
                        <img src={`http://localhost:8000/${product.product_image}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 mt-4 mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{product.product_name}</h5>
                            <h5 className="card-text">Rs.{product.product_price}</h5>
                            <p className="card-text">{product.product_description}</p>
                            <input type="hidden" value={quantity}/>
                            <button className="btn btn-success" onClick={addToCart}>Add To Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            {relatedProduct.length>0 && (
                <div className="container mt-3 mb-3">
                    <center><h2 className="mb-2 mt-1">Related Product</h2></center>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {relatedProduct.map((product,i)=>(
                            <Card key={i} product={product}/>
                        ))}
                    </div>
                </div>
            )}
           
            

            <Footer />

        </>
    )
}

export default ProductDetail
