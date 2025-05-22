import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Definición de la CLASE Producto
class Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const productosIniciales = [
    new Producto(1, 'Sneakers','Sports shoe. Upper in a combination of materials', 50, 'zapatilla'),
    new Producto(2, 'Sandals',' Open-toe sandals with adjustable straps', 20, 'ojota'),
    new Producto(3, 'Trousers','Straight-leg trousers with a zip fly and side pockets', 30, 'pantalones_1203-8308.jpg'),
    new Producto(4, 'T-shirt','Cotton T-shirt with a round neck and short sleeves', 30, 'remera'),
    new Producto(5, 'Jacket',' Lightweight jacket with a hood and zip fastening', 50, 'campera'),
    new Producto(6, 'Sunglasses',' Sleek sunglasses with UV protection and a matte finish', 40, 'lentes')
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
                                <p className='description-product'>{producto.descripcion}</p>
                                <p>${producto.precio}</p>
                                <button className="buttonplace" onClick={() => agregarAlCarrito(producto)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>

                    <div id="carro" className="Carrito">
                        <h2 className="titleCarro">🛒 Cart</h2>
                        {cart.length === 0 ? (
                            <p className="emptyCart">Your cart is empty</p>
                        ) : (
                            <>
                            <ul id="cartItems">
                                {cart.map((product, index) => (
                                <li key={index} className="cart-item">
                                    <span className="product-name">{product.nombre}</span>
                                    <span className="product-qty">× {product.cantidad}</span>
                                    <span className="product-price">${(product.precio * product.cantidad).toFixed(2)}</span>
                                </li>
                                ))}
                            </ul>
                            <p id="totalPrice">Total: ${totalPrice.toFixed(2)}</p>
                            <button id="comprar-btn" className="buttonplace" onClick={handleComprar}>Checkout</button>
                            </>
                        )}
                        </div>

                </div>
    );
}
