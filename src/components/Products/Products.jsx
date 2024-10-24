import React from 'react'
import "./Products.css"
import LikeIcon from "../../assets/images/like-icon.svg"
import CartIcon from "../../assets/images/cart-icon.svg"

const products = [
    {
        id:1,
        img:"src/assets/images/apple-smart-1.png",
        title:"Apple Smart I",
        imgRate:"src/assets/images/rate-icon.svg",
        price: 300.00,
        disCountPrice: 255.00
    },
    {
        id:1,
        img:"src/assets/images/apple-smart-2.png",
        title:"Apple Smart II",
        imgRate:"src/assets/images/rate-icon.svg",
        price: 300.00,
        disCountPrice: 255.00
    },
    {
        id:1,
        img:"src/assets/images/apple-smart-3.png",
        title:"Apple Smart III",
        imgRate:"src/assets/images/rate-icon.svg",
        price: 300.00,
        disCountPrice: 255.00
    },
    {
        id:1,
        img:"src/assets/images/apple-smart-4.png",
        title:"Apple Smart IV",
        imgRate:"src/assets/images/rate-icon.svg",
        price: 450.00,
        disCountPrice: 399.00
    },
    {
        id:1,
        img:"src/assets/images/samsung-watch.png",
        title:"Samsung Watch Pro",
        imgRate:"src/assets/images/rate-icon.svg",
        price: 300.00,
        disCountPrice: 255.00
    },
    {
        id:1,
        img:"src/assets/images/Fitbit-watch.png",
        title:"Fitbit Max 1",
        imgRate:"src/assets/images/rate-icon.svg",
        price: 300.00,
        disCountPrice: 155.000
    },
]

const Products = () => {
  return (
    <div className='container'>
        <div className='products'>
            <strong className='products-strong'>Find your favourite smart watch.</strong>
            <h2 className='products-title'>Our Latest Products</h2>
            <ul className='product-list'>
                {
                    products.map((item) =>(
                        <li className='product-item'>
                            <div className='product-wrapper'>
                                <div className='icon-wrapper'>
                                    <img src={LikeIcon} alt="Like-Icon" width={38} height={38}/>
                                    <img src={CartIcon} alt="Cart-Icon" width={38} height={38}/>
                                </div>
                                <img className='img-product' src={item.img} alt={item.title} width={250} height={280}/>
                                <h3 className='item-title'>{item.title}</h3>
                                <img src={item.imgRate} alt="Rate-Icon" width={104} height={14}/>
                                <div className='price-wrapper'>
                                    <p className='price-text'>${item.price.brm()}</p>
                                    <p className='discount-price'>${item.disCountPrice.brm()}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <button className='product-btn'>View More</button>
        </div>
    </div>
  )
}    

export default Products