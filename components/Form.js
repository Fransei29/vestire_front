import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Funciones para manejar los formularios
  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica para registro
    console.log(`Registrarse con usuario: ${username} y contraseña: ${password}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para inicio de sesión
    console.log(`Iniciar sesión con usuario: ${loginUsername} y contraseña: ${loginPassword}`);
  };

  return (
    <div className="containerAqui">
      <div className="TiName">
        <div className="textoTiName">
          {/* Formulario de registro */}
          <form id="registerForm" onSubmit={handleRegister}>
            <input
              type="text"
              id="username"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign up</button>
          </form>

          {/* Formulario de inicio de sesión */}
          <form id="loginForm" onSubmit={handleLogin}>
            <input
              type="text"
              id="loginUsername"
              placeholder="User name"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Log in</button>
          </form>
        </div>

        <div>
          
          <p className="NewformMain">
            Vestiré
          </p>
          <p className="Newform">
            Discover the new
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Form;
