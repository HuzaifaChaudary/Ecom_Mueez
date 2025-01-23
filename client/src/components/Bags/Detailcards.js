import React from 'react';

const Detailcards = ({ product }) => {
  return (
    <div className="detail-card border p-4 m-2 rounded shadow-md">

      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/${product.mainImage}`} 
        alt={product.name}
        className="w-full h-40 object-cover rounded"
        style={{width:250, height:250}}
      />
      <h3 className="text-lg font-bold mt-2" >{product.name}</h3>
      <p className="text-gray-700 mt-1" style={{width:250, height:80}}>{product.description}</p>
      <span className="text-sm line-through text-gray-500 mr-2">
                    Rs {product.oldPrice}
                  </span>
                
                <span className="text-sm font-semibold text-red-500">
                  Rs {product.newPrice}
                </span>
    </div>
  );
};

export default Detailcards;
