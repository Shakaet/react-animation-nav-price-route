import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const PriceOption = ({option}) => {

    let {name,price,features}=option
   
    return (
        <div className='mt-10 bg-yellow-200 p-8 rounded-lg text-center flex flex-col'>
            <div className=''>
            <span className='text-7xl font-extrabold'> {price}</span>
            <span className='text-2xl'>/mon</span>
            
        </div>
        <div>

            <h2 className='text-3xl font-bold'>{name}</h2>
            
        </div>


       <div className='flex-grow'>
       {features.map(item => (

        <div key={item} className="flex items-center">
            <FaRegCheckCircle />
            <p className="ml-2">{item}</p>
        </div>
        ))}
        </div>

        <button className='mt-10 bg-blue-600 w-full py-3 rounded-lg hover:bg-yellow-400'>Buy Now</button>
            

     
        </div>
    );
};

export default PriceOption;