import React,{useState} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../actions/cartActions'
import{countries} from 'countries-list'
import CheckoutStep from '../components/CheckoutStep'


const Shipping = ({history}) => {
     const countriesList=Object.values(countries)


    const{shippingInfo}= useSelector(state=>state.cart)
    const[shippingAddress1,setShippingAddress1]=useState(shippingInfo.shippingAddress1)
    const[shippingAddress2,setShippingAddress2]=useState(shippingInfo.shippingAddress2)
    const[zip,setZip]=useState(shippingInfo.zip)
    const[country,setCountry]=useState(shippingInfo.country)
    const[phone,setPhone]=useState(shippingInfo.phone)
    const[city,setCity]=useState(shippingInfo.city)

    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveShippingInfo({shippingAddress1,shippingAddress2,city,zip,country,phone}))
        history.push('/confirm')
    }


    return (

        <>
        <Nav/>
        <div className="container">
           
                <div className="col-md-5 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                <CheckoutStep shipping/>
                    <form>
                        <center><h2 className="mb-3">Shipping Information</h2></center>
                        <div className="col-12 mb-3">
                            <label htmlFor="shippingaddress1">ShippingAddress1</label>
                            <input type="text" className="form-control" id="shippingaddress1"   onChange={(e)=>setShippingAddress1(e.target.value)} value={shippingAddress1} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="shippingaddress2">ShippingAddress2</label>
                            <input type="text" className="form-control" id="shippingaddress2"   onChange={(e)=>setShippingAddress2(e.target.value)} value={shippingAddress2} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="city">city</label>
                            <input type="text" className="form-control" id="city"   onChange={(e)=>setCity(e.target.value)} value={city} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="zip">zip</label>
                            <input type="number" className="form-control" id="zip"   onChange={(e)=>setZip(e.target.value)} value={zip} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="phone">phone</label>
                            <input type="number" className="form-control" id="phone"   onChange={(e)=>setPhone(e.target.value)} value={phone} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="country">country</label>
                            <select  className="form-control" id="country"   onChange={(e)=>setCountry(e.target.value)}  >
                                <option value={country}>{country}</option>
                                {countriesList.map(country=>(
                                    <option key={country.name} value={country.name}>{country.name}</option>

                                ))}
                                
                                </select>
                        </div>
                       
                       
                        <div className="mb-3">
                        <button className="btn btn-warning" onClick={submitHandler}>Continue</button>
                        </div>
                        

                    </form>
                </div>
            </div>



        <Footer/>

            
        </>
    )
}

export default withRouter(Shipping)
