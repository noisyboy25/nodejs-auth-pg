import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import jwt from 'jsonwebtoken';

const PORT = process.env.PORT || 5000;

let users: { login: string; password: string }[] = [];

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(express.json());
app.use(cookieParser());

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.post('/api/register', (req, res) => {
  const data = req.body;
  console.log(req.body);
  users.push({ login: data.login, password: data.password });
  res.send({ message: 'Successfully registered' });
});

app.post('/api/login', (req, res) => {
  const data = req.body;
  console.log(data);

  const user: any = users.find((u) => u.login === data.login);

  if (!user || user.password !== data.password) {
    res.clearCookie('JWT');
    return res.status(401).send('Incorrect login or password');
  }

  const token = jwt.sign({ login: data.login }, 'secret');
  console.log(token);

  res.cookie('JWT', token, { httpOnly: true });
  res.send({ message: 'Successfully logged in' });
});

app.get('/api/logout', (req, res) => {
  res.clearCookie('JWT');
  return res.send('Successfully logged out');
});

app.get('/api/secured', (req, res) => {
  console.log(req.cookies);

  const auth = jwt.verify(req.cookies.JWT, 'secret');
  console.log(auth);
  res.send({ message: 'Secured' });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
