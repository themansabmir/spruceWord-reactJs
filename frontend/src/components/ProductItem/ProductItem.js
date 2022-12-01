import React from 'react'
import './productItem.css'
import Btn from './Btn'

const ProductItem = (e) => {

    return (
        <div className="productCard">
            <img src={e.prop.images} alt="" />
            <h3>{e.prop.name}</h3>
            <p>Rs. {e.prop.price}</p>
            <p>{e.prop.description}</p>
            <Btn  e={e} />
        </div>
    )
}

export default ProductItem