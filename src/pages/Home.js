import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Trending from '../components/Trending'
import { getProducts } from '../components/uiApi'

const Home = () => {
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            }
            else {
                setProductsByArrival(data)
            }

        })
    }

    useEffect(() => {
        loadProductsByArrival()
    }, [])

    return (
        <>
            <Nav />
            <Carousel />
            <div className="container-fluid mt-2">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {productsByArrival.map((product,i)=>(
                          <Card key={i} product={product} />

                    ))}
                  
                </div>
            </div>
            <Trending />
            <Footer />
        </>
    )
}

export default Home
