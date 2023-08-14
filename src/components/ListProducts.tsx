// src/components/ListProducts.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: string;
  
}

const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    axios.get('https://dummyjson.com/docs/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">Price: {product.price}</p>
            <Link to={`/product/${product.id}`} className="mt-2 inline-block text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
