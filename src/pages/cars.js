import Navbar from '../component/navbar'
import HeaderNoBtn from '../component/headerNoBtn'
import Search from '../component/searchForm'
import Footer from '../component/footer'
import Card from '../component/card'
import {React, useState, useEffect} from 'react'
import getCarsServices from '../services/getCar'
import ProductCard from '../component/testCard'

function Cars() {
  const [cars, setCars] = useState([])

  const getCars = async () => {
    const allCars = await getCarsServices()
    setCars(allCars)
  }

  useEffect(() => {
    getCars()
  },[]);

  return (
    <div>
        <Navbar />
        <HeaderNoBtn />
        <Search />
        {
          cars.map((item,index) => < ProductCard key={index} cars={item} />)
        }
        <Footer />
    </div>
  )
}

export default Cars