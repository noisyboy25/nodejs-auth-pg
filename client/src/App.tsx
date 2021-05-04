import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import SecuredTest from './components/SecuredTest';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
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

    if (res.status === 200) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

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

  const handleLogout = async () => {
    const res = await fetch('/api/logout');
    console.log(res);
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {!loggedIn ? (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              ) : (
                <button onClick={() => handleLogout()}>Logout</button>
              )}
            </ul>
          </nav>
        </header>
        <main>
          <div>
            <Switch>
              <Route path="/register">
                <h3>Create a new account</h3>
                <Form
                  login={login}
                  setLogin={setLogin}
                  password={password}
                  setPassword={setPassword}
                  handleSubmit={handleRegister}
                />
              </Route>
              <Route path="/login">
                {!loggedIn && (
                  <div>
                    <h3>Login</h3>
                    <Form
                      login={login}
                      setLogin={setLogin}
                      password={password}
                      setPassword={setPassword}
                      handleSubmit={handleLogin}
                    />
                  </div>
                )}
              </Route>

              <Route path="/">
                <SecuredTest />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
