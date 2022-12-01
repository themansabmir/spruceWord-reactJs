import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import GlobalState from '../../GlobalState'


import './Home.css'



const Home = () => {
    const state = useContext(GlobalState)
    const [products] = state.shopAPI.products
    const bestSeller = products.slice(0, 6)

    return (
        <div className='home'>
            {/* hero image */}
            <div className="header">
                <h1> The less you reveal,<br></br> The more people can wonder.</h1>
                <Link className='btn' to='/Products'> SHOP NOW</Link>
            </div>
            {/* hero image completed */}

            {/* small into */}
            <div className="desc_container">
                <div className="descCard">
                    <h1>UNPARALLELED QUALITY</h1>
                    <p>Our hijabs & accessories are made to last from best-in-class materials. You won't find them anywhere else.</p>
                </div>
                <div className="descCard">
                    <h1>MADE WITH A MISSION</h1>
                    <p>Our mission is to create a world where every woman feels comfortable and confident.</p>
                </div>
                <div className="descCard">
                    <h1>COMMUNITY COMES FIRST</h1>
                    <p>We exist to celebrate YOU, with great products and uplifting content to enrich your life and nourish your soul.</p>
                </div>
            </div>
            {/* {intro the end} */}

            {/* {best seller section started} */}
            <div className='sellerContainer'>

                <h1>SHOP BEST SELLER</h1>
                <div className='cardContainer'>
                    {
                        bestSeller.map(e => {
                            return (

                                <div className="productCard" key={Math.random()}>
                                    <img src={e.images} alt="" />
                                    <h3>{e.name}</h3>
                                    <p>Rs. {e.price}</p>


                                </div>

                            )
                        })
                    }
                </div>
                <h1><Link to='/Products' className='viewAll' > View All</Link></h1>
            </div>
            {/* {best seller section end} */}

            {/* {small about us} */}
            <div className="desc_container f">
                <h1>At Spruce World, we make the hijabs you always wished you had — or the ones you never knew were possible.</h1>
                <p>Driven by the Islamic principle of ihsaan (striving for perfection in all we do), we make every hijab and accessory from scratch with meticulous attention to quality, style and innovation — you won't find our products anywhere else. Each Spruce World product is a timeless piece we know you'll be excited to put on and feel comfortable and confident in all day, for years to come.</p>
            </div>
            {/* {small about us over} */}

            {/* {SHOP BY CATEGGORY SECTION} */}
            <div className='sellerContainer'>

                <h1>SHOP BY COLLECTION</h1>
                <div className='cardContainer'>
                    {
                        bestSeller.map(e => {
                            return (

                                <div className="productCard" key={Math.random()}>
                                    <img src={e.images} alt="" />
                                    <h3>{e.name}</h3>
                                    <p>Rs. {e.price}</p>


                                </div>

                            )
                        })
                    }
                </div>
                <h1><Link to='/Products' className='viewAll' > View All</Link></h1>
            </div>
            {/* {SHOP BY CATEGGORY SECTION OVER} */}
            <footer className='footerContainer'>
                <div className="footerCard">
                    <h2>Company</h2>
                    <ul>
                        <li>About us</li>
                        <li>Locate us</li>
                        <li>Refund</li>
                    </ul>
                </div>
                <div className="footerCard">
                    <h2>CONTACT</h2>
                    <ul>
                        <li>Call us Monday–Friday,</li>
                        <li>9am–5pm EST or email anytime!</li>
                        <li>1122334455</li>
                    </ul>
                </div>
                <div className="footerCard">
                    <h2>Social media</h2>
                    <ul>
                        <li>facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                
            </footer>
            <div className='maker'>made by Mansab Mir</div>
            








        </div>
    )
}

export default Home