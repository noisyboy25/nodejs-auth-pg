import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.post('/api/login', (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
