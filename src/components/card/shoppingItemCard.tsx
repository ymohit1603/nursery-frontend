import React from 'react';

interface cardTypes {
  imgUrl: string,
  quantity: number,
  title: string,
  price: number
}

const ItemCard: React.FC<cardTypes> = ({ imgUrl, quantity, title, price }) => {
  return (
    <div className="flex flex-row justify-evenly bg-white shadow-lg rounded-lg p-6 m-4 w-full">
      <div className="min-w-44 rounded-3xl  bg-black">
        <img className="h-36 w-full m-2 object-cover rounded-t-lg" src={imgUrl} alt="image" />
      </div>
      <div className="min-w-80 ml-3 flex flex-col justify-between">
              <div >
                <div className='flex flex-row justify-between mb-2'>
                <p className="text-xl font-bold text-gray-800">{title}</p>
                <p className="text-lg text-gray-600">Rs {price}</p> 
                </div>     
                <p className="text-sm text-gray-500">Quantity: {quantity}</p>
              </div>
              <div className='w-full flex justify-end'>
                <button className='text-blue-600 font-medium hover:text-sky-800'>Remove</button>
             </div>
    </div>
          
    </div>
  );
}



export default ItemCard;
