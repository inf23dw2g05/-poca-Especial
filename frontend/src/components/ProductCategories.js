import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/ProductCategories');
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch product categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categorias de Produtos</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.categoryName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;