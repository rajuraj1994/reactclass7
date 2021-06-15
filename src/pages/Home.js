import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
            <Nav/>
            <Carousel/>
            <Card/>
            <Trending/>
            <Footer/>
        </>
    )
}

export default Home
