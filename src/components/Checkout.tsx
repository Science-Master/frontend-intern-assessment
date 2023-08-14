import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const selectedProduct = useSelector((state: RootState) => state.selectedProduct);
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Selected Product</h2>
        <p className="text-gray-600">Name: {selectedProduct.name}</p>
        <p className="text-gray-600">Price: {selectedProduct.price}</p>
      </div>
      <form className="mt-4">
        <label className="block mb-2" htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          className="w-full p-2 border rounded"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
      <Link to="/" className="mt-2 inline-block text-blue-500 hover:underline">Back to Products</Link>
    </div>
  );
};

export default Checkout;
