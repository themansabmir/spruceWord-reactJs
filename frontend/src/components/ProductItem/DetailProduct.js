import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import GlobalState from '../../GlobalState'
import './detailProduct.css'


const DetailProduct = () => {
    const state = useContext(GlobalState)
    const [products] = state.shopAPI.products
    const [detail, setDetail] = useState([])
    const params = useParams()

    useEffect(() => {
        products.forEach(element => {
            if (element._id === params.id) {

                setDetail(element)
            }
        });
    }, [params, products])



    const { images, name, price, description, category } = detail

    return (
        <>

            <main>
                <img src={images} alt="" />

                <div className="content">
                    <span>{category}</span>
                    <h1>{name}</h1>
                    <p>Price : Rs. {price}</p>
                    <p>{description}</p>
                    <Link className='productItemBtn' to='/Cart'> Add To Cart</Link>

                </div>




            </main>
            
        </>
    )
}

export default DetailProduct