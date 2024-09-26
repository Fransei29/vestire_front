import React from 'react';

function Cart({ cart, clearCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.nombre} - Cantidad: {item.cantidad}</li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Comprar</button>
    </div>
  );
}

export default Cart;
