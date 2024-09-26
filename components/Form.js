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
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Registrarse</button>
          </form>

          {/* Formulario de inicio de sesión */}
          <form id="loginForm" onSubmit={handleLogin}>
            <input
              type="text"
              id="loginUsername"
              placeholder="Nombre de usuario"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="loginPassword"
              placeholder="Contraseña"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>

        <div>
          <h2 className="Newform">
            Descubre lo nuevo en <strong>Vestiré</strong>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Form;
