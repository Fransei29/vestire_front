import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import Cart from './Cart';
import './App.css';

const initialProducts = [
  { id: 1, nombre: 'Zapatilla', precio: 50, imagen: 'zapatilla' },
  { id: 2, nombre: 'Ojota', precio: 20, imagen: 'ojota' },
  { id: 3, nombre: 'Pantalon', precio: 30, imagen: 'pantalones_1203-8308.jpg' },
  { id: 4, nombre: 'Remera', precio: 30, imagen: 'remera' },
  { id: 5, nombre: 'Campera', precio: 50, imagen: 'campera' },
  { id: 6, nombre: 'Lentes', precio: 40, imagen: 'lentes' },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('carrito')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('carrito');
  };

  return (
    <div className="App">
      <h1>Shop de Ropa</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
}

export default App;

