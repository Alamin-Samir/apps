import React from 'react';
import { getProducts } from './lib/api';
import ProductCard from './components/ProductCard';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <h1>প্রোডাক্ট লিস্ট</h1>

      {products.map(function(item) {
        return (
          <ProductCard 
            key={item.id} 
            title={item.title} 
            price={item.price} 
            image={item.image} 
          />
        );
      })}
    </div>
  );
}