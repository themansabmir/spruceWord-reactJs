import React, { useContext } from 'react'
import GlobalState from '../../GlobalState'
import './Shop.css'
import ProductItem from '../ProductItem/ProductItem'

const Shop = () => {
  const state = useContext(GlobalState)
  const [products] = state.shopAPI.products


  return (
    <div className='cardContainer'>
    {
      products.map(e=>{
        return(
        <ProductItem prop={e} key={e._id}/>
        )
      })
    }
    </div>
    )
}

export default Shop


