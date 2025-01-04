import React from 'react';
import { useRouter } from 'next/router';

const CartModal = ({ isOpen, closeModal }) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-1/3 rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Added to Cart!</h2>
        <p className="text-gray-600 mb-6">Your product has been successfully added to the cart.</p>
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition-colors duration-300"
            onClick={closeModal}
          >
            Continue Shopping
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-800 transition-colors duration-300"
            onClick={() => router.push('/cart')}
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
