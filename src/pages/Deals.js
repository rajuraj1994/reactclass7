import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { getCategories, getFilteredProducts } from '../components/uiApi'
import { Link } from 'react-router-dom'
import Checkbox from '../components/Checkbox'
import { prices } from '../components/fixedPrice'
import RadioBox from '../components/RadioBox'

const Deals = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }

    })

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(8)
    const [skip, setSkip] = useState(0)
    const [filteredResults, setFilteredResults] = useState([])
    const [size, setSize] = useState(0)




    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error)

            }
            else {
                setCategories(data)
            }
        })
    }

    useEffect(() => {
        init()
        loadFilteredResults(skip,limit,myFilters.filters)
    }, [])

    const handleFilters = (filters, filterBy) => {
        const newFilters = { ...myFilters }
        newFilters.filters[filterBy] = filters
        if (filterBy === "product_price") {
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy] = priceValues
        }
        loadFilteredResults(myFilters.filters)
        setMyFilters(newFilters)

    }

    const handlePrice = value => {
        const data = prices
        let array = []
        for (let key in data) {
            if (data[key]._id === parseInt(value)){
                array = data[key].array
            }
        }
        return array
    }

    const loadFilteredResults = (newFilters) => {
        getFilteredProducts(skip, limit, newFilters)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setFilteredResults(data.product)
                    setSize(data.size)
                    setSkip(0)
                }
            })
    }

    const loadMore=()=>{
        let toSkip=skip+limit
        getFilteredProducts(toSkip,limit,myFilters.filters)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setFilteredResults([...filteredResults,...data.product])
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }

    const loadMoreButton=()=>{
        return(
            size>=0 &&
            size>=limit && (
                <center>
                    <button onClick={loadMore} className="btn btn-warning m-5 fs-5">Load More</button>
                </center>
            )
        )
    }
    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <h3>Deals and Promotion</h3>
                    <span>Shop Today's Deals,Lightning Deals and limited-time discount </span>

                    <div className="col-md-2 p-2 shadow-lg" style={{ backgroundColor: '#f5f5f5' }}>
                        <h4>Categories</h4>
                        
                            <Checkbox categories={categories} handleFilters={filters => handleFilters(filters, 'category')} />
                        
                        <h4>Price</h4>
                        <RadioBox prices={prices}
                            handleFilters={filters => handleFilters(filters, 'product_price')} />
                        <h4>Deal Type</h4>
                        <Link className="text-decoration-none" to="#">Deal of the Day</Link> <br />
                        <Link className="text-decoration-none" to="#">Lightning Deals</Link> <br />
                        <Link className="text-decoration-none" to="#">Savings & Sales</Link> <br />
                        <Link className="text-decoration-none" to="#">Prime Early Access Deals</Link><br />

                    </div>
                    <div className="col-md-10">
                        <div className="container-fluid mt-2">
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {filteredResults.map((product, i) => (
                                    <Card key={i} product={product} />
                                ))}
                            </div>
                        </div>
                        {loadMoreButton()}

                    </div>


                </div>
            </div>


            <Footer />

        </>
    )
}

export default Deals
