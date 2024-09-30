import React, { useState } from 'react';
import Navbar from './Navbar/Navbar'; 
import { Link } from 'react-router-dom';
import './App.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Voorkom dat de pagina opnieuw laadt
    const login = { username, password };
    console.log(login); // Voor debuggen, laat zien wat er is ingelogd
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Welkom</h1>
        <br />
        <input 
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Bijwerken van username
          required
          className='input-username'
          type="text" 
        />
        <br />
        <br />
        <input 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Bijwerken van password
          required
          className='input-password'
          type="password" // Gebruik 'password' type voor veiligheid
        />
        <br />
        <br />
        <button 
          className='Button' 
          type='submit'
        >
          Login
        </button>
      </form>
      <br />
      <p>
        Geen account? <Link to="/register">Registreren</Link>
      </p>
    </div>
  );
}

export default Login;
