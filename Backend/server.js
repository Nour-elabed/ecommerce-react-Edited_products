import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {// create route for the root path
  res.send('Hello worldd!');
});
app.get('/login', (req, res) => {// create route for the root path
  res.send('this is login page');
});
app.get('/register', (req, res) => {// create route for the root path
  res.send('this is register page');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});