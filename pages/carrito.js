import { useState, useEffect } from 'react';

// Definición de la CLASE Producto
class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const productosIniciales = [
    new Producto(1, 'Zapatilla', 50, 'zapatilla'),
    new Producto(2, 'Ojota', 20, 'ojota'),
    new Producto(3, 'Pantalon', 30, 'pantalones_1203-8308.jpg'),
    new Producto(4, 'Remera', 30, 'remera'),
    new Producto(5, 'Campera', 50, 'campera'),
    new Producto(6, 'Lentes', 40, 'lentes')
];

export default function Carrito() {
    const [productos, setProductos] = useState(productosIniciales);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');

    // Cargar el carrito desde localStorage cuando el componente se monta
    useEffect(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            setCart(JSON.parse(carritoGuardado));
        }
    }, []);

    // Actualiza el carrito en el localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart));
        updateTotalPrice(cart);
    }, [cart]);

    // Función para agregar productos al carrito
    const agregarAlCarrito = (producto) => {
        const productoExistente = cart.find(p => p.id === producto.id);
        if (productoExistente) {
            setCart(cart.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p));
        } else {
            setCart([...cart, { ...producto, cantidad: 1 }]);
        }
    };

    // Actualizar el precio total
    const updateTotalPrice = (cart) => {
        const total = cart.reduce((sum, product) => sum + product.precio * product.cantidad, 0);
        setTotalPrice(total);
    };

    // Evento de compra
    const handleComprar = () => {
        console.log('Usted ha comprado: ', cart);
        alert('¡Compra realizada! Revisa la consola para ver los detalles.');
        setCart([]);
    };

    // Manejo de registro de usuarios
    const handleRegister = (e) => {
        e.preventDefault();
        localStorage.setItem(username, JSON.stringify({ password }));
        setWelcomeMessage(`Bienvenido, ${username}!`);
        alert('Usuario registrado con éxito!');
    };

    // Manejo de inicio de sesión
    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem(loginUsername));
        if (storedUser && storedUser.password === loginPassword) {
            setWelcomeMessage(`Bienvenido, ${loginUsername}!`);
            alert('Inicio de sesión exitoso!');
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    };

    return (
              <div className="Shopping">
                    <div id="productos-container">
                        {productos.map((producto, index) => (
                            <div className={`ali Art${index + 1}`} key={producto.id}>
                                <img src={`/img/${producto.imagen}`} alt={producto.nombre} />
                                <h3>{producto.nombre}</h3>
                                <p>Precio: ${producto.precio}</p>
                                <button className="buttonplace" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                            </div>
                        ))}
                    </div>

                    <div className="Carrito">
                        <h2 className="titleCarro">Carrito de compras</h2>
                        <ul id="cartItems">
                            {cart.map((product, index) => (
                                <li key={index}>
                                    {product.nombre} - Cantidad: {product.cantidad}
                                </li>
                            ))}
                        </ul>
                        <p id="totalPrice">Total: ${totalPrice}</p>
                        <button id="comprar-btn" onClick={handleComprar}>Comprar</button>
                    </div>
                </div>
    );
}