import React,{useEffect,useState} from 'react'
import axios from 'axios'

const ShopApi = () => {
    const [products,setProducts]= useState([])

    const getproducts=async ()=>{
        const res= await axios.get('/api/products')
        setProducts(res.data)
    }
    useEffect(()=>{
        getproducts()
    },[])

  return {
    products:[products,setProducts]
  }

}

export default ShopApi 