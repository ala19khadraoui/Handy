import React, { Component, Fragment } from 'react'
import'../../index.css'
import Tapie from './assets/ph10.jpg'
import Bracelet from './assets/ph2.jpg'
import OliveOil from './assets/ph3.jpg'
import Pride from './assets/ph4.jpg'
import {FaStar} from 'react-icons/fa6'
import Star from '../../assets/fullStar.png'
import EmptyStar from '../../assets/emptyStar.png'
import HalfStar from '../../assets/halfStar.png'

const ProductData = [
  {
    id:1,
    img:Tapie,
    title: "Tapie",
    Rating:2,
    price:400.00,
  },
  {
    id:2,
    img:Bracelet,
    title: "Bracelet",
    Rating:4,
    price:1000.00,
  },
  {
    id:3,
    img:Pride,
    title: "Pride",
    Rating:4,
    price:500.00,
  },
  {
    id:4,
    img:OliveOil,
    title: "OliveOil",
    Rating:5,
    price:100.00,
  }
]


export class FeaturedProduct extends Component {
  render() {
    return (
      <Fragment >
        <div className='h-screen'>  
      <h2 className=' flex justify-center font-script-mt font-bold text-[57px]  '>Our feature</h2>
     
      <p className='flex font-#000000B3 text-[30px] h-50 justify-center'>here you can check our new products with fair price </p>
     
      <div>
    <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
      {/** card section */}
      {ProductData.map((data) => (
        <div 
        
       key={data.id} className='space-y-3'>
        <div className='flex items-center gap-1 '>
          <FaStar className='text-[40px] text-yellow-400'/>
        <span>{data.Rating}</span></div>
        <img className='h-[300px] w-[300px] object-cover  rounded-md' src={data.img} alt=""/>
     <h3 className='font-semibold'>{data.title}</h3>
     <h4 className='text-sm text-gray-600'>{data.price}</h4>
    
      </div>))}
         
      </div>
          </div> 
         </div>
      
      </Fragment>
    )
  }
}

export default FeaturedProduct
