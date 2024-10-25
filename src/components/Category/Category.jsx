import React from 'react'
import "./Category.css"

const categoryItem = [
    {
        id:1,
        img:"../../assets/images/apple-img.png",
        title:"Apple",
        description:"Apple is one of the most famous smart watches providing company."
    },
    {
        id:2,
        img:"src/assets/images/xiaomi-img.png",
        title:"Xiaomi",
        description:"Xiaomi smart watches are produced by MI company."
    },
    {
        id:3,
        img:"src/assets/images/fit-bit.png",
        title:"FitBit",
        description:"FitBit smart watches are best for there health and fitness features."
    }
]

const Category = () => {
  return (
    <div className='container'>
        <ul className='category-list'>
            {
                categoryItem.map((item) => (
                    <li id={item.id} className='category-item'>
                        <img src={item.img} alt={item.title} />
                        <div className='item-wrapper'>
                            <h2 className='item-title'>{item.title}</h2>
                            <p className='item-text'>{item.description}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Category