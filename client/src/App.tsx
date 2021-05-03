import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
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

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Form
          setLogin={setLogin}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />

        <div>
          <div>Login: {login}</div>
          <div>Password: {password}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
