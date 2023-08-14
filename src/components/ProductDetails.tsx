// src/components/ProductDetails.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

interface Product {
  id: string; 
  name: string;
  price: number;
  description: string;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);


  
  return (
    <div className="container mx-auto p-8">
      {product && (
        <div className="bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-600">Price: {product.price}</p>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          <Link to="/" className="mt-2 inline-block text-blue-500 hover:underline">Back to Products</Link>
        </div>
      )}
    </div>
  );
};

  export default ProductDetails;
  