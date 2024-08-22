import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users'; // Componente para a página de usuários
import ProductCategories from './components/ProductCategories'; // Componente para categorias de produtos
import Products from './components/Products'; // Componente para produtos
import Cart from './components/Cart'; // Componente para o carrinho

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/product-categories" element={<ProductCategories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;