import React from 'react'
import { Link } from 'react-router-dom'


const Btn = ({ e }) => {

    return (
        <>
            <div>


                <Link className='productItemBtn' to={`/detailproduct/${e.prop._id}`}>View</Link>
                <Link className='productItemBtn' to='/cart'>Buy</Link> 
                </div>
        </>
    )
}

export default Btn