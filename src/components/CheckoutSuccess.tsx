import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout Successful</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">Back to Products</Link>
    </div>
  );
};

export default CheckoutSuccess;
