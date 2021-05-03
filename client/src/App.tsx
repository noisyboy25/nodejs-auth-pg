import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [mode, setMode] = useState('register');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const loginData = { login, password };
    console.log(loginData);

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleRegister = async () => {
    const loginData = { login, password };
    console.log(loginData);

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <div>
            <input
              id="register-mode"
              type="radio"
              value="register"
              checked={mode === 'register'}
              onChange={(event) => setMode(event.target.value)}
            />
            <label htmlFor="register-mode">Register</label>
          </div>
          <div>
            <input
              id="login-mode"
              type="radio"
              value="login"
              checked={mode === 'login'}
              onChange={(event) => setMode(event.target.value)}
            />
            <label htmlFor="login-mode">Login</label>
          </div>
        </div>

        {mode === 'register' ? (
          <Form
            setLogin={setLogin}
            setPassword={setPassword}
            handleSubmit={handleRegister}
          />
        ) : (
          <Form
            setLogin={setLogin}
            setPassword={setPassword}
            handleSubmit={handleLogin}
          />
        )}

        <div>
          <div>Login: {login}</div>
          <div>Password: {password}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
