import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use the correct import for App Router

const CartModal = ({ isOpen, closeModal }) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      // Redirect to the /cart page when the modal opens
      router.push('/checkout');
    }
  }, [isOpen, router]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-1/3 rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Added Successfully!</h2>
      </div>
    </div>
  );
};

export default CartModal;